//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./signUpForm.module.css";

export default function SignUpForm() {
  function handleSubmit(e) {
    //e.preventDefault();
    let fullName = document.querySelector("#fullName").value;
    let username = document.querySelector("#username").value;
    let imageUrl = document.querySelector("#imageUrl").value;
    let description = document.querySelector("[name='description']").value;
    let learnAll = [];
    let teachAll = [];
    let learn = document.querySelectorAll("input[name='learn']:checked");
    let teach = document.querySelectorAll("input[name='teach']:checked");
    learn.forEach((item) => {
      learnAll.push(item.value);
    });
    teach.forEach((item) => {
      teachAll.push(item.value);
    });

    let profile = {
      full_name: fullName,
      preferred_name: username,
      teach_skills: teachAll,
      learn_skills: learnAll,
      bio: description,
      avatar_url: imageUrl,
    };

    console.log(profile);
    console.log("Submitting form");
  }

  return (
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails />
      <LearnTeachChecks />

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}
