const { PrismaClient } = require("@prisma/client");
// Fetch all posts (in /pages/api/posts.ts)
const prisma = new PrismaClient();

export default async function handle(req, res) {
  // prisma syntax
  // const profiles = await prisma.profiles.findMany();
  // prisma pgsql syntax
  const result = await prisma.$queryRaw`SELECT * FROM "Profiles"`;
  res.json(result);
}
