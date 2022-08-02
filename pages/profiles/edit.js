// pages/profile.js
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { useUser } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function Edit({ user }) {
	return <div>Hello {user.name}</div>;
});
