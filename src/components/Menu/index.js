//Menu
//Burger menu visible on mobile
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import styles from "./menu.module.css";

export default function Menu() {
	//Menu state
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		console.log("menu button clicked");
	};

	//Logged in state
	const [logIn, setLogInState] = useState(false);

	const toggleLogIn = () => {
		setLogInState(!logIn);
		console.log("logged in");
	};

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
						className="image"
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
						className="image"
						src="/media/icons/menuClose.png"
						alt="close menu icon"
						width={60}
						height={60}
						/>
						</div>






					<ul className={styles.pageLinks}>
						<Link  href="/">
							<a title="Go to home page">
								Home
							</a>
						</Link>
						<Link href="/">
							<a title="Discover skills">
								Discover
							</a>
						</Link>
						<Link  href="/">
							<a title="Get in touch">
								Contact us
							</a>
						</Link>
					</ul>

					<br />

					<ul className={styles.userLinks}>
						{!logIn && (
							<Link href="#">
								<a
									title="Sign up or log in"
									onClick={() => {
										toggleLogIn();
										toggleMenu();
									}}
								>
									Sign up / Log in
								</a>
							</Link>
						)}
						{logIn && (
							<>
								<Link href="/">
									<a title="View your profile">
										My profile
									</a>
								</Link>

								<Link href="#">
									<a
										title="Log out of your profile"
										onClick={() => {
											toggleLogIn();
											toggleMenu();
										}}
									>
										Log out
									</a>
								</Link>
							</>
						)}
					</ul>
				</div>
			)}
		</>
	);
}

