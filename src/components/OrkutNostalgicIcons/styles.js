import styled from "styled-components";

export const List = styled.ul`
  margin-top: 32px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.normal};
  display: grid;
  grid-template-areas:
    "title title"
    "number number";

  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const ItemTitle = styled.span`
  display: block;
  font-style: italic;
`;

export const ItemNumber = styled.span`
  min-width: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .OrkutNostalgicIconSet__iconSample {
    margin-right: 7px;
  }
`;
