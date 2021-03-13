import React, { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext();

export function CustomThemeProvider(props) {
  const [activeTheme, setActiveTheme] = useState("light");

  function themeToggler() {
    if (activeTheme === "light") {
      setActiveTheme("dark");
    } else {
      setActiveTheme("light");
    }
  }

  const values = useMemo(() => {
    return {
      activeTheme,
      themeToggler,
    };
  }, [activeTheme, themeToggler]);

  return <ThemeContext.Provider value={values} {...props} />;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("¡Ups!");
  }

  return context;
}
