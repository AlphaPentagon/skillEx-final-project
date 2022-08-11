import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useState } from "react";
import EditProfile from "../../src/components/EditProfile";
import prisma from "../../prisma/client";
import Header from "../../src/components/Header";
import Link from "next/link";
import ProfileInfo from "../../src/components/ProfileInfo";
import Avatar from "../../src/components/Avatar";
import styles from "../../src/components/EditProfile/EditProfile.module.css";
import Button from "../../src/components/Button";

export default withPageAuthRequired(function MyProfile({ profile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(profile);

  function handleClick() {
    setIsEditing(!isEditing);
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
      <Avatar
        name={currentProfile.preferred_name}
        imageUrl={currentProfile.avatar_url}
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
        text={isEditing ? "Cancel" : "Edit"}
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

// # My Profile page
// ## useState (isEditing = false)
// Use logged in user id to render profile info
//     - fetch profile from db where id = logged in user id
//     - EDIT button toggles state to true
// ## useState isEditing = true
// Use logged in user id to render current profile info as placeholder text
//     - fetch profile from db where id = logged in user id
//     - SUBMIT button stores edited form data in object and send PUT request on submit
//     - CANCEL toggles state to false and renders My Profile
//     - DELETE button?
//         - fetch DELETE method where id = logged in user id
//         - prompt "are you sure you want to delete?"
