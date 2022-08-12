import styles from "./profileMessage.module.css";
import Button from "../Button";
import { useState } from "react";

const ProfileMessage = ({ profile }) => {
  const [text, setText] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleSend = (event) => {
    event.preventDefault();
    //console.log(text);
    setText("");
    setMessageSent(true);
    //console.log(messageSent);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.messageContainer}>
      <form className={styles.profileInfoForm} onSubmit={handleSend}>
        <textarea
          onChange={handleChange}
          placeholder={`Send a message to ${profile.preferred_name}...`}
          value={text}
        ></textarea>
        <Button type="profileInfoButton" text="Send" />
      </form>
      <h3>
        {messageSent
          ? `Your message has been sent to ${profile.preferred_name} !`
          : null}
      </h3>
    </div>
  );
};

export default ProfileMessage;
