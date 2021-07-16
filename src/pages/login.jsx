import { useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";
import * as Styled from "../styles/pages/login";

import { Text } from "../components/Text";
import { BoxLink } from "../components/BoxLink";
import { Button } from "../components/Button";

export default function Login() {
  const [githubUser, setGithubUser] = useState("");
  const router = useRouter();

  const handleForm = (event) => {
    event.preventDefault();

    fetch("https://alurakut.vercel.app/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ githubUser: githubUser }),
    })
      .then(async (response) => {
        const { token } = await response.json();
        nookies.set(null, "USER_TOKEN", token, {
          path: "/",
          maxAge: 86400 * 7,
        });
        router.push("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Styled.Container>
      <Styled.LoginScreen>
        <Styled.LogoArea>
          <img src="https://alurakut.vercel.app/logo.svg" />

          <Text fontSize="xsmall">
            <strong>Conecte-se</strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </Text>
          <Text fontSize="xsmall">
            <strong>Conheça</strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </Text>
          <Text fontSize="xsmall">
            <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só
            lugar
          </Text>
        </Styled.LogoArea>

        <Styled.FormArea>
          <form className="box" onSubmit={handleForm}>
            <Text fontSize="small">
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </Text>
            <input
              placeholder="Usuário"
              value={githubUser}
              onChange={(e) => setGithubUser(e.target.value)}
            />
            {!githubUser.length && <Text mb="xsmall">Preencha o campo</Text>}
            <Button variant="rectangle" disabled={!githubUser.length}>
              Login
            </Button>
          </form>

          <footer className="box">
            <Text fontSize="xsmall">
              Ainda não é membro? <br />
              <BoxLink href="/login">
                <strong>ENTRAR JÁ</strong>
              </BoxLink>
            </Text>
          </footer>
        </Styled.FormArea>

        <Styled.Footer>
          <Text fontSize="small" textAlign="center">
            © 2021 alura.com.br - <BoxLink url="/">Sobre o Orkut.br</BoxLink> -{" "}
            <BoxLink url="/">Centro de segurança</BoxLink> -{" "}
            <BoxLink url="/">Privacidade</BoxLink> -{" "}
            <BoxLink url="/">Termos</BoxLink> -{" "}
            <BoxLink url="/">Contato</BoxLink>
          </Text>
        </Styled.Footer>
      </Styled.LoginScreen>
    </Styled.Container>
  );
}
