import { Link } from "../../Link";
import * as Styled from "./styles";

const BASE_URL = "http://alurakut.vercel.app/";

export const ProfileSidebarMenuDefault = () => {
  return (
    <div>
      <Styled.Nav>
        <Link href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
          Perfil
        </Link>
        <Link href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
          Recados
        </Link>
        <Link href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
          Fotos
        </Link>
        <Link href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
          Depoimentos
        </Link>
      </Styled.Nav>
      <hr />
      <Styled.Nav>
        <Link href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
          GitHub Trends
        </Link>
        <Link href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} />
          Sair
        </Link>
      </Styled.Nav>
    </div>
  );
};
