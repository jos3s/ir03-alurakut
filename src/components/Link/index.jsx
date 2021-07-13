import NextLink from "next/link";
import * as Styled from "./styles";

export const Link = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Styled.Link {...props}>{children}</Styled.Link>
    </NextLink>
  );
};
