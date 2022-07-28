//import SkillCard from "../SkillCard";
import skillsDummyData from "../../libs/data/skills";

const SkillGallery = () => {
  return (
    <div>
      {skillsDummyData.map((skill) => (
        <div>
          <img src={skill.image} alt="skill-image" />
          <p>{skill.skill_name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillGallery;
