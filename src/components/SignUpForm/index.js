//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./signUpForm.module.css";

export default function SignUpForm({
  profileDetails,
  checkedTeach,
  checkedLearn,
}) {
  function handleSubmit(e) {
    //profileDetails = {...profileDetails, }
    e.preventDefault();
    console.log(profileDetails);
    console.log("submitting form");
  }

  return (
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails />
      <LearnTeachChecks />

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}
