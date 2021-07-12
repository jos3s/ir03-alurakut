import styled from "styled-components";
import { variant } from "styled-system";

export const Button = styled.button`
  ${variant({
    variants: {
      primary: {
        color: "white",
        backgroundColor: "elementPrimary",
        borderRadius: "10000px",
      },
    },
  })}
  border: 0;
  padding: 0.8rem 1.2rem;
`;
