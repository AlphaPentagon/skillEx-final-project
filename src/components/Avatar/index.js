//Avatar
import styles from "./avatar.module.css";

export default function Avatar({ name, imageUrl }) {
	return (
		<div>
			<img className={styles.avatar} src={imageUrl} alt={name} />
		</div>
	);
}
