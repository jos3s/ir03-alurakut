import P from "prop-types";
import * as Styled from "./styles";

export const Heading = ({ variant, children, ...props }) => {
  return (
    <Styled.Title variant={variant} color="text.normal" {...props}>
      {children}
    </Styled.Title>
  );
};
