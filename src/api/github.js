import axios from "axios";

export const getFollowers = async () => {
  const { data } = await axios.get(
    "https://api.github.com/users/jos3s/followers"
  );
  const newData = data.map((follower) => ({
    nick: follower.login,
    avatar_url: follower.avatar_url,
    login_url: follower.html_url,
  }));
  return newData.slice(0, 6);
};
