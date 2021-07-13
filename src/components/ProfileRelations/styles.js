import styled from "styled-components";
import { Box } from "../Box/styles";

export const Wrapper = styled(Box)`
  ul {
    display: grid;
    gap: 0.8rem;
    grid-template-columns: 1fr 1fr 1fr;
    max-height: 22rem;
    list-style: none;
    margin-bottom: ${({ theme }) => theme.space.medium};
  }
`;
