import styles from "./signUpForm.module.css";

export default function NamesAndDetails() {
  return (

    <div className={styles.container}>

      <label className={styles.label} for="fullName">
        Full Name:
      </label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        className={styles.inputField}
        placeholder="e.g. Jane Smith"

        required
      />

      <label className={styles.label} for="username">
        Preffered name:

      </label>
      <input
        type="text"
        id="username"
        name="username"
        className={styles.inputField}
        placeholder="e.g. Jane"

        required

      />

      <label className={styles.label} for="imageUrl">
        Profile picture link:
      </label>
      <input

        type="url"

        id="imageUrl"
        name="imageUrl"
        className={styles.inputField}
        placeholder="e.g. https://www.github.com/githubprofile.png"

        required

      />

      <label className={styles.label} id={styles.descLabel} for="description">
        Description:
      </label>
      <textarea
        className={styles.inputField}
        type="text"
        name="description"
        id={styles.description}
        placeholder="Please introduce yourself to the Skillex community here."

        required
      />
    </div>

  );
}
