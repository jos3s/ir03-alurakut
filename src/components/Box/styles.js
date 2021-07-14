import styled from "styled-components";
import { layout, space, flexbox, grid, position, compose } from "styled-system";

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.large};
  /* CSS Pré-Pronto */
  margin-bottom: ${({ theme }) => theme.space.xsmall};

  input {
    width: 100%;
    border: 0;
    padding: 1.4rem 1.6rem;
    margin-bottom: ${({ theme }) => theme.space.medium};
    border-radius: 10000px;
  }

  ${compose(layout, space, flexbox, grid, position)}
`;
