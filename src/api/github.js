import axios from "axios";


export const api = axios.create({
  baseURL: "https://api.github.com/users/",
});

export const getFollowers = async (user) => {
  const { data } = await api.get(user + "/followers");
  const newData = data.map((follower) => ({
    name: follower.login,
    imgUrl: follower.avatar_url,
    login_url: follower.html_url,
  }));
  return newData;
};

export const getFollowing = async (user) => {
  const { data } = await api.get(user + "/following");
  const newData = data.map((follower) => ({
    name: follower.login,
    imgUrl: follower.avatar_url,
    login_url: follower.html_url,
  }));
  return newData;
};
