// import { Button } from "bootstrap";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import Button from "../Button/index";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="abouttitle"></h2>
        <div className={styles.textContainer}>
        <h3 className={styles.aboutText}>
          SkillEx is the place where exchanging skills and talents becomes easy.
        </h3>
        <div className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <Image
          src="/media/images/skillswapping.png"
          alt="diagram showing how skillswapping works"
          className={styles.image}
          width={770}
          height={550}
        />
      </div>
      <div className={styles.aboutUsContainer}>
        <h3 className={styles.aboutUs}>
          Ever wanted to teach or learn a new Skill, but never know where to start?
          <p>SkillEx helps you link up with other users that have that same burning passion as yourself and allows for you to get in contact and organise 1-2-1 lessons.</p>
          Browse through our categories, select a skill you would like to learn or teach, choose a user that suites you and drop them a message. 
          <p className={styles.startYourJourney}>Start your journey below by visiting our discover page.</p>
        </h3>
        <div className={styles.bothButtons}>
        <div className={styles.discoverButtonLayout}>
          <Link href={"/discover/"}><a>
        <Button className={styles.discoverButton} text="Discover">
        </Button>
        </a>
        </Link>
        </div>
        <div className={styles.signUpButtonLayout}>
          <Link href={"/profiles/sign-up"}><a>
        <Button className={styles.signUpButton} text="Sign Up" type="signUpBorderButton">
        </Button>
        </a>
        </Link>
        </div>
        </div>
        </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
