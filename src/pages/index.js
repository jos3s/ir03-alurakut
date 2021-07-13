import { useState, useEffect } from "react";
/* import { Moon } from "fresh-icons"; */
import { getFollowers } from "../api/github";

import { ProfileSidebarMenuDefault } from "../components/AlurakutMenu/ProfileSidebarMenuDefault";
import { OrkutNostalgicIcons } from "./../components/OrkutNostalgicIcons";
import { ProfileRelations } from "../components/ProfileRelations";
import { Menu } from "../components/AlurakutMenu/Menu";
import { MainGrid } from "../components/MainGrid";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { BoxLink } from "../components/BoxLink";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { Box } from "../components/Box";

function ProfileSideBar(githubUser) {
  return (
    <Box>
      <img src="https://github.com/jos3s.png" alt="Jos3s" />
      <hr />
      <Text my="medium">
        <BoxLink url={`https://github.com/${githubUser}`}>
          @{githubUser}
        </BoxLink>
      </Text>
      <ProfileSidebarMenuDefault githubUser={githubUser} />
    </Box>
  );
}

export default function Home() {
  const [followsGithub, setFollowsGithub] = useState([]);
  const [communities, setCommunities] = useState([
    {
      id: "12802378123789378912789789123896123",
      name: "Eu odeio acordar cedo",
      imgUrl: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
      link: "#",
    },
  ]);

  const getGithub = async () => {
    const response = await getFollowers();
    setFollowsGithub(response);
  };

  useEffect(() => {
    getGithub();
  }, []);

  const handleCreateCommunity = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const name = dataForm.get("title");

    if (!!name) {
      const link = !dataForm.get("link") ? "#" : dataForm.get("link");
      const newCommunity = {
        id: new Date().toISOString(),
        name: dataForm.get("title"),
        imgUrl:
          "https://picsum.photos/200?id" + (Math.random() * (100 - 0) + 0),
        link: link,
      };
      setCommunities([...communities, newCommunity]);
    }
  };

  return (
    <>
      <Menu githubUser={"jos3s"} />
      <MainGrid>
        <Wrapper className="profileArea" gridArea="profile" as="aside">
          {ProfileSideBar("jos3s")}
        </Wrapper>
        <Wrapper className="welcomeArea" gridArea="welcome">
          <Box>
            <Heading variant="title"> Bem vindo(a)</Heading>
            <OrkutNostalgicIcons />
          </Box>
          <Box>
            <Heading variant="subTitle" as="h2">
              O que voce deseja fazer?
            </Heading>
            <form onSubmit={handleCreateCommunity}>
              <div>
                <input
                  type="text"
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  name="title"
                />
              </div>
              <div>
                <input
                  placeholder="Link para a comunidade"
                  aria-label="Link para a comunidade"
                  name="link"
                />
              </div>
              <Button variant="primary">Criar comunidade</Button>
            </form>
          </Box>
        </Wrapper>
        <Wrapper className="profileRelationsArea" gridArea="profileRelations">
          <ProfileRelations title="Pessoas" data={followsGithub}>
            <BoxLink>Ver todos</BoxLink>
          </ProfileRelations>
          <ProfileRelations title="Comunidades" data={communities}>
            <BoxLink>Ver todos</BoxLink>
          </ProfileRelations>
        </Wrapper>
      </MainGrid>
    </>
  );
}
