import styled from "styled-components";
import { variant, layout, space, compose, background } from "styled-system";

export const Button = styled.button`
  border: 0;
  padding: 0.8rem 1.2rem;
  ${compose(
    variant({
      variants: {
        primary: {
          color: "white",
          backgroundColor: "element.primary",
          borderRadius: "10000px",
        },
        none: {
          color: "white",
          background: "transparent",
        },
      },
    }),
    layout,
    space
  )}
`;
