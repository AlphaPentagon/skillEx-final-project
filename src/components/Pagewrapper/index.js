// components/page-wrapper

import { useUser } from "@auth0/nextjs-auth0";

export default function PageWrapper({ children }) {
	const { user } = useUser();

	return user ? (
		<>
			{<div class="user"></div>}
			{children}
		</>
	) : (
		<>
			{<div class="notfound" />}
			{children}
		</>
	);
}

// import { useUser } from '@auth0/nextjs-auth0';

// export default function PageWrapper({ children, status }) {
//     const { user } = useUser();

//     return status || user ? (
//         <>
//             {!status && <div class="somestyle">You are logged in but the site is offline!</div>}
//             {children}
//         </>
//     ) : (
//         <SiteOffline />
//     );
// };
