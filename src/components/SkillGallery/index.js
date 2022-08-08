import SkillCard from "../SkillCard";
import skills from "../../libs/skills";
import styles from "./skillGallery.module.css";
import Link from "next/link";
/* maps through skills array and assigns property values to each SkillCard */

const SkillGallery = () => {
	return (
		<div className={styles.container}>
			{skills.map((skill) => (
				<SkillCard
					key={skill.skill_id}
					image={skill.image}
					title={skill.skill_name}
					description={skill.description}
					path={skill.skill_name}
				/>
			))}
		</div>
	);
};

export default SkillGallery;
