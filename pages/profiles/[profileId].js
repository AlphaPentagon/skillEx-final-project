import prisma from "../../prisma/client";
import ProfileInfo from "../../src/components/ProfileInfo";
import Header from "../../src/components/Header/index";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import avatarStyles from "../../src/components/Avatar/avatar.module.css";
import styles from "../../styles/profileId.module.css";
import ProfileMessage from "../../src/components/ProfileMessage";
import ImageWithFallback from "../../src/components/ImageWithFallBack";
import { useRouter } from "next/router";
import Head from "next/head";

export default withPageAuthRequired(function Profile({ profile }) {
  // console.log("current profile: ", profile);

  let imageurl = "/media/images/default-profile.png";
  if (profile.avatar_url == null) {
    imageurl = "/media/images/default-profile.png";
  } else if (profile.avatar_url.startsWith("http")) {
    imageurl = `${profile.avatar_url}`;
  } else {
    imageurl = "/media/images/default-profile.png";
  }

  const router = useRouter();

  return (
    <>
      <Head>
        <title>SkillEx | {profile.preferred_name}'s Profile</title>
      </Head>
      <a
        aria-roledescription="Back to search results"
        className={styles.backButton}
        onClick={() => {
          router.push(localStorage.getItem("path"));
        }}
      >
        Back to search results
      </a>
      <ImageWithFallback
        className={avatarStyles.avatar}
        name={profile.full_name}
        width={150}
        height={150}
        src={imageurl}
        fallbackSrc={`/media/images/default-profile.png`}
        alt="profile picture"
      />
      <div className={styles.padding}></div>
      <Header text={profile.full_name} colour="blue" />

      <ProfileInfo profile={profile} />

      <ProfileMessage profile={profile} />
    </>
  );
});

// /* needed for data fetching before rendering - creates static versions of each page/path
//   queries the database directly using prisma as an ORM and tells next what profile pages to create, based on the id
//   do NOT use fetch requests, as explained in this article here - https://stackoverflow.com/questions/61452675/econnrefused-during-next-build-works-fine-with-next-dev */

// export async function getStaticPaths() {
//   const data = await prisma.profiles.findMany();

//   const paths = data.map((profile) => {
//     return {
//       params: {
//         profileId: `${profile.id}`,
//       },
//     };
//   });
//   // console.log(paths);

//   return {
//     paths,
//     fallback: false,
//   };
// }

// /* needed for data fetching before rendering - makes the profile object available as a prop in the component
//   queries the database directly using prisma as an ORM and fetches the current profile, based on the id
//   do NOT use fetch requests, as explained in this article here - https://stackoverflow.com/questions/61452675/econnrefused-during-next-build-works-fine-with-next-dev */

// export async function getStaticProps(context) {
//   const { params } = context;
//   const data = await prisma.profiles.findUnique({
//     where: { id: Number(params.profileId) },
//   });

//   // console.log("profile: ", data);
//   return {
//     props: { profile: { ...data } },
//   };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const data = await prisma.profiles.findUnique({
    where: { id: Number(params.profileId) },
  });

  return {
    props: { profile: { ...data } },
  };
}
