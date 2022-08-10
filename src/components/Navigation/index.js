//Navigation
import DesktopNavBar from "../desktopNavigation/desktopNavigation";
import Logo from "../Logo";
import Menu from "../Menu";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
    <div className={styles.burgerMenu}>
      <Menu />
      </div>
      <div className={styles.DesktopNavBar}>
      <DesktopNavBar/>
      </div>
      <Logo />
    </div>
  );
}
