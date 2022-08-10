import styles from "./profileInfo.module.css";
import Button from "../Button/index";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

const ProfileInfo = ({ profile, user }) => {
  const [text, setText] = useState("");
  const handleSend = (event) => {
    event.preventDefault();
    console.log(text);
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <section className={styles.profileSection}>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Bio</h3>
        <p className={styles.bio}>{profile.bio}</p>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Teach</h3>
        <div className={styles.skillsContainer}>
          {profile.teach_skills.map((skill) => (
            <p className={styles.skillsContent}>{skill}</p>
          ))}
        </div>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Learn</h3>
        <div className={styles.skillsContainer}>
          {profile.learn_skills.map((skill) => (
            <p className={styles.skillsContent}>{skill}</p>
          ))}
        </div>
      </div>
      <div className={styles.messageContainer}>
        <h3 className={styles.title}>Please get in contact.</h3>
        <form className={styles.profileInfoForm} onSubmit={handleSend}>
          <textarea
            onChange={handleChange}
            placeholder="Type your message here..."
            value={text}
          ></textarea>
          <Button type="profileInfoButton" text="Send" />
        </form>
      </div>
    </section>
  );
};

export default ProfileInfo;

//ProfileInfo
// creat profile css
// import module
// create profile info component
