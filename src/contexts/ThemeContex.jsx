import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const { darkMode, setDarkMode } = useState(false);
  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const values = { darkMode, setDarkMode, toggleTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
