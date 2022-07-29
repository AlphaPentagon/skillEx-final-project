//Navigation
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Menu />
      <Logo />
    </div>
  );
}
