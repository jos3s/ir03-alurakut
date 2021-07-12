import * as Styled from "./styles";

export const UsersBox = ({ nick, avatarUrl }) => {
  return (
    <Styled.Item>
      <a href={`users/${nick}`} key={nick}>
        <img src={avatarUrl} alt={nick} />
        <span>{nick}</span>
      </a>
    </Styled.Item>
  );
};
