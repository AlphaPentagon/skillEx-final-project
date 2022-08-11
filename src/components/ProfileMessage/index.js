import styles from "./profileMessage.module.css";
import Button from "../Button";
import { useState } from "react";

const ProfileMessage = ({ profile }) => {
  const [text, setText] = useState("");
  // const { user } = useUser();

  const handleSend = (event) => {
    event.preventDefault();
    console.log(text);
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className={styles.messageContainer}>
      {/* <h3 className={styles.title}>Please get in contact.</h3>
        <p>
          If you would like to get in contact with {profile.full_name}, in
          regards to a skill you would like to help learn or teach. Please use
          the email address provided below.
        </p>
        <p>{user.name}</p> */}
      <form className={styles.profileInfoForm} onSubmit={handleSend}>
        <textarea
          onChange={handleChange}
          placeholder="Type your message here..."
          value={text}
        ></textarea>
        <Button type="profileInfoButton" text="Send" />
      </form>
    </div>
  );
};

export default ProfileMessage;
