import prisma from "../../../prisma/client";

export default async (req, res) => {
  if (req.method == "GET") {
    const category = req.query.category;
    const result = await prisma.profiles.findMany({
      where: {
        OR: [
          {
            learn_skills: {
              has: category,
            },
          },
          {
            teach_skills: {
              has: category,
            },
          },
        ],
      },
    });
    res.json(result);
  }
};
