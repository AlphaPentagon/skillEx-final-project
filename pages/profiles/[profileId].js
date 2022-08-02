import { useRouter } from "next/router";
import ProfileInfo from "../../src/components/ProfileInfo";
import profiles from "../../src/libs/profiles";
import Header from "../../src/components/Header/index";
import Avatar from "../../src/components/Avatar/index";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// needed for data fetching before rendering - creates static versions of each page/path
export function getStaticPaths() {
  const pagesArr = [];
  profiles.map((profile, index) => {
    pagesArr.push({ params: { profileId: "" + (index + 1) } });
  });
  return {
    paths: pagesArr,
    fallback: true,
  };
}

// needed for data fetching before rendering - makes the profileId available as a prop in the component
export function getStaticProps() {
  return {
    props: { profileId: {} },
  };
}

export default withPageAuthRequired(function Profile({ user }) {
  const router = useRouter();
  const { profileId } = router.query;
  const CURRENT_INDEX = profileId - 1;
  const CURRENT_PROFILE = profiles[CURRENT_INDEX];

  return (
    <>
      <Avatar name="Jenna" imageUrl={CURRENT_PROFILE.avatar_url} />
      <Header text={CURRENT_PROFILE.full_name} colour="blue" />
      <ProfileInfo profile={CURRENT_PROFILE} />
    </>
  );
});
