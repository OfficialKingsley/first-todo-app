import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>Task Buddy</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;
