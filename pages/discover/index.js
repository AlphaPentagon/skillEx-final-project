import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
import Searchbar from "../../src/components/SearchBar";
import SkillGallery from "../../src/components/SkillGallery/index";
import styles from "./discover.module.css";
import prisma from "../../prisma/client";

// fetch all profiles
// pass the array to the SkillGallery component

const Discover = ({ profilesArr }) => {
  console.log(profilesArr);
  return (
    <>
      <Header text="Discover" />
      <ProfileGallery profiles={profilesArr} />
      <Searchbar />
      <SkillGallery />
    </>
  );
};

export default Discover;

// needed for data fetching before rendering - makes the profileId available as a prop in the component
export async function getStaticProps() {
  const data = await prisma.profiles.findMany();
  return {
    props: { profilesArr: data },
  };
}
