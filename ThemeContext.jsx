import { createContext, useState } from "react";

// Create
export const ThemeContext = createContext();

const themes = {
  light: {
    background: "#f2f2f2",
    color: "black",
    padding: "50px"
  },
  dark: {
    background: "#404040",
    color: "#e6e6e6",
    padding: "50px"
  }
};

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light"); // 'light','dark'

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ themes, currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
