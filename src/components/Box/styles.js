import styled from "styled-components";

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.large};
  /* CSS Pré-Pronto */
  margin-bottom: ${({ theme }) => theme.space.xsmall};
  .boxLink {
    font-size: ${({ theme }) => theme.space.medium};
    color: ${({ theme }) => theme.colors.blue[1]};
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
    background-color: ${({ theme }) => theme.colors.gray[0]};
    color: ${({ theme }) => theme.colors.gray[4]};
    border: 0;
    padding: 1.4rem 1.6rem;
    margin-bottom: ${({ theme }) => theme.space.medium};
    border-radius: 10000px;
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray[4]};
      opacity: 1;
    }
  }
`;
