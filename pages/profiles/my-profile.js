import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useState } from "react";
import EditProfile from "../../src/components/EditProfile";
import prisma from "../../prisma/client";
import Header from "../../src/components/Header";
import Link from "next/link";
import ProfileInfo from "../../src/components/ProfileInfo";
import styles from "../../styles/myProfile.module.css";
import Button from "../../src/components/Button";
import ImageWithFallBack from "../../src/components/ImageWithFallBack";
import avatarStyles from "../../src/components/Avatar/avatar.module.css";

export default withPageAuthRequired(function MyProfile({ profile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(profile);

  function handleClick() {
    setIsEditing(!isEditing);
  }
  let imageurl = "/media/images/default-profile.png";
  if (profile.avatar_url == null) {
    imageurl = "/media/images/default-profile.png";
  } else if (profile.avatar_url.startsWith("http")) {
    imageurl = `${profile.avatar_url}`;
  } else {
    imageurl = "/media/images/default-profile.png";
  }
  return (
    <div className={styles.signUpContainer}>
      <Head>
        <title>My Profile </title>
      </Head>
      <Header
        text={`${currentProfile.preferred_name}'s Profile`}
        colour="terraCotta"
      />
      <div className={styles.padding}></div>
      <ImageWithFallBack
        className={avatarStyles.avatar}
        width={150}
        height={150}
        src={imageurl}
        fallbackSrc={`/media/images/default-profile.png`}
        name={currentProfile.preferred_name}
        alt="profile picture"
      />

      <br></br>
      {isEditing ? (
        <EditProfile
          profile={currentProfile}
          setCurrentProfile={setCurrentProfile}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ProfileInfo profile={currentProfile} />
      )}
      <Button
        onClick={handleClick}
        text={isEditing ? "Cancel" : "Edit Profile"}
        type="blue"
      />
      <p>
        To delete your profile, please{" "}
        <Link href="/contact">
          <a>contact us</a>
        </Link>
      </p>
    </div>
  );
});

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    const profileId = session.user.sub;
    const data = await prisma.profiles.findMany({
      where: { profile_id: profileId },
    });

    return {
      props: { profile: { ...data[0] } },
    };
  },
});
