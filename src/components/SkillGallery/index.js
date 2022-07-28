import SkillCard from "../SkillCard";
import skillsDummyData from "../../libs/skills";
import styles from "./skillGallery.module.css";

const SkillGallery = () => {
  return (
    <div className={styles.container}>
      {skillsDummyData.map((skill) => (
        <SkillCard
          key={skill.skill_id}
          image={skill.image}
          title={skill.skill_name}
        />
      ))}
    </div>
  );
};

export default SkillGallery;
