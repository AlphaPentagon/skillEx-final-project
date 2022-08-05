import styles from "./profileInfo.module.css";
import Button from "../Button/index";
import { useState } from "react";

const ProfileInfo = ({ profile }) => {
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
        <h3 className={styles.title}>Bio </h3>
        <p className={styles.bio}>{profile.bio}</p>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Teach</h3>
        <ul>
          {profile.teach_skills.map((skill) => (
            <p className={styles.teachSkills}>{skill}</p>
          ))}
        </ul>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Learn</h3>
        <ul>
          {profile.learn_skills.map((skill) => (
            <p className={styles.teachSkills}>{skill}</p>
          ))}
        </ul>
      </div>
      <div className={styles.profileInfoContainer}>
      </div>
      <div className={styles.messageContainer}>
        <p className={styles.messageTitle}>Write a message</p>
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
