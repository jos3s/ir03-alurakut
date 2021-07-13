import * as Styled from "./styles";

export const ItemBox = ({ name, imgUrl, link }) => {
  return (
    <Styled.Item>
      <a href={link ? link : `users/${name}`} key={name}>
        <img src={imgUrl} alt={name} />
        <span>{name}</span>
      </a>
    </Styled.Item>
  );
};
