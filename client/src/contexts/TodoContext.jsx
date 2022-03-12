import React, { createContext, useState, useEffect } from "react";

export const TodosContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [toUpdate, setToUpdate] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);

  const getData = async () => {
    const res = await fetch("http://localhost:7000/apis/todos");
    const tds = await res.json();
    setTodos(tds);
  };

  useEffect(() => getData());

  const deleteTask = (id) => {
    fetch(`http://localhost:7000/apis/todos/${id}`, {
      method: "DELETE",
    });
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:7000/apis/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    console.log(res);
  };
  const updateTask = async (id, task) => {
    const res = await fetch(`http://localhost:7000/apis/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    console.log(res);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        deleteTask,
        addTask,
        getData,
        updateTask,
        toUpdate,
        setToUpdate,
        isUpdating,
        setIsUpdating,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
