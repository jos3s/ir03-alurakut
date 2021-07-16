import * as Styled from "./styles";

import { ProfileSidebarMenuDefault } from "../AlurakutMenu/ProfileSidebarMenuDefault";
import { BoxLink } from "../BoxLink";
import { Text } from "../Text";
import { Box } from "../Box";

export const ProfileSideBar = ({ githubUser }) => {
  return (
    <Box position="sticky" top="10px">
      <img src={`https://github.com/${githubUser}.png`} alt="Jos3s" />
      <hr />
      <Text my="medium">
        <BoxLink url={`https://github.com/${githubUser}`}>
          @{githubUser}
        </BoxLink>
      </Text>
      <ProfileSidebarMenuDefault githubUser={githubUser} />
    </Box>
  );
};
