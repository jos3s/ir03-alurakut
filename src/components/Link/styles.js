import styled from "styled-components";
import { space } from "styled-system";

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.blue[1]};
  margin-bottom: ${({ theme }) => theme.space.large};
  ${space}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  img {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.5rem;
  }
`;
