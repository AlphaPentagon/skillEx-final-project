import Navigation from "../Navigation";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
    <Head>

    <link rel="icon" href="/LightBulbFAVICON.ico" />

    </Head>
      <Navigation />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
