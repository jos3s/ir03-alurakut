import { useState, useEffect } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";
import { getFollowers, getFollowing } from "../api/github";

import { OrkutNostalgicIcons } from "../components/OrkutNostalgicIcons";
import { ProfileRelations } from "../components/ProfileRelations";
import { ProfileSideBar } from "../components/ProfileSideBar";
import { Menu } from "../components/AlurakutMenu/Menu";
import { MainGrid } from "../components/MainGrid";
import { Heading } from "../components/Heading";
import { Wrapper } from "../components/Wrapper";
import { BoxLink } from "../components/BoxLink";
import { Button } from "../components/Button";
import { Box } from "../components/Box";

export default function Home(props) {
  const githubUser = props.githubUser;
  const [followsGithub, setFollowsGithub] = useState([]);
  const [followingGithub, setFollowingGithub] = useState([]);
  const [communities, setCommunities] = useState([]);

  const getGithub = async () => {
    const followers = await getFollowers(githubUser);
    setFollowsGithub(followers);
    const following = await getFollowing(githubUser);
    setFollowingGithub(following);
  };

  useEffect(() => {
    getGithub();

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

  const handleCreateCommunity = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const name = dataForm.get("title");

    if (!name) return;

    const link = !dataForm.get("link") ? "#" : dataForm.get("link");
    const newCommunity = {
      name: dataForm.get("title"),
      imgUrl: "https://picsum.photos/200?id" + (Math.random() * (100 - 0) + 0),
      link,
      creatorSlug: githubUser,
    };

    fetch("api/communities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCommunity),
    }).then(async (response) => {
      const data = await response.json();
      setCommunities([...communities, data.register]);
    });
  };

  return (
    <>
      <Menu githubUser={githubUser} />
      <MainGrid>
        <Wrapper className="profileArea" gridArea="profile" as="aside">
          <ProfileSideBar githubUser={githubUser} />
        </Wrapper>
        <Wrapper className="welcomeArea" gridArea="welcome">
          <Box>
            <Heading variant="title"> Bem vindo(a)</Heading>
            <OrkutNostalgicIcons />
          </Box>
          <Box>
            <Heading variant="subTitle" as="h2">
              Crie uma nova comunidade:
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
          <ProfileRelations title="Comunidades" data={communities}>
            <BoxLink url="/communities" fontWeight="800">
              Ver todas
            </BoxLink>
          </ProfileRelations>
          <ProfileRelations title="Seguidores" data={followsGithub}>
            <BoxLink url="/followers" fontWeight="800">
              Ver todos
            </BoxLink>
          </ProfileRelations>
          <ProfileRelations title="Seguindo" data={followingGithub}>
            <BoxLink url="/following" fontWeight="800">
              Ver todos
            </BoxLink>
          </ProfileRelations>
        </Wrapper>
      </MainGrid>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch(
    "https://alurakut.vercel.app/api/auth",
    {
      headers: {
        Authorization: token,
      },
    }
  ).then((resposta) => resposta.json());
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser,
    },
  };
}
