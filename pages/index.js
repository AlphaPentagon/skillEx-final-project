import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../src/components/Layout/Layout";
import Header from "../src/components/Header";
import SearchBar from "../src/components/SearchBar";
import Testimonials from "../src/components/Testimonials";
import WhyChooseUs from "../src/components/WhyChooseUs";
import AboutUs from "../src/components/AboutUs";
import SkillGallery from "../src/components/SkillGallery";

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
      <Layout>
        <Header text="Welcome to SkillEx" />
        <p className={styles.sloganText}>
          Exchanging skills and knowhow made easy for FREE!
        </p>
        <div className={styles.bgContainer}>
          <h2 className={styles.discoverHeading}>Discover Categories:</h2>
          <SearchBar />
          <SkillGallery />
          <AboutUs />
          <WhyChooseUs />
          <Testimonials />
        </div>
      </Layout>
    </>
  );
}
