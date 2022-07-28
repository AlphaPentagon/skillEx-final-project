import SkillCard from "../SkillCard";
import skillsDummyData from "../../libs/data/skills";
import styles from "./skillgallery.module.css"

const SkillGallery = () => {
  return (
    <div className={styles.skilldiv}>
      {skillsDummyData.map((skill) => (

        <SkillCard 
       
        key={skill.skill_id}
        image= {skill.image}
        title={skill.skill_name}
        
        />
      ))}
    </div>
  );
};

export default SkillGallery;
