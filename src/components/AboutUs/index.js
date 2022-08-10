import Image from "next/image";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className="abouttitle">About Us</h2>
        <div className={styles.textContainer}>
        <p className="abouttext">
          SkillEx is the place where exchanging skills and talents becomes easy.
        </p>
        <p className="abouttext">
          Swap your skills, find what you are looking for. It’s all free, you
          just “pay” with your time.
        </p>
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






animated gif:
      <div className={styles.imageContainer}>
        <Image
          src="/media/Powerpoint/AboutUs.gif"
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
