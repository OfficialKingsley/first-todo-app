import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { TodosContext } from "../contexts/TodoContext";

const AddForm = () => {
  const { addTask, isUpdating, toUpdate, updateTask, setIsUpdating } =
    useContext(TodosContext);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [reminder, setReminder] = useState(false);

  const checkIsUpdating = () => {
    if (isUpdating) {
      setTitle(toUpdate.title);
      setTime(toUpdate.time);
      setReminder(toUpdate.reminder);
      setDescription(toUpdate.description);
    }
  };
  const reset = () => {
    setDescription("");
    setTime("");
    setReminder(false);
    setTitle("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description, time, reminder };
    addTask(task);
    reset();
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const task = { title, description, time, reminder };
    updateTask(toUpdate._id, task);
    setIsUpdating(false);
    reset();
  };
  useEffect(() => {
    checkIsUpdating();
  });
  return (
    <form className="addForm">
      <h3>Add Task</h3>
      <div className="inputs">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <input
          type="text"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          required
        />
        <div className="reminder-container">
          <span>Reminder</span>
          <input
            type="checkbox"
            name=""
            id=""
            value={reminder}
            onClick={(e) => {
              setReminder(e.currentTarget.checked);
            }}
          />
        </div>
        <button
          type="submit"
          onClick={(e) => {
            isUpdating ? handleUpdate(e) : handleSubmit(e);
          }}
        >
          {isUpdating ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default AddForm;
