import "../styles/globals.css";
import Layout from "../src/components/Layout/Layout";
import Head from "next/head";
import PageWrapper from "../src/components/Pagewrapper";
//Auth0
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>SkillEx</title>
				<meta
					name="description"
					content="A free platform for people to share their skills in exchange for developing the skills of others."
				/>
			</Head>
			<UserProvider>
				<PageWrapper>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</PageWrapper>
			</UserProvider>
		</>
	);
}

export default MyApp;

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
