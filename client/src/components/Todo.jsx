import React, { useContext } from "react";
import { useState } from "react";
import { TodosContext } from "../contexts/TodoContext";

const Todo = ({ todo }) => {
  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const { deleteTask, setToUpdate, setIsUpdating } = useContext(TodosContext);

  const handleEdit = (e) => {
    e.preventDefault();
    setToUpdate(todo);
    setIsUpdating(true);
  };

  return (
    <div className="todo">
      <div className="titleBar">
        <h3 className="title">{todo.title}</h3>
        <span
          title="Delete Task"
          onClick={() => {
            deleteTask(todo._id);
          }}
        >
          &times;
        </span>
      </div>

      {showDescription && (
        <p>
          {todo.description ? (
            todo.description
          ) : (
            <>There is no description for this task</>
          )}
        </p>
      )}
      <footer>
        <small>{todo.time}</small>
        <button
          onClick={(e) => {
            handleEdit(e);
          }}
          className="edit-button"
        >
          Edit
        </button>
        <button
          title={showDescription ? "Hide Description" : "Show Description"}
          onClick={() => {
            toggleDescription();
          }}
        >
          {showDescription ? "Hide Description" : "Show Description"}
        </button>
      </footer>
    </div>
  );
};

export default Todo;
