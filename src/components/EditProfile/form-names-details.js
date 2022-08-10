import styles from "./EditProfile.module.css";

export default function NamesAndDetails({ profile }) {
  return (
    <form>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <label className={styles.label} for="fullName">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={styles.inputField}
            placeholder={profile.full_name}
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} for="username">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={styles.inputField}
            placeholder={profile.preferred_name}
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
          <label className={styles.label} for="imageUrl">
            Image Url:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className={styles.inputFieldimg}
            placeholder={profile.avatar_url}
          />
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} for="description">
            Description:
          </label>
          <textarea
            type="text"
            name="description"
            className={styles.inputFieldDescription}
            id={styles.description}
            placeholder={profile.bio}
          />
        </div>

        {/* <button className={styles.uploadPhotoButton}>Upload Photo</button> */}
      </div>
    </form>
  );
}
