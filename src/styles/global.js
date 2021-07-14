import { createGlobalStyle } from "styled-components";
import { AlurakutLoginScreen } from "../lib/AluraCommons";

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
    background:${({ theme }) => theme.colors.bg.primary};
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
  input {
    background: ${({ theme }) => theme.colors.bg.primary};
    transition: 0.3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  a,
  button {
    cursor: pointer;
    transition: 0.3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: 0.8;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  ${AlurakutLoginScreen}
  hr {
    margin-top: ${({ theme }) => theme.space.xsmall};
    margin-bottom: 0.8rem;
    border-color: transparent;
    border-bottom-color: ${({ theme }) => theme.colors.inputBg};
  }
`;
