import styles from "./EditProfile.module.css";

export default function LearnTeachChecks({ learnSkills, teachSkills }) {
  const categories = [
    "cooking",
    "diy",
    "languages",
    "business",
    "gardening",
    "construction",
    "craft",
    "it",
    "martial arts",
  ];

  return (
    <div className={styles.containerChecks}>
      {/* headers: */}
      <div className={styles.checks}>
        <p className={styles.learnHeader}>Learn</p>
        <p></p>
        <p className={styles.teachHeader}>Teach</p>
      </div>

      {categories.map((item) => {
        function learnSkillChecked() {
          if (learnSkills.includes(item)) {
            return true;
          }
          return false;
        }
        function teachSkillChecked() {
          if (teachSkills.includes(item)) {
            return true;
          }
          return false;
        }
        return (
          <div className={styles.checks}>
            <label className={styles.containerCheckbox1}>
              {learnSkillChecked ? (
                <input type="checkbox" name="learn" value={item} checked />
              ) : (
                <input type="checkbox" name="learn" value={item} />
              )}
              <span className={styles.teach} />
            </label>

            <p className={styles.skills}>{item}</p>

            <label className={styles.containerCheckbox1}>
              {teachSkillChecked ? (
                <input type="checkbox" name="teach" value={item} checked />
              ) : (
                <input type="checkbox" name="teach" value={item} />
              )}
              <span className={styles.learn} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
