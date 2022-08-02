import styles from "./signUpForm.module.css";
import { useState } from "react";

export default function NamesAndDetails() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label for="fullName">Full Name:</label>
          <input
            value={fullName}
            type="text"
            id="fullName"
            name="fullName"
            className={styles.inputField}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <label for="username">Username:</label>
          <input
            value={userName}
            type="text"
            id="username"
            name="username"
            className={styles.inputField}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <label for="email">Email:</label>
          <input
            value={email}
            type="text"
            id="email"
            name="email"
            className={styles.inputField}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <label for="imageUrl">Image Url:</label>
          <input
            value={imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            className={styles.inputField}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className={styles.descriptionContainer}>
          <label for="description">Description:</label>
          <input
            value={description}
            type="text"
            name="description"
            className={styles.inputField}
            id={styles.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* <button className={styles.uploadPhotoButton}>Upload Photo</button> */}
      </div>
    </form>
  );
}
