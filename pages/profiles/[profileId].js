// import { useRouter } from "next/router";
import ProfileInfo from "../../src/components/ProfileInfo";
// import profiles from "../../src/libs/profiles";
import Header from "../../src/components/Header/index";
import Avatar from "../../src/components/Avatar/index";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Profile({ profile }) {
  console.log("current profile: ", profile);
  // const router = useRouter();
  // const { profileId } = router.query;
  // const CURRENT_INDEX = profileId - 1;
  // const CURRENT_PROFILE = profiles[CURRENT_INDEX];

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
  const response = await fetch(`http://localhost:3000/api/profiles`);
  const data = await response.json();

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
  const response = await fetch(
    `http://localhost:3000/api/profiles/${params.profileId}`
  );
  console.log(params.profileId);
  const data = await response.json();
  console.log("profile: ", data);
  return {
    props: { profile: { ...data } },
  };
}
