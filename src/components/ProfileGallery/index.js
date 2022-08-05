import styles from "./ProfileGallery.module.css";
import { useState } from "react";
import ProfileCard from "../ProfileCard/index.js";
import profiles from "../../libs/profiles";
import {
  FaArrowAltCircleRight as RightArrow,
  FaArrowAltCircleLeft as LeftArrow,
} from "react-icons/fa";

const ProfileGallery = () => {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === profiles.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? profiles.length - 1 : current - 1);
  }
  return (
    <div>
    
      <LeftArrow className={styles.iconLeftArrow} onClick={prevSlide} />
      <RightArrow className={styles.iconRightArrow} onClick={nextSlide} />

    <div className={styles.searchResult}>{`Search Results: ${current + 1} out of ${profiles.length}`}</div>

      <div className={styles.container}>
        {profiles.map((profile, index) => {
          
            return (
              <div key={index} className={styles.profileGallery}>
                {index === current && (
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
                  
                )}
              </div>
            );
          
        })}
      </div>
    </div>
  );
};

export default ProfileGallery;
