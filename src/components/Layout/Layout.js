import Navigation from "../Navigation";
import Footer from "../Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
