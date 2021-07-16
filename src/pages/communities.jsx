import { useState, useEffect } from "react";
import nookies from "nookies";
import jwt from "jsonwebtoken";

import { MainGrid } from "../styles/pages/communities";
import { ProfileRelations } from "../components/ProfileRelations";
import { ProfileSideBar } from "../components/ProfileSideBar";
import { Menu } from "../components/AlurakutMenu/Menu";
import { Wrapper } from "../components/Wrapper";

export default function Communities(props) {
  const githubUser = props.githubUser;
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
        <Wrapper gridArea="profile" as="aside">
          <ProfileSideBar githubUser={githubUser} />
        </Wrapper>
        <Wrapper gridArea="communities">
          <ProfileRelations title="Todas as comunidades" data={communities} />
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

