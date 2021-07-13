import styled from "styled-components";
import { variant, color } from "styled-system";

export const Title = styled.h1`
  ${variant({
    variants: {
      title: {
        fontSize: "huge",
        fontWeight: "400",
      },
      subTitle: {
        fontSize: "large",
        fontWeight: "400",
      },
      smallTitle: {
        fontSize: "medium",
        fontWeight: "700",
        color: "gray.4",
      },
    },
  })}
  ${color}
  margin-bottom: 2rem;
`;
