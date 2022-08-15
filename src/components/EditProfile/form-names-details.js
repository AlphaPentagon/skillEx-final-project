import styles from "./EditProfile.module.css";

export default function NamesAndDetails({ profile }) {
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
        defaultValue={profile.full_name}
      />

      <label className={styles.label} for="username">
        Preferred name:
      </label>
      <input
        type="text"
        id="username"
        name="username"
        className={styles.inputField}
        defaultValue={profile.preferred_name}
      />

      <label className={styles.label} for="imageUrl">
        Profile picture link:
      </label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        className={styles.inputField}
        defaultValue={profile.avatar_url}
      />

      <label className={styles.label} id={styles.descLabel} for="description">
        Description:
      </label>
      <textarea
        className={styles.inputField}
        type="text"
        name="description"
        id={styles.description}
        defaultValue={profile.bio}
      />

      {/* <button className={styles.uploadPhotoButton}>Upload Photo</button> */}
    </form>
  );
}
