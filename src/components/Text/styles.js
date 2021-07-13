import styled from "styled-components";
import { typography, space, color, compose } from "styled-system";

export const Wrapper = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  ${compose(typography, space, color)}
`;
