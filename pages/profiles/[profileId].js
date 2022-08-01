import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { profileId } = router.query;
  return <h1>Profile Page: {profileId}</h1>;
};

export default Profile;
