//Menu
//Burger menu visible on mobile
import Image from "next/image";
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
						width="100"
						height="100"
					/>
				</div>
			)}
			{menuOpen && (
				<div className={styles.modal} onClick={toggleMenu}>
					<Image
						className="image"
						src="/media/icons/menuClose.png"
						alt="close menu icon"
						width="20"
						height="20"
					/>

					<ul className="pageLinks">
						<li>
							<a href="." title="Go to home page">
								Home
							</a>
						</li>
						<li>
							<a href="." title="Discover skills">
								Discover
							</a>
						</li>
						<li>
							<a href="." title="Get in touch">
								Contact us
							</a>
						</li>
					</ul>
					<br />

					<ul className="userLinks">
						{!logIn && (
							<li>
								<a
									href="#"
									title="Sign up or log in"
									onClick={() => {
										toggleLogIn();
										toggleMenu();
									}}
								>
									Sign up / Log in
								</a>
							</li>
						)}
						{logIn && (
							<>
								<li>
									<a href="." title="View your profile">
										My profile
									</a>
								</li>

								<li>
									<a
										href="#"
										title="Log out of your profile"
										onClick={() => {
											toggleLogIn();
											toggleMenu();
										}}
									>
										Log out
									</a>
								</li>
							</>
						)}
					</ul>
				</div>
			)}
		</>
	);
}

