import styles from "./skillCard.module.css";
import Image from "next/image";

const SkillCard = ({ image, title, description }) => {
  return (
    <div className={styles.skillCard}>
      <Image className={styles.image} layout="fill" src={image} alt={`${description}`} />
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default SkillCard;
