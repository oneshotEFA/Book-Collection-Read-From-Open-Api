import React, { createContext, useState } from "react";
import { View, Text } from "react-native";

export const ThemeContext = createContext(); 

export const ThemeProvider = ({ children }) => {
  const [dark, setdark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setdark }}>
      {children}
    </ThemeContext.Provider>
  );
};
