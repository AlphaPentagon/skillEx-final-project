// import { Button } from "bootstrap";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import Button from "../Button/index";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

const AboutUs = () => {
	// Auth0
	const { user } = useUser();

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h2 className={styles.aboutText}>
					SkillEx is the place where exchanging skills and talents becomes
					easy.
				</h2>
				<div className={styles.sectionContainer}>
					<div className={styles.imageContainer}>
						<video
							src="/media/videos/AboutUsNew.mp4"
							alt="diagram showing how skillswapping works"
							className={styles.image}
							controls
						/>
					</div>
					<div className={styles.aboutUsContainer}>
						<h3 className={styles.aboutUs}>
							Have you ever wanted to learn a new skill? Perhaps you have
							a hidden talent that you would like to share with others?
							<p>
								SkillEx is a community of volunteer teachers and keen
								learners. We have a simple and easy to use platform
								which allows you to share skills and knowhow!
							</p>
							Browse through our categories and simply find a member that
							suits your needs and send them a message.
							<p className={styles.startYourJourney}>
								Start your journey below by visiting our discover page.
							</p>
						</h3>
						<div className={styles.bothButtons}>
							<div className={styles.discoverButtonLayout}>
								<Link href={"/discover/"}>
									<a>
										<Button
											className={styles.discoverButton}
											text="Discover"
											type="discoverButton"
										></Button>
									</a>
								</Link>
							</div>
							{!user && (
								<div className={styles.signUpButtonLayout}>
									<Link href={"/api/auth/signup"}>
										<a>
											<Button
												className={styles.signUpButton}
												text="Sign Up"
												type="signUpBorderButton"
											></Button>
										</a>
									</Link>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
