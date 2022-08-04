const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const profiles = [
  {
    profile_id: 1,
    full_name: "Bronson Sprigings",
    preferred_name: "bsprigings0",
    teach_skills: ["English", "Cooking"],
    learn_skills: ["Accounting", "DIY", "IT"],
    bio: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    avatar_url:
      "https://robohash.org/nequepraesentiumsit.png?size=50x50&set=set1",
    approved: "on",
  },
  {
    profile_id: 2,
    full_name: "Veronique Saye",
    preferred_name: "vsaye1",
    teach_skills: ["Gardening"],
    learn_skills: ["Cooking"],
    bio: "Praesent lectus.",
    avatar_url: "https://robohash.org/hicsolutamagni.png?size=50x50&set=set1",
    approved: "on",
  },
];

const load = async () => {
  try {
    await prisma.profiles.deleteMany();
    console.log("Deleted records in profiles table");
    await prisma.profiles.createMany({
      data: profiles,
    });
    console.log("Added profile data");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
