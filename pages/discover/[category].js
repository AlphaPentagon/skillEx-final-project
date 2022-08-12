import prisma from "../../prisma/client";
import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
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

      <SkillGallery />
    </>
  );
};

export default Discover;

export async function getServerSideProps(context) {
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

  return {
    props: { profiles: [...data], category: params.category },
  };
}
