import P from "prop-types";
import * as Styled from "./styles";

export const Button = ({ children, handleClick, ...props }) => {
  return (
    <Styled.Button onClick={handleClick} {...props}>
      {children}
    </Styled.Button>
  );
};
