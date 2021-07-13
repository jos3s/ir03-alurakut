import * as Styled from "./styles";

import { BoxLink } from "../BoxLink";
import { Heading } from "../Heading";
import { ItemBox } from "../ItemBox";

export const ProfileRelations = ({ title, data, children }) => {
  return (
    <Styled.Wrapper>
      <Heading variant="smallTitle">
        {title} ({data?.length}):
      </Heading>
      <ul>
        {data?.map((item) => (
          <ItemBox
            name={item.name}
            imgUrl={item.imgUrl}
            key={item.key || item.name}
            link={item?.link}
          />
        ))}
      </ul>
      {children}
    </Styled.Wrapper>
  );
};
