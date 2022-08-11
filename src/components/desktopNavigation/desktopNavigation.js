import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import styles from "./desktopNavBar.module.css";
export default function DesktopNavBar() {
  const { user } = useUser();
  return (

    <div className={styles.navigation}>
      <div className={styles.navigationMenu}>
        <ul className={styles.navBar}>
          <Link href="/">
            <a className={styles.word} title="Go to home page">
              Home
            </a>
          </Link>
          <Link href="/discover">
            <a className={styles.word} title="Discover skills">
              Discover
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.word} title="Get in touch">
              Contact
            </a>
          </Link>

          <br />

          <ul className={styles.buttons}>
            {!user && (
              <>
                <a
                  href="/api/auth/signup"
                  className={styles.button}
                  title="Sign up"
                >
                  SignUp
                </a>
                <a
                  href="/api/auth/login"
                  className={styles.button}
                  title="Log in"
                >
                  Login
                </a>
              </>
            )}
            {user && (
              <>
                <Link href="/profiles/my-profile">
                  <a className={styles.word} title="View your profile">
                    Profile
                  </a>
                </Link>

                <a
                  className={styles.button}
                  href="/api/auth/logout"
                  title="Log out of your profile"
                >
                  Log-Out
                </a>
              </>
            )}
          </ul>
        </ul>
      </div>
    </div>
  );
}
