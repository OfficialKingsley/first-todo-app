const {
  addTodo,
  getData,
  updateTodo,
  deleteTodo,
} = require("../../apis/todos");

const getTodos = (req, res) => {
  try {
    getData(res);
  } catch (error) {
    res.status(407).json({ message: error.message });
  }
};

const addTodos = (req, res) => {
  try {
    const task = req.body;
    const newTask = addTodo(task);
    res.status(200).json({ message: "Data successfully added", newTask });
  } catch (error) {
    res.status(407).json({ message: error.message });
  }
};

const updateTodos = (req, res) => {
  try {
    updateTodo(req.params.id, req.body);
    res.status(200).json({ message: `Successfully updated` });
  } catch (error) {
    res.status(400);
  }
};
const deleteTodos = (req, res) => {
  try {
    deleteTodo(req.params.id);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addTodos, getTodos, updateTodos, deleteTodos };
