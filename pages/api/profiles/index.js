import prisma from "../../../prisma/client.js";

//   prisma pgsql syntax
//   const result = await prisma.$queryRaw`SELECT * FROM "Profiles"`;

export default async (req, res) => {
  if (req.method == "GET") {
    const result = await prisma.profiles.findMany();
    res.json(result);
  }

  if (req.method == "POST") {
    const {
      profile_id,
      full_name,
      preferred_name,
      teach_skills,
      learn_skills,
      bio,
      avatar_url,
      approved,
    } = req.body;
    const result = await prisma.profiles.create({
      data: {
        profile_id: profile_id,
        full_name: full_name,
        preferred_name: preferred_name,
        teach_skills: teach_skills,
        learn_skills: learn_skills,
        bio: bio,
        avatar_url: avatar_url,
        approved: approved,
      },
    });
    res.json(result);
  }
};
