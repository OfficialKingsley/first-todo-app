const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please remember to add a title"],
  },
  description: String,
  time: {
    type: String,
    required: [1, "Please include a time"],
    default: new Date().toLocaleString(),
  },
  reminder: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

// const data = new Todo({
//   title: "This is title 1",
//   description: "This is a description",
//   time: new Date().toLocaleDateString(),
//   reminder: true,
// });
// data.save();

// Todo.find((err, data) => {
//   if (err) {
//   } else {
//     console.log(data);
//   }
// });
const addTodo = (task) => {
  const newTask = new Todo({ ...task });
  newTask.save();
  console.log("successfully added the task", newTask);
  return newTask;
};

//Read data
const getData = (res) => {
  Todo.find((err, tds) => {
    if (err) {
      console.log(err.message);
    } else {
      res.status(200).json(tds);
    }
  });
};

// Update Data
const updateTodo = (id, task) => {
  Todo.updateOne({ _id: id }, { ...task }, (err) => {
    if (err) {
    } else {
      console.log("Successfully updated");
    }
  });
};

//Delete data
const deleteTodo = (id) => {
  Todo.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully deleted");
    }
  });
};

module.exports = { Todo, addTodo, getData, updateTodo, deleteTodo };
