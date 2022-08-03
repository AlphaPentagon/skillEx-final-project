import styles from "./signUpForm.module.css";
import { useState } from "react";

export default function LearnTeachChecks() {
  // // const [profileSkills, setProfileSkills] = useState({
  // //   learn_skills: [],
  // //   teach_skills: [],
  // // });
  // const [checkedLearn, setCheckedLearn] = useState([]);
  // const [checkedTeach, setCheckedTeach] = useState([]);

  // const handleCheckLearn = (event) => {
  //   var updatedLearn = [...checkedLearn];
  //   if (event.target.checked) {
  //     updatedLearn = [...checkedLearn, event.target.value];
  //   } else {
  //     updatedLearn.splice(checkedLearn.indexOf(event.target.value), 1);
  //   }
  //   setCheckedLearn(updatedLearn);
  //   onSubmit(checkedLearn);
  // };
  // console.log("Learn Array", checkedLearn);
  // const handleCheckTeach = (event) => {
  //   var updatedTeach = [...checkedTeach];
  //   if (event.target.checked) {
  //     updatedTeach = [...checkedTeach, event.target.value];
  //   } else {
  //     updatedTeach.splice(checkedTeach.indexOf(event.target.value), 1);
  //   }
  //   setCheckedTeach(updatedTeach);
  //   //onSubmit(checkedTeach);
  // };
  // console.log("Teach Array", checkedTeach);

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
        {
          /* let learn = `learn${item}}`;
        let teach = `teach${item}}`; */
        }
        return (
          <div className={styles.checks}>
            <label className={styles.containerCheckbox1}>
              <input type="checkbox" name="learn" value={item} />
              <span className={styles.teach} />
            </label>

            <p>{item}</p>

            <label className={styles.containerCheckbox1}>
              <input type="checkbox" name="teach" value={item} />
              <span className={styles.learn} />
            </label>
          </div>
        );
      })}
    </div>
  );
}
