import { useState, useEffect } from "react";

import { MainGrid } from "../styles/pages/communities";
import { ProfileRelations } from "../components/ProfileRelations";
import { ProfileSideBar } from "../components/ProfileSideBar";
import { Menu } from "../components/AlurakutMenu/Menu";
import { Wrapper } from "../components/Wrapper";
import { BoxLink } from "../components/BoxLink";

export default function Communities() {
  const githubUser = "jos3s";
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        Authorization: "3a3c585a7c4c3717a9381bf15ab343",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `query {
          allCommunities {
            creatorSlug
            name
            id
            imgUrl
            link
          }
        }`,
      }),
    })
      .then((r) => r.json())
      .then((r) => setCommunities(r.data.allCommunities));
  }, []);

  return (
    <>
      <Menu githubUser={githubUser} />
      <MainGrid>
        <Wrapper className="profileArea" gridArea="profile" as="aside">
          <ProfileSideBar githubUser={githubUser} />
        </Wrapper>
        <Wrapper className="welcomeArea" gridArea="communities">
          <ProfileRelations title="Todas as comunidades" data={communities} />
        </Wrapper>
      </MainGrid>
    </>
  );
}
