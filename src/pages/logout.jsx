import nookies from "nookies";
import jwt from "jsonwebtoken";

export default function Logout() {
  return <></>;
}

export async function getServerSideProps(context) {
  nookies.destroy(context, "USER_TOKEN");

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
