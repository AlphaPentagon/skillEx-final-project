import styles from "./signUpForm.module.css";

export default function NamesAndDetails() {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label for="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={styles.inputField}
          />
        </div>

        <div className={styles.inputContainer}>
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.inputField}
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
            type="text"
            id="imageUrl"
            name="imageUrl"
            className={styles.inputField}
          />
        </div>

        <div className={styles.descriptionContainer}>
          <label for="description">Description:</label>
          <input
            type="text"
            name="description"
            className={styles.inputField}
            id={styles.description}
          />
        </div>

        {/* <button className={styles.uploadPhotoButton}>Upload Photo</button> */}
      </div>
    </form>
  );
}
