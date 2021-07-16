import * as Styled from "./styles";

export const ItemBox = ({ name, imgUrl, link }) => {
  return (
    <Styled.Item>
      <Styled.Link href={link ? link : `users/${name}`} key={name}>
        <Styled.Img src={imgUrl} alt={name} />
        <Styled.Span>{name}</Styled.Span>
      </Styled.Link>
    </Styled.Item>
  );
};
