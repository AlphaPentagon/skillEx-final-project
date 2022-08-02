import styles from "./signUpForm.module.css";

export default function LearnTeachChecks() {
  const categories = [
    "Cooking",
    "DIY",
    "Languages",
    "Business",
    "Gardening",
    "Construction",
    "Craft",
    "IT",
    "Martial Arts",
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
        let learn = `learn${item}}`;
        let teach = `teach${item}}`;
        return (
          <div className={styles.checks}>
            <label className={styles.containerCheckbox1}>
              <input type="checkbox" name="learn" value={learn} />
              <span className={styles.teach} />
            </label>

            <p>{item}</p>

            <label className={styles.containerCheckbox1}>
              <input type="checkbox" name="teach" value={teach} />
              <span className={styles.learn} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
