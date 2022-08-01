import { useRouter } from "next/router";
import ProfileInfo from "../../src/components/ProfileInfo";
import profiles from "../../src/libs/profiles";

const Profile = () => {
  const router = useRouter();
  const { profileId } = router.query;
  return <h1>Profile Page: {profiles[profileId - 1].id}</h1>;
};

export default Profile;
