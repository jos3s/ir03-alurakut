import P from "prop-types";
import * as Styled from "./styles";

export const Text = ({ children, ...props }) => {
  return <Styled.Wrapper {...props}>{children}</Styled.Wrapper>;
};
