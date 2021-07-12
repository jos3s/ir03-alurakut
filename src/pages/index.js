import { useState, useEffect } from "react";

import { AlurakutMenu, OrkutNostalgicIconSet } from "./../lib/AluraCommons";
import { ProfileRelations } from "../components/ProfileRelations";
import { MainGrid } from "../components/MainGrid";
import { Heading } from "../components/Heading";
import { Box } from "../components/Box";
import { getFollowers } from "../api/github";
import { Wrapper } from "../components/Wrapper";
import { UsersBox } from "../components/UsersBox";
function ProfileSideBar() {
  return (
    <Box>
      <img src="https://github.com/jos3s.png" alt="Jos3s" />
    </Box>
  );
}

export default function Home() {
  const [followsGithub, setFollowsGithub] = useState([]);

  const getGithub = async () => {
    const response = await getFollowers();
    setFollowsGithub(response);
  };

  useEffect(() => {
    getGithub();
  }, []);

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <Wrapper className="profileArea" gridArea="profile">
          {ProfileSideBar()}
        </Wrapper>
        <Wrapper className="welcomeArea" gridArea="welcome">
          <Box>
            <Heading variant="title"> Bem vindo(a)</Heading>
            <OrkutNostalgicIconSet />
          </Box>
        </Wrapper>
        <Wrapper className="profileRelationsArea" gridArea="profileRelations">
          <ProfileRelations>
            <Heading variant="smallTitle">Pessoas:</Heading>
            <ul>
              {followsGithub?.map((user) => (
                <UsersBox
                  nick={user.nick}
                  avatarUrl={user.avatar_url}
                  key={user.nick}
                />
              ))}
            </ul>
          </ProfileRelations>
          <Box>Comunidades</Box>
        </Wrapper>
      </MainGrid>
    </>
  );
}
