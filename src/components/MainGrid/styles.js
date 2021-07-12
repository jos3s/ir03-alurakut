import styled from "styled-components";

export const MainGrid = styled.main`
  width: 100%;
  gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
  padding: 1.6rem;
  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-columns: 160px 1fr 312px;
    grid-template-areas: "profile welcome profileRelations";
  }
`;
