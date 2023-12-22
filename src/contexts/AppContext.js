import React, { createContext, useContext, useState } from "react";
import theme from "../styles/theme.style";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getTheme = (isDarkMode) => {
    return isDarkMode ? theme.DARK : theme.LIGHT;
  }
  const themeValue = getTheme(isDarkMode);

  return (
    <AppContext.Provider value={{ user, updateUser, theme: themeValue, toggleDarkMode, isDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};
