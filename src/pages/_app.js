import { ThemeContextProvider } from "../contexts/ThemeContext";
export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}
