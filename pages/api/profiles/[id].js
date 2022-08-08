import prisma from "../../../prisma/client.js";



export default async (req, res) => {
  if (req.method == "GET") {
    const id = Number(req.query.id);
    const result = await prisma.profiles.findUnique({
      where: { id: id },
    });
    res.json(result);
  }

  if (req.method == "PUT") {
    const id = Number(req.query.id);
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
    const result = await prisma.profiles.update({
      where: { id: id },
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
    console.log(result);
  }
};
