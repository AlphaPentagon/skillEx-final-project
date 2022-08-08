//SignUpForm
import NamesAndDetails from "./form-names-details";
import LearnTeachChecks from "./learnTeachChecks";
import styles from "./signUpForm.module.css";
import { useState } from "react";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

import Button from "../Button/index";

export default function SignUpForm() {
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
      learnAll.push(item.value.toLowerCase());
    });
    teach.forEach((item) => {
      teachAll.push(item.value.toLowerCase());
    });
    let isApproved = document.querySelector("#agree").checked;

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

    console.log(profile);
    console.log("Submitting form");

    let response = await fetch("http://localhost:3000/api/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(profile),
    });

    let content = await response.json();
  }

  return (
    <div className={styles.signUpSubContainer}>
      <NamesAndDetails />
      <LearnTeachChecks />
      <div className={styles.termsContainer}>
        <label className={styles.label} htmlFor="agree">
          I consent to SkillEx storing my data and accept the{" "}
          <a
            href="/terms-services#termsOfServices
"
            className={styles.hyperlink}
            target="_blank"
            rel="noopener noreferrer"
          >
            terms of service
          </a>
          <input type="checkbox" id="agree" onChange={handleCheck} />
        </label>
      </div>
      <div className={styles.signUpButton}>
        <Link href="/discover">
        <a>
        <button
          text="Sign Up"
          type="signUpFormButton"
          disabled={!agree}
          onClick={handleSubmit}
          
          
        >
          Sign Up
        </button>
        </a>
        </Link>
      </div>
    </div>
  );
}
