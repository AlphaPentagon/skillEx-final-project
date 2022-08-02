import styles from "./ProfileCard.module.css";
import Image from "next/image";
import Link from "next/link";
//import Avatar from "../Avatar/index.js";
import Button from "../Button/index.js";

const ProfileCard = ({
  id,
  username,
  teachSkills,
  learnSkills,
  bio,
  image,
}) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt="profile picture" />
      </div>
      <div className={styles.titlesContainer}>
        <div className={styles.title}>{`Name: ${username}`}</div>
        <div className={styles.title}>{`Skills: ${teachSkills}`}</div>
      </div>
      <div className={styles.bioContainer}>
        <p className={styles.bio}>{bio}</p>
      </div>
      <Link href={`/profiles/${id}`}>
        <div className={styles.buttonContainer}>
          <Button text="Get in touch" type="profileCardButton" />
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;
