import React, { useContext } from "react";
import "./sass/index.css";

import { useEffect } from "react";
import Todos from "./components/Todos";
import ThemeContextProvider from "./contexts/TodoContext";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

const App = () => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <div className={`app ${isLightTheme ? "light" : "dark"}`}>
        <AddForm />
        <Header />
        <Todos />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
