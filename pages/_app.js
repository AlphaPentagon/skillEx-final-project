import "../styles/globals.css";
import Layout from "../src/components/Layout/Layout";

//Auth0
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</UserProvider>
	);
}

export default MyApp;

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
