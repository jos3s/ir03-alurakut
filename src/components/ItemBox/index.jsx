import * as Styled from "./styles";

export const ItemBox = ({ name, imgUrl }) => {
  return (
    <Styled.Item>
      <a href={`users/${name}`} key={name}>
        <img src={imgUrl} alt={name} />
        <span>{name}</span>
      </a>
    </Styled.Item>
  );
};
