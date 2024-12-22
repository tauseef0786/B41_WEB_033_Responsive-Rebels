import React, { createContext, useContext, useEffect, useState } from "react";

// Create ThemeContext
const ThemeContext = createContext();

// Custom hook for using the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeContext provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light" 
  );

  // Apply theme to the `html` element
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme); 
  }, [theme]);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
