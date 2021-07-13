import { createContext, useState, useEffect } from "react";
import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";

import { theme as lightTheme, darkTheme } from "../styles/theme";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const isLight = theme.isLight;

  useEffect(() => {
    const localTheme = window.localStorage.getItem("@jo3s/alurakut");

    localTheme && setTheme(JSON.parse(localTheme));
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      window.localStorage.setItem(
        "@jo3s/alurakut",
        JSON.stringify(darkTheme)
      );
      setTheme(darkTheme);
    } else {
      window.localStorage.setItem(
        "@jo3s/alurakut",
        JSON.stringify(lightTheme)
      );
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
