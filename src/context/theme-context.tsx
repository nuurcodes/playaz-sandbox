import React from "react";
import { useContext, useEffect, useState, createContext } from "react";
import { MD3LightTheme, MD3DarkTheme, MD3Theme } from "react-native-paper";

interface Props {
  children?: React.ReactNode;
}

export interface ThemeContextType {
  theme: MD3Theme;
  themeInitialized: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(MD3LightTheme);
  const [themeInitialized, setThemeInitialized] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTheme(MD3DarkTheme);
      setThemeInitialized(true);
    }, 1000);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, themeInitialized }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeContext.`);
  }
  return context;
};
