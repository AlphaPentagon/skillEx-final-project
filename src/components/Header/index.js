import styles from "./Header.module.css";

const Header = ({ text, colour }) => {
  return <h1 className={`${styles[colour]} ${styles.heading}`}>{text}</h1>;
};

export default Header;

/* 
create header.module.css ✅
import and export ✅ 
create a component (possible h1) to store text ✅
taking in different colours ✅
*/
