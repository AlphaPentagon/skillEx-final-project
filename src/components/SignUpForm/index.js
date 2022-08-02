//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./signUpForm.module.css";

export default function SignUpForm({fullName, Email}) {
  
  
  function handleSubmit(e) {
    //profileDetails = {...profileDetails, }
     e.preventDefault();
    console.log("profile details", profileDetails);
    console.log("submitting form");
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails profileDetails={profileDetails} />
      <LearnTeachChecks />

      <button >Sign Up</button>
    </div>
    </form>
  );
}
