import * as Styled from "./styles";

export const BoxLink = ({ url, children, ...props }) => {
  return (
    <Styled.Link href={url} {...props}>
      {children}
    </Styled.Link>
  );
};
