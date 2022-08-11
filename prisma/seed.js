import prisma from "./prisma/client.js";

const profiles = [
  {
    profile_id: "1",
    full_name: "Bronson Sprigings",
    preferred_name: "bsprigings0",
    teach_skills: ["english", "cooking"],
    learn_skills: ["accounting", "diy", "it"],
    bio: "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    avatar_url:
      "https://robohash.org/nequepraesentiumsit.png?size=50x50&set=set1",
    approved: true,
  },
  {
    profile_id: "2",
    full_name: "Veronique Saye",
    preferred_name: "vsaye1",
    teach_skills: ["gardening"],
    learn_skills: ["cooking"],
    bio: "Praesent lectus.",
    avatar_url: "https://robohash.org/hicsolutamagni.png?size=50x50&set=set1",
    approved: true,
  },
];

const load = async () => {
  try {
    await prisma.profiles.deleteMany();
    await prisma.profiles.createMany({
      data: profiles,
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
