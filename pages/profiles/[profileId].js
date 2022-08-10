import prisma from "../../prisma/client";
import ProfileInfo from "../../src/components/ProfileInfo";
import Header from "../../src/components/Header/index";
import Avatar from "../../src/components/Avatar/index";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Button from "../../src/components/Button";

export default withPageAuthRequired(function Profile({ profile }) {
  // console.log("current profile: ", profile);

  return (
    <>
      <Avatar name="Jenna" imageUrl={profile.avatar_url} />
      <Header text={profile.full_name} colour="blue" />
      <ProfileInfo profile={profile} />
      <Link href="/discover">
					<a aria-label="discover">
          <p style={{textDecoration:"underline"}} >Back to Search tutors</p>
					</a>
				</Link>
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

  // console.log("profile: ", data);
  return {
    props: { profile: { ...data } },
  };
}
