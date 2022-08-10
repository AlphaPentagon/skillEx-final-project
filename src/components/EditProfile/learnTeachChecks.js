import { useState } from "react";
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
        return (
          <div className={styles.checks}>
            <label className={styles.containerCheckbox1}>
              <input
                type="checkbox"
                name="learn"
                value={item}
                defaultChecked={learnSkills.includes(item) ? "checked" : ""}
              />
              <span className={styles.teach} />
            </label>

            <p className={styles.skills}>{item}</p>

            <label className={styles.containerCheckbox1}>
              <input
                type="checkbox"
                name="teach"
                value={item}
                defaultChecked={teachSkills.includes(item) ? "checked" : ""}
              />
              <span className={styles.learn} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
