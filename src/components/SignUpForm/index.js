//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./signUpForm.module.css";

export default function SignUpForm() {
  function handleSubmit() {
    console.log("submitting form");
  }

  return (
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails />
      <LearnTeachChecks />

      <button onSubmit={handleSubmit}>Sign Up</button>
    </div>
  );
}
