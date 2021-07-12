import P from "prop-types";
import * as Styled from "./styles";

export const Button = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};
