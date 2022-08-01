import styles from "./ProfileGallery.module.css";
import ProfileCard from "../ProfileCard/index.js";
import profiles from "../../libs/profiles";

const ProfileGallery = () => {
  return (
    <div className={styles.container}>
      {profiles.map((profile, index) => {
        if (index <= 3) {
          return (
            <ProfileCard
              /* TODO key & id for dummy data only, change after Auth0 setup */
              key={profile.profile_id}
              id={profile.id}
              image={profile.avatar_url}
              username={profile.preferred_name}
              learnSkills={profile.learn_skills}
              teachSkills={profile.teach_skills}
              bio={profile.bio}
            />
          );
        }
      })}
    </div>
  );
};

export default ProfileGallery;
