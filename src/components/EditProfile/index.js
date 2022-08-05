//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./EditProfile.module.css";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Button from "../Button/index"

export default function EditProfile() {
  const [agree, setAgree] = useState(false);
  const { user } = useUser();

  function handleCheck() {
    setAgree(!agree);
  }

  async function handleSubmit(e) {
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
    let isApproved = document.querySelector("#agree").value;

    let profile = {
      profile_id: user.sub,
      full_name: fullName,
      preferred_name: username,
      teach_skills: teachAll,
      learn_skills: learnAll,
      bio: description,
      avatar_url: imageUrl,
      approved: isApproved,
    };

/* This will need to be changed over to a PUT/PATCH request? */

    let response = await fetch("/api/profiles", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(profile),
    });

    let content = await response.json();

    console.log(profile);
    console.log("Editting form");
  }

  return (
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails />
      <LearnTeachChecks />

      <div className= {styles.signUpButton}>
      <Button text="Update Profile" type= "signUpFormButton" onClick={handleSubmit}>
        Update Profile
      </Button>
      </div>
    </div>
  );
}
