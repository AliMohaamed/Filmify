import React, { useState } from "react";
import { ThemeContext } from "./themeContext";

export function ThemeProvider(props) {
  let [theme, setTheme] = useState("dark");
  let toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
