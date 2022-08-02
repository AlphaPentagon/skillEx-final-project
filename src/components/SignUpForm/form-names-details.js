import styles from "./signUpForm.module.css";
import { useState } from "react";

export default function NamesAndDetails() {
  const [profileDetails, setProfileDetails] = useState({
    fullName: "",
    username: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: value,
    });
  };

  return (
    <form action="">
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label for="fullName">Full Name:</label>
          <input
            value={profileDetails.fullName}
            type="text"
            id="fullName"
            name="fullName"
            className={styles.inputField}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputContainer}>
          <label for="username">Username:</label>
          <input
            value={profileDetails.username}
            type="text"
            id="username"
            name="username"
            className={styles.inputField}
            onChange={handleChange}
          />
        </div>

        {/* <div className={styles.inputContainer}>
          <label for="email">Email:</label>
          <input
            value={email}
            type="text"
            id="email"
            name="email"
            className={styles.inputField}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div> */}

        <div className={styles.inputContainer}>
          <label for="imageUrl">Image Url:</label>
          <input
            value={profileDetails.imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            className={styles.inputField}
            onChange={handleChange}
          />
        </div>

        <div className={styles.descriptionContainer}>
          <label for="description">Description:</label>
          <input
            value={profileDetails.description}
            type="text"
            name="description"
            className={styles.inputField}
            id={styles.description}
            onChange={handleChange}
          />
        </div>

        {/* <button className={styles.uploadPhotoButton}>Upload Photo</button> */}
      </div>
    </form>
  );
}
