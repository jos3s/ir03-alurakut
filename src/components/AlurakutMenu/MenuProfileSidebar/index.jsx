import * as Styled from "./styles";
import { ProfileSidebarMenuDefault } from "../ProfileSidebarMenuDefault";
import { BoxLink } from "../../BoxLink";

export const MenuProfileSidebar = ({ githubUser, isMenuOpen }) => {
  return (
    <Styled.Container isMenuOpen={isMenuOpen}>
      <div>
        <img
          src={`https://github.com/${githubUser}.png`}
          style={{ borderRadius: "8px" }}
        />
        <hr />
        <p>
          <BoxLink url={`/user/${githubUser}`} fontSize="medium">
            @{githubUser}
          </BoxLink>
        </p>
        <hr />

        <ProfileSidebarMenuDefault githubUser={githubUser} />
      </div>
    </Styled.Container>
  );
};
