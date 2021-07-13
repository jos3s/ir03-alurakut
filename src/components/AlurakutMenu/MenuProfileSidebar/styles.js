import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  position: fixed;
  z-index: 100;
  padding: 4.6rem;
  bottom: 0;
  left: 0;
  right: 0;
  top: 4.8rem;
  transition: 0.3s;
  pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? "all" : "none")};
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? "translateY(0)" : "translateY(calc(-100% - 48px))"};
  @media (min-width: 860px) {
    display: none;
  }
  > div {
    max-width: 40rem;
    margin: auto;
  }
`;
