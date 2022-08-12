import prisma from "../../../../prisma/client";

export default async (req, res) => {
	if (req.method == "GET") {
		const profileId = req.query.profileId;
		const fixedProfileId = "auth0|" + profileId.slice(6);
		//		console.log(fixedProfileId);
		const data = await prisma.profiles.findMany({
			where: { profile_id: fixedProfileId },
		});
		//		console.log(data);
		res.json(data);
	}
};
