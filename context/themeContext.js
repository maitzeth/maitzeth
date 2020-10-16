import React, { useState, createContext, useMemo } from "react";

export const ThemeContext = createContext();

export function CustomThemeProvider(props) {
  const [theme, setTheme] = useState("light");

  function themeToggler() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const values = useMemo(() => {
    return {
      theme,
      themeToggler,
    };
  }, [theme]);

  return <ThemeContext.Provider value={values} {...props} />;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("¡Ups!");
  }

  return context;
}
