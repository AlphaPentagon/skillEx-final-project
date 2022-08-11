//SignUpForm

// set current state to profile object ✅
// pass props from state ✅
// when submitted, update state with new profile object ✅

// when isEditing, set 'edit' button to 'cancel' ✅
// update button use button component ✅
// update button should reset isEditing to false ✅
// add text regarding deletion to contact us page
// remove message box from profile info ✅
// add avatar to my profile page ✅

//change link to new my profile page ✅

import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./EditProfile.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import Button from "../Button";

export default function EditProfile({
  profile,
  setCurrentProfile,
  setIsEditing,
}) {
  const { user } = useUser();

  async function handleSubmit(e, id) {
    console.log(profile);
    let fullName = document.querySelector("#fullName").value;
    let username = document.querySelector("#username").value;
    let imageUrl = document.querySelector("#imageUrl").value;
    let description = document.querySelector("[name='description']").value;
    if (!document.querySelector("#fullName").value) {
      fullName = document.querySelector("#fullName").placeholder;
    }
    if (!document.querySelector("#username").value) {
      username = document.querySelector("#username").placeholder;
    }
    if (!document.querySelector("#imageUrl").value) {
      imageUrl = document.querySelector("#imageUrl").placeholder;
    }
    if (!document.querySelector("[name='description']").value) {
      description = document.querySelector("[name='description']").placeholder;
    }

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
      id: id,
      profile_id: user.sub,
      full_name: fullName,
      preferred_name: username,
      teach_skills: teachAll,
      learn_skills: learnAll,
      bio: description,
      avatar_url: imageUrl,
      approved: true,
    };

    console.log(profile);

    /* This will need to be changed over to a PUT/PATCH request? */

    let response = await fetch(`/api/profiles/${profile.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(profile),
    });
    setCurrentProfile(profile);
    setIsEditing(false);

    console.log(profile);
    console.log("Editing form");
  }

  return (
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails profile={profile} />
      <LearnTeachChecks
        learnSkills={profile.learn_skills}
        teachSkills={profile.teach_skills}
      />

      <div className={styles.signUpButton}>
        <Button
          text="Update Profile"
          type="signUpFormButton"
          onClick={(e) => handleSubmit(e, profile.id)}
        >
          Update Profile
        </Button>
      </div>
    </div>
  );
}

//on landing, use id to fetch user profile and return
