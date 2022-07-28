import Head from "next/head";
import Header from "../src/components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SkillEx</title>
        <meta name="description" content="SkillEx " />
        <link rel="icon" href="/LightBulbFAVICON.ico" />
      </Head>

      <h1>SkillEx</h1>
      <p>The knowhow exchange</p>

      <Header text="Welcome to SkillEx" colour="blue" />
    </div>
  );
}
