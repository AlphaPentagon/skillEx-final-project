import Head from "next/head";
import styles from "../styles/Home.module.css";
import SkillCard from "../src/components/SkillCard";
import SkillGallery from "../src/components/SkillGallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skillex</title>
        <meta name="description" content="Skill Ex " />
        <link rel="icon" href="/LightBulbFAVICON.ico" />
      </Head>

      <h1>Skill Ex</h1>
      <SkillGallery />
    </div>
  );
}
