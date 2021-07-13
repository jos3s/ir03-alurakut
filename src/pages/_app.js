import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./../styles/global";
import { theme, darkTheme } from "./../styles/theme";

import { ThemeContextProvider } from "../contexts/ThemeContext";
export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
