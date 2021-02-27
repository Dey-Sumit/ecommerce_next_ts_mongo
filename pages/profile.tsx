import axios from "axios";
import { GetServerSidePropsContext } from "next";
import axiosInstance from "../util/axiosInstance";

const Profile = ({ profile }) => {
  return <div>{JSON.stringify(profile)}</div>;
};

export default Profile;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookie = context.req?.headers.cookie;

  try {
    const { data } = await axiosInstance({
      url: "/api/profile",
      headers: {
        cookie: cookie,
      },
    });
    console.log({ data });
  } catch (error) {
    console.log(error.message);
  }

  return {
    props: {
      profile: "good",
    },
  };
};
