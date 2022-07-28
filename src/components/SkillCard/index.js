import styles from "./skillcard.module.css"
import SkillGallery from "../SkillGallery";

const SkillCard = ({image, title}) => {
  return (
    <div className={styles.skillsContainer}>
      <img className={styles.image} src={image} alt="image" />
      <h3>{title}</h3>
    </div>
  );
};

export default SkillCard;
