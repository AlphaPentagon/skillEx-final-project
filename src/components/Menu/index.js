//Menu
//Burger menu visible on mobile
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./menu.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
export default function Menu() {
	//Menu state
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentProfile, setCurrentProfile] = useState({});
	console.log(currentProfile);
	// Auth0
	const { user } = useUser();

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		const getUserID = async () => {
			const response = await fetch("/api/auth/me");
			const data = await response.json();
			const profileId = data.sub;
			const url = `/api/profiles/getUser/${profileId}`;
			const profileData = await fetch(url);
			console.log(profileData);
		};
		const profileData = getUserID();
		setCurrentProfile(profileData);
	}, []);

	return (
		//Menu visibility
		//If menuOpen state is false:
		// - call toggleMenu function when menu icon is clicked to show menu and set menuOpen to true
		//If menuOpen state is true:
		// - call toggleMenu function when close icon is clicked to hide menu and set menuOpen to false
		//
		//Log in/out link visibility
		//If logIn state is false:
		// - call toggleLogIn function when 'Log In' link is clicked to show 'Log Out' link and set logIn to true
		//If logIn state is true:
		// - call toggleLogIn function when 'Log Out' link is clicked to show 'Log In' link and set logIn to false
		//
		<>
			{!menuOpen && (
				<div className={styles.menu} onClick={toggleMenu}>
					<Image
						className={styles.menuOpenImage}
						src="/media/icons/menuIcon.png"
						alt="open menu icon"
						width={100}
						height={100}
					/>
				</div>
			)}
			{menuOpen && (
				<div className={styles.modal} onClick={toggleMenu}>
					<div className={styles.menuClose}>
						<Image
							className={styles.menuCloseImage}
							src="/media/icons/menuClose.png"
							alt="close menu icon"
							width={60}
							height={60}
						/>
					</div>
					{user && (
						<>
							<img
								src={user.picture}
								alt={user.name}
								height={50}
								width={50}
							/>
							<p>Hi {user.name}!</p>
						</>
					)}

					<ul className={styles.pageLinks}>
						<Link href="/">
							<a title="Go to home page">Home</a>
						</Link>
						<Link href="/discover">
							<a title="Discover skills">Discover</a>
						</Link>
						<Link href="/contact">
							<a title="Get in touch">Contact us</a>
						</Link>
					</ul>

					<br />

					<ul className={styles.userLinks}>
						{!user && (
							<>
								<a
									href="/api/auth/signup"
									title="Sign up"
									onClick={() => {
										toggleMenu();
									}}
								>
									Sign up
								</a>
								<a
									href="/api/auth/login"
									title="Log in"
									onClick={() => {
										toggleMenu();
									}}
								>
									Login
								</a>
							</>
						)}
						{user && (
							<>
								<Link href="/profiles/my-profile">
									<a title="View your profile">My profile</a>
								</Link>

								<a
									href="/api/auth/logout"
									title="Log out of your profile"
									onClick={() => {
										toggleMenu();
									}}
								>
									Log out
								</a>
							</>
						)}
					</ul>
				</div>
			)}
		</>
	);
}

// export const getServerSideProps = withPageAuthRequired({
// 	async getServerSideProps(context) {
// 		const session = getSession(context.req, context.res);
// 		const profileId = session.user.sub;
// 		const data = await prisma.profiles.findMany({
// 			where: { profile_id: profileId },
// 		});
// 		console.log()
// 		return {
// 			props: { profile: { ...data[0] } },
// 		};
// 	},
// });
