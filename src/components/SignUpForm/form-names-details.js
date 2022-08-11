import styles from "./signUpForm.module.css";

export default function NamesAndDetails() {
  return (
    <form className={styles.container}>
      <label className={styles.label} for="fullName">
        Full Name:
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        className={styles.inputField}
      />

      <label className={styles.label} for="username">
        Preffered name:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className={styles.inputField}
      />

      <label className={styles.label} for="imageUrl">
        Image Url:
      </label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        className={styles.inputField}
      />

      <label className={styles.label} id={styles.descLabel} for="description">
        Description:
      </label>
      <textarea
        className={styles.inputField}
        type="text"
        name="description"
        id={styles.description}
        placeholder=""
      />

      {/* <button className={styles.uploadPhotoButton}>Upload Photo</button> */}
    </form>
  );
}
