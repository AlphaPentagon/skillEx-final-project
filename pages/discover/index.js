import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
// import Searchbar from "../../src/components/SearchBar";
import SkillGallery from "../../src/components/SkillGallery/index";
import prisma from "../../prisma/client";
import stylesHome from "../../styles/Home.module.css";
import Head from "next/head";

const Discover = ({ profilesArr }) => {
	return (
		<>
			<Head>
				<title>SkillEx | Discover</title>
				<meta
					name="description"
					content="SkillEx discover page to find people to share your interests with."
				/>
			</Head>
			<Header text="Discover" />
			<p className={stylesHome.sloganText}>
				Teach and Learn at the same time, If you are a learner you can
				search all tutors that teach the skill and if you are a tutor you
				can find students that want to learn your skill!
			</p>
			<ProfileGallery profiles={profilesArr} />

			<SkillGallery />
		</>
	);
};

export default Discover;

// /* needed for data fetching before rendering - makes all profiles available as a prop in the component
//   queries the database directly using prisma as an ORM and fetches all profiles
//   do NOT use fetch requests, as explained in this article here - https://stackoverflow.com/questions/61452675/econnrefused-during-next-build-works-fine-with-next-dev */

// export async function getStaticProps() {
//   const data = await prisma.profiles.findMany();
//   return {
//     props: { profilesArr: data },
//   };
// }

/* needed for data fetching before rendering - makes all profiles available as a prop in the component
  queries the database directly using prisma as an ORM and fetches all profiles
  do NOT use fetch requests, as explained in this article here - https://stackoverflow.com/questions/61452675/econnrefused-during-next-build-works-fine-with-next-dev */

export async function getServerSideProps() {
	const data = await prisma.profiles.findMany();
	return {
		props: { profilesArr: data },
	};
}
