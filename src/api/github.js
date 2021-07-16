import axios from "axios";

const USER = "jos3s";

export const api = axios.create({
  baseURL: "https://api.github.com/users/" + USER,
});

export const getFollowers = async () => {
  const { data } = await api.get("/followers");
  const newData = data.map((follower) => ({
    name: follower.login,
    imgUrl: follower.avatar_url,
    login_url: follower.html_url,
  }));
  return newData;
};

export const getFollowing = async () => {
  const { data } = await api.get("/following");
  const newData = data.map((follower) => ({
    name: follower.login,
    imgUrl: follower.avatar_url,
    login_url: follower.html_url,
  }));
  return newData;
};
