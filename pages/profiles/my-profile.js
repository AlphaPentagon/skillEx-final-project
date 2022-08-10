import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head";
import { useState } from "react";
import EditProfile from "../../src/components/EditProfile";
import prisma from "../../prisma/client";

import ProfileInfo from "../../src/components/ProfileInfo";
import styles from "../../src/components/EditProfile/EditProfile.module.css";
import Button from "../../src/components/Button";

export default withPageAuthRequired(function MyProfile({ profile }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <div className={styles.signUpContainer}>
      <Head>
        <title>My Profile </title>
      </Head>

      <h1>{profile.preferred_name}'s Profile</h1>
      <Button onClick={handleClick} text="Edit" type="blue" />
      <br></br>
      {isEditing ? (
        <EditProfile profile={profile} />
      ) : (
        <ProfileInfo profile={profile} />
      )}
    </div>
  );
});

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const session = getSession(context.req, context.res);
    console.log(session);
    const profileId = session.user.sub;
    const data = await prisma.profiles.findMany({
      where: { profile_id: profileId },
    });
    console.log(data);

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
