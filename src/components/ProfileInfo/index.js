import styles from "./profileInfo.module.css";

const ProfileInfo = ({ profile }) => {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Bio</h3>
        <p className={styles.bio} data-testid="bio-text">
          {profile.bio}
        </p>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Teach</h3>
        <div className={styles.skillsContainer}>
          {profile.teach_skills.map((skill) => (
            <p className={styles.skillsContent}>{skill}</p>
          ))}
        </div>
      </div>
      <div className={styles.profileInfoContainer}>
        <h3 className={styles.title}>Learn</h3>
        <div className={styles.skillsContainer}>
          {profile.learn_skills.map((skill) => (
            <p className={styles.skillsContent}>{skill}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
