import styled from "styled-components";
import { typography } from "styled-system";

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.blue[1]};
  -webkit-text-decoration: none;
  text-decoration: none;
  font-weight: normal;
  ${typography}
`;
