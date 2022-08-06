import prisma from "../../prisma/client";
import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
import Searchbar from "../../src/components/SearchBar";
import SkillGallery from "../../src/components/SkillGallery/index";

const Discover = ({ profiles, category }) => {
  const isProfiles = profiles.length > 0;

  return (
    <>
      <Header text={category} />
      {isProfiles ? (
        <ProfileGallery profiles={profiles} />
      ) : (
        <p>No profiles found</p>
      )}

      <Searchbar />
      <SkillGallery />
    </>
  );
};

export default Discover;

/* needed for data fetching before rendering - creates static versions of each page/path

  **currenty using hardcoded data array - comments below left in for when data is fetched from db**	  
  queries the database directly using prisma as an ORM and tells next what profile pages to create, based on the id
  do NOT use fetch requests, as explained in this article here - https://stackoverflow.com/questions/61452675/econnrefused-during-next-build-works-fine-with-next-dev */

export async function getStaticPaths() {
  // skills categories currently hardcoded - eventually this will be a table in our db and we will need to query the db to get this data
  const data = [
    "accounting",
    "cooking",
    "diy",
    "english",
    "languages",
    "business",
    "gardening",
    "construction",
    "craft",
    "it",
    "martial+arts",
  ];

  const paths = data.map((category) => {
    return {
      params: {
        category,
      },
    };
  });
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

/* needed for data fetching before rendering - makes the relevant profiles available as a prop in the component
	queries the database directly using prisma as an ORM and fetches the current profile, based on the id
	do NOT use fetch requests, as explained in this article here - https://stackoverflow.com/questions/61452675/econnrefused-during-next-build-works-fine-with-next-dev */

export async function getStaticProps(context) {
  const { params } = context;
  const data = await prisma.profiles.findMany({
    where: {
      OR: [
        {
          learn_skills: {
            has: params.category,
          },
        },
        {
          teach_skills: {
            has: params.category,
          },
        },
      ],
    },
  });

  console.log(params.category + " profiles: ", data);
  return {
    props: { profiles: [...data], category: params.category },
  };
}
