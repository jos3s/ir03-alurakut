import styled from "styled-components";
import { Wrapper as ProfileWrapper } from "../../components/ProfileRelations/styles";
import { Link as ItemBoxLink } from "../../components/ItemBox/styles";

export const MainGrid = styled.main`
  width: 100%;
  gap: ${({ theme }) => theme.space.xsmall};
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
  padding: ${({ theme }) => theme.space.large};
  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-areas: "profile communities";
  }

  ${ProfileWrapper} {
    ul {
      max-height: none;
    }
  }
  ${ItemBoxLink} {
    width: 100%;
    height: 20rem;
  }
`;
