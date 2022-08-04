const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method == "POST") {
    const {
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
        profile_id: 3,
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
