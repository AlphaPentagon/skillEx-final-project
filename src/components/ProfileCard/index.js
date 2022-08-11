import styles from "./ProfileCard.module.css";

import Image from "next/image";
import Link from "next/link";
//import Avatar from "../Avatar/index.js";
import Button from "../Button/index.js";
import ImageWithFallback from "../ImageWithFallBack";

const ProfileCard = ({
	id,
	username,
	teachSkills,
	learnSkills,
	bio,
	image,
}) => {
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
					width={150}
					height={150}
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
				<div className={styles.buttonContainer}>
					Get in Touch
					{/* <Button className={styles.button} text="Get in touch" type="profileCardButton" /> */}
				</div>
			</Link>
		</div>
	);
};

export default ProfileCard;
