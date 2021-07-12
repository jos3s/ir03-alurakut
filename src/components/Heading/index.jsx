import P from "prop-types";
import * as Styled from "./styles";

export const Heading = ({ variant, children, ...props }) => {
  return (
    <Styled.Title variant={variant} {...props}>
      {children}
    </Styled.Title>
  );
};
