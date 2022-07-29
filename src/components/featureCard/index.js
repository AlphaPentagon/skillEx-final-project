import styles from "./featureCard.module.css";

const FeatureCard = ({ icon, desc }) => {
  return (
    <div className={styles.featureCard}>
      <img className={styles.icon} src={icon} alt="" />
      <p className={styles.description}>{desc}</p>
    </div>
  );
};

export default FeatureCard;
