import styles from "./signUpForm.module.css";

export default function LearnTeachChecks() {
  const categories = [
    "accounting",
    "business",
    "construction",
    "cooking",
    "craft",
    "diy",
    "english",
    "gardening",
    "it",
    "languages",
    "martial arts",
    "maths",
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
        return (
          <div className={styles.checks}>
            <label className={styles.containerCheckbox1}>
              <input
                type="checkbox"
                name="learn"
                value={item}
                // onClick={() => {
                //   setIsSkills(true);
                // }}
              />
              <span className={styles.teach} />
            </label>

            <p className={styles.skills}>{item}</p>

            <label className={styles.containerCheckbox1}>
              <input
                type="checkbox"
                name="teach"
                value={item}
                // onClick={() => {
                //   setIsSkills(true);
                // }}
              />
              <span className={styles.learn} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
