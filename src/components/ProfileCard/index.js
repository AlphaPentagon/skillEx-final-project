import styles from "./ProfileCard/ProfileCard.module.css";
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
  avatar_url,
}) => {
  return (
    <Link href={`/profiles/${id}`}>
      <div className={styles.ProfileCard}>
        <Image
          className={styles.image}
          layout="fill"
          src={avatar_url}
          alt="profile picture"
        />
        <div className={styles.username}>{username}</div>
        <div className={styles.skills}>{teachSkills}</div>
        <p className={styles.bio}>{bio}</p>
        <Button></Button>
      </div>
    </Link>
  );
};

export default ProfileCard;
