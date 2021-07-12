import * as Styled from "./styles";

export const Box = ({ children, ...rest }) => {
  return <Styled.Box {...rest}>{children}</Styled.Box>;
};
