//SignUpForm
import { useState } from "react";
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./signUpForm.module.css";

export default function SignUpForm() {
  const [newUser, setNewUser] = useState({});

  function createNewUser(details, teach, learn) {
    setNewUser({ ...details, teach_skills: teach, learn_skills: learn });
    console.log(newUser);
  }

  function handleSubmit(e) {
    //e.preventDefault();
    createNewUser();
  }

  return (
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails onSubmit={createNewUser} />
      <LearnTeachChecks onSubmit={createNewUser} />

      <button onSubmit={handleSubmit}>Sign Up</button>
    </div>
  );
}
