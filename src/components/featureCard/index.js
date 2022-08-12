import styles from "./featureCard.module.css";
import Image from "next/image";
const FeatureCard = ({ icon, desc }) => {
	return (
		<div className={styles.featureCard}>
			<Image
				className={styles.icon}
				src={icon}
				alt="{desc}"
				width={90}
				height={90}
			/>
			<p className={styles.description}>{desc}</p>
		</div>
	);
};

export default FeatureCard;
