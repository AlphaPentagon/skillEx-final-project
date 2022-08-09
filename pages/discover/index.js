import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
import Searchbar from "../../src/components/SearchBar";
import SkillGallery from "../../src/components/SkillGallery/index";
import styles from "./discover.module.css";
import prisma from "../../prisma/client";
import stylesHome from "../../styles/Home.module.css"
import Head from "next/head";



const Discover = ({ profilesArr }) => {
  console.log(profilesArr);
  return (
    <>
    <Head>
      <title>Discover</title>
    </Head>
      <Header text="Discover" />
      <p className={stylesHome.sloganText}>
        Teach and Learn at the same time, all you need to search and find all the tutors that teach that skill
      </p>
      <ProfileGallery profiles={profilesArr} />

      <Searchbar />
      <SkillGallery />
    </>
  );
};

export default Discover;

/* needed for data fetching before rendering - makes all profiles available as a prop in the component
  queries the database directly using prisma as an ORM and fetches all profiles
  do NOT use fetch requests, as explained in this article here - https://stackoverflow.com/questions/61452675/econnrefused-during-next-build-works-fine-with-next-dev */

export async function getStaticProps() {
  const data = await prisma.profiles.findMany();
  return {
    props: { profilesArr: data },
  };
}
