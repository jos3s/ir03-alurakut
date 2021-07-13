import styled from "styled-components";

const BASE_URL = "http://alurakut.vercel.app/";

export const Logo = styled.img`
  background-color: #fefefe;
  padding: 9px 14px;
  border-radius: 1000px;
  height: 34px;
`;

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blueGray[5]};
`;

export const Button = styled.button`
  border: 0;
  background: transparent;
  align-self: center;
  display: inline-block;
  @media (min-width: 860px) {
    display: none;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.blueGray[5]};
  padding: 0.7rem 1.6rem;
  max-width: 1110px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 101;

  @media (min-width: 860px) {
    justify-content: flex-start;
  }

  nav {
    display: none;
    @media (min-width: 860px) {
      display: flex;
    }
    a {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.white};
      padding: 10px 16px;
      position: relative;
      text-decoration: none;
      &:after {
        content: " ";
        background-color: ${({ theme }) => theme.colors.blueGray[4]};
        display: block;
        position: absolute;
        width: 1px;
        height: 12px;
        margin: auto;
        left: 0;
        top: 0;
        bottom: 0;
      }
    }
  }
  input {
    color: #ffffff;
    background: #5579a1;
    padding: 10px 42px;
    border: 0;
    background-image: url(${`http://alurakut.vercel.app/icons/search.svg`});
    background-position: 15px center;
    background-repeat: no-repeat;
    border-radius: 1000px;
    font-size: 12px;
    ::placeholder {
      color: #ffffff;
      opacity: 1;
    }
  }
`;
