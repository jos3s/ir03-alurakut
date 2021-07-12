import P from "prop-types";
import * as Styled from "./styles";

export const Wrapper = ({ children, ...rest }) => {
  return <Styled.Wrapper {...rest}>{children}</Styled.Wrapper>;
};
