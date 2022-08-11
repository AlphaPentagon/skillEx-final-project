import styles from "./skillCard.module.css";
import Image from "next/image";
import Link from "next/link";

const SkillCard = ({ image, title, description }) => {
	return (
		<div className={styles.skillCard} id={"skill-card-" + title}>
			<Link href={"/discover/" + title}>
				<a aria-label={title}>
					<Image
						className={styles.image}
						src={image}
						alt={description}
						layout="fill"
					/>
				</a>
			</Link>
			<a
				className={styles.text}
				href={"/discover/" + title}
				aria-label={title}
			>
				{title}
			</a>
		</div>
	);
};

export default SkillCard;
