import React, { useContext } from "react";
import { TodosContext } from "../contexts/TodoContext";
import Todo from "./Todo";

const Todos = () => {
  const { todos } = useContext(TodosContext);
  return (
    <div className="todos">
      <h2 className="todos-title">TODOS</h2>
      {todos.length ? (
        todos.map((todo) => <Todo key={todo._id} todo={todo} />)
      ) : (
        <p>Sorry You have no tasks to show</p>
      )}
    </div>
  );
};

export default Todos;
