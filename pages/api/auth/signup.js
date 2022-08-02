// api/signup.js
import { handleLogin } from "@auth0/nextjs-auth0";

export default async function signup(req, res) {
	try {
		await handleLogin(req, res, {
			// TODO: Remove hardcoded localhost address
			returnTo: "http://localhost:3000/profiles/sign-up",
			authorizationParams: {
				// Note that this can be combined with prompt=login , which indicates if
				// you want to always show the authentication page or you want to skip
				// if there’s an existing session.
				screen_hint: "signup",
			},
		});
	} catch (error) {
		res.status(error.status || 400).end(error.message);
	}
}
