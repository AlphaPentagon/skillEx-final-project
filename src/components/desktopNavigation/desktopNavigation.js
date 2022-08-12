import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "./desktopNavBar.module.css";
export default function DesktopNavBar() {
  const { user } = useUser();
  return (
    <nav className={styles.navigationMenu}>
      <ul className={styles.navBar}>
        <li>
          <Link href="/">
            <a className={styles.link} title="Go to home page">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/discover">
            <a className={styles.link} title="Discover skills">
              Discover
            </a>
          </Link>
        </li>

        <li>
          <Link href="/contact">
            <a className={styles.link} title="Get in touch">
              Contact
            </a>
          </Link>
        </li>

        {!user && (
          <>
            <li>
              <Link href="/api/auth/signup">
                <a className={styles.button} title="Sign up">
                  Sign up
                </a>
              </Link>
            </li>
            <li>
              <Link href="/api/auth/login">
                <a className={styles.button} title="Log in">
                  Login
                </a>
              </Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <Link href="/profiles/my-profile">
                <a className={styles.link} title="View your profile">
                  Profile
                </a>
              </Link>
            </li>
            <li>
              <Link href="/api/auth/logout">
                <a className={styles.button} title="Log out of your profile">
                  Log Out
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
