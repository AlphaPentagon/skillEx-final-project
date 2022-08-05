import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
import Searchbar from "../../src/components/SearchBar";
import SkillGallery from "../../src/components/SkillGallery/index";
import styles from "../../styles/Home.module.css"

// fetch all profiles
// pass the array to the SkillGallery component

const Discover = ({ profilesArr }) => {
  console.log(profilesArr);
  return (
    <>
      <Header text="Discover" />
      <p className={styles.sloganText}>
        Teach and Learn at the same time, all you need to search and find all the tutors that teach that skill
      </p>
      <ProfileGallery profiles={profilesArr} />

      <Searchbar />
      <SkillGallery />
    </>
  );
};

export default Discover;

// needed for data fetching before rendering - makes the profileId available as a prop in the component
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/profiles");
  const profilesArr = await res.json();
  return {
    props: { profilesArr },
  };
}
