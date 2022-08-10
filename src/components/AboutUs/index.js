// import { Button } from "bootstrap";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import Button from "../Button/index";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="abouttitle">About Us</h2>
        <div className={styles.textContainer}>
        <h3 className="abouttext">
          SkillEx is the place where exchanging skills and talents becomes easy.
        </h3>
        <h3 className="abouttext">
          Ever wanted to teach or learn a new Skill, but never know where to start?
          SkillEx helps you link up with other users that have that same burning passion as yourself and allows for you to get in contact and organise 1-2-1 lessons. Browse through our catagories, select a skill you would like to learn or teach, choose a user that suites you and drop them a message. Start your journey below by visiting our discover page.
        </h3>
        <div className={styles.discoverButtonLayout}>
          <Link href={"/discover/"}><a>
        <Button className={styles.discoverButton} text="Discover Skills">
        </Button>
        </a>
        </Link>
        </div>
      </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/media/images/skillswapping.png"
          alt="diagram showing how skillswapping works"
          className={styles.image}
          width={470}
          height={250}
        />
      </div>
      
    </div>
  );
};

export default AboutUs;
