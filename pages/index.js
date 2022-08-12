import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header";
import SearchBar from "../src/components/SearchBar";
import WhyChooseUs from "../src/components/WhyChooseUs";
import AboutUs from "../src/components/AboutUs";
import SkillGallery from "../src/components/SkillGallery";
import SimpleSlider from "../src/components/Testimonials1";

export default function Home() {
  return (
    <>
      <Head>
        <title>SkillEx</title>
        <meta
          name="SkillEx - The knowhow exchange where people swap skills."
          content="SkillEx "
        />
        <link rel="icon" href="/LightBulbFAVICON.ico" />
      </Head>

      <Header text="Exchanging skills and knowhow made easy for FREE!" />
      {/* <p className={styles.sloganText}>
        Exchanging skills and knowhow made easy for FREE!
      </p> */}

      {/* <SearchBar /> */}
      <AboutUs />
      <WhyChooseUs />
      <SimpleSlider />
      <h2 className={styles.discoverHeading}>Discover Categories:</h2>
      <p className={styles.aboutText}> Simply select that category that you want to teach or learn</p>
      <SkillGallery />
    </>
  );
}
  