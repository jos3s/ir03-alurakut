import { createGlobalStyle } from "styled-components";
import { AlurakutStyles } from "../lib/AluraCommons";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size:62.5%;
  }
  body {
    font-family:sans-serif;
    background:${({ theme }) => theme.colors.bgDefault};
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  #__next{
    display: flex;
    min-height:100vh;
    flex-direction: column;
  }

 ${AlurakutStyles}
`;
