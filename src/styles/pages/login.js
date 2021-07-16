import styled from "styled-components";

export const LoginScreen = styled.div`
  padding: ${({ theme }) => theme.space.large};
  max-width: 1110px;
  display: grid;
  grid-gap: ${({ theme }) => theme.space.small};
  grid-template-areas:
    "logoArea"
    "formArea"
    "footerArea";
  @media (min-width: 860px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "logoArea formArea"
      "logoArea formArea"
      "footerArea footerArea";
  }
`;

export const Container = styled.main`
  display: flex;
  flex: 100%;
  align-items: center;
  justify-content: center;
  p {
    color: ${({ theme }) => theme.colors.text.normal};
  }
`;

export const LogoArea = styled.section`
  grid-area: logoArea;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.large};
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 263px;
  @media (min-width: 860px) {
    min-height: 368px;
  }
  p {
    color: ${({ theme }) => theme.colors.text.normal};
    line-height: 1.2;
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.space.small};
    }
    strong {
      color: ${({ theme }) => theme.colors.pink};
    }
  }
  img {
    max-height: 45px;
    margin-bottom: ${({ theme }) => theme.space.huge};
  }
`;

export const FormArea = styled.section`
  grid-area: formArea;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${({ theme }) => theme.space.large};
    padding-left: 50px;
    padding-right: 50px;
    background: ${({ theme }) => theme.colors.cardBg};
    border-radius: ${({ theme }) => theme.radii.md};
    flex: 1;
    &:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.space.small};
    }
    &:first-child {
      min-height: 224px;
      @media (min-width: 860px) {
        min-height: 282px;
      }
    }
    input {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.pink};
      margin-top: ${({ theme }) => theme.space.xxlarge};
      margin-bottom: ${({ theme }) => theme.space.large};
    }
  }
`;

export const Footer = styled.footer`
  grid-area: footerArea;
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 8px;
`;
