import styled from "styled-components";

export const Box = styled.div`
  background: #ffffff;
  border-radius: 0.8rem;
  padding: 1.6rem;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 1.4rem;
    color: #2e7bb4;
    text-decoration: none;
    font-weight: 800;
  }
  hr {
    margin-top: 1.2rem;
    margin-bottom: 0.8rem;
    border-color: transparent;
    border-bottom-color: #ecf2fa;
  }
  input {
    width: 100%;
    background-color: #f4f4f4;
    color: #333333;
    border: 0;
    padding: 1.4rem 1.6rem;
    margin-bottom: 1.4rem;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
`;
