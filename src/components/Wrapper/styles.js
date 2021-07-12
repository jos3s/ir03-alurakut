import styled from "styled-components";
import { compose, grid, flexbox, space } from "styled-system";

export const Wrapper = styled.div`
  ${compose(grid, flexbox, space)}
`;
