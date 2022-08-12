import styles from "./ProfileCard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ImageWithFallback from "../ImageWithFallBack";

const ProfileCard = ({
  id,
  username,
  teachSkills,
  learnSkills,
  bio,
  image,
}) => {
  // stores the current page location in local storage, so that the profileInfo page can route users back to their previous search history
  // this instead of using router.back() on the profile card - as if the user was forced to login before landing on the profileId page, they will be routed back to an autho0 error page instead, which is bad for user experience
  const router = useRouter();
  const setBacklocation = () => {
    window.localStorage.setItem("path", router.asPath);
  };

  let imageurl = "/media/images/default-profile.png";
  if (image == null) {
    imageurl = "/media/images/default-profile.png";
  } else if (image.startsWith("http")) {
    imageurl = `${image}`;
  } else {
    imageurl = "/media/images/default-profile.png";
  }

  return (
    <div className={styles.profileCard}>
      <div className={styles.imageContainer}>
        <ImageWithFallback
          className={styles.avatar}
          width={165}
          height={165}
          src={imageurl}
          fallbackSrc={`/media/images/default-profile.png`}
          alt="profile picture"
        />
      </div>
      <div className={styles.titlesContainer}>
        <div className={styles.title}>{`Name: ${username}`}</div>
        <div className={styles.teaching}>{`Teaching: ${teachSkills}`}</div>
        <div
          className={styles.learning}
        >{`Wants to learn: ${learnSkills}`}</div>
      </div>
      <div className={styles.bioContainer}>
        <p className={styles.bio}>{bio}</p>
      </div>
      <Link href={`/profiles/${id}`}>
        <div className={styles.buttonContainer} onClick={setBacklocation}>
          Get in Touch
          {/* <Button className={styles.button} text="Get in touch" type="profileCardButton" /> */}
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;
