import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method == "GET") {
    const id = Number(req.query.id); 
    const result = await prisma.profiles.findUnique({
      where: { id: id},
    });
    res.json(result);
  }
};
