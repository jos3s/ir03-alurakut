import { useState } from "react";
import * as Styled from "./styles";

import { MenuProfileSidebar } from "../MenuProfileSidebar";
import { Link } from "../../Link";

const links = [
  { name: "Inicio", slug: "/" },
  { name: "Amigos", slug: "/amigos" },
  { name: "Comunidades", slug: "/comunidades" },
];
const BASE_URL = "http://alurakut.vercel.app/";
const v = "1";

export const Menu = ({ githubUser }) => {
  const [isMenuOpen, setMenuState] = useState(false);

  return (
    <Styled.Wrapper isMenuOpen={isMenuOpen}>
      <div className="container">
        <Styled.Logo src={`${BASE_URL}/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {links.map((menuItem) => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>Sair</a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && (
            <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />
          )}
        </button>
      </div>
      <MenuProfileSidebar githubUser={githubUser} isMenuOpen={isMenuOpen} />
    </Styled.Wrapper>
  );
};
