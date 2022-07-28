import styles from "./skillCard.module.css";

const SkillCard = ({ image, title }) => {
  return (
    <div className={styles.skillCard}>
      <img className={styles.image} src={image} alt="image" />
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default SkillCard;
