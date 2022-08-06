import prisma from "../../prisma/client";
import ProfileInfo from "../../src/components/ProfileInfo";
import Header from "../../src/components/Header/index";
import Avatar from "../../src/components/Avatar/index";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ profile }) {
  console.log("current profile: ", profile);

  return (
    <>
      <Avatar name="Jenna" imageUrl={profile.avatar_url} />
      <Header text={profile.full_name} colour="blue" />
      <ProfileInfo profile={profile} />
    </>
  );
});

// needed for data fetching before rendering - creates static versions of each page/path
export async function getStaticPaths() {
  const data = await prisma.profiles.findMany();

  const paths = data.map((profile) => {
    return {
      params: {
        profileId: `${profile.id}`,
      },
    };
  });
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

// needed for data fetching before rendering - makes the profileId available as a prop in the component
export async function getStaticProps(context) {
  const { params } = context;
  const data = await prisma.profiles.findUnique({
    where: { id: Number(params.profileId) },
  });

  console.log("profile: ", data);
  return {
    props: { profile: { ...data } },
  };
}
