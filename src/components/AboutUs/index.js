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
				<h2 className="abouttitle"></h2>
				<div className={styles.textContainer}>
					<h3 className={styles.aboutText}>
						SkillEx is the place where exchanging skills and talents
						becomes easy.
					</h3>
					<div className={styles.sectionContainer}>
						<div className={styles.imageContainer}>
							<Image
								src="/media/images/skillswapping.png"
								alt="diagram showing how skillswapping works"
								className={styles.image}
								width={770}
								height={550}
							/>
						</div>
						<div className={styles.aboutUsContainer}>
							<h3 className={styles.aboutUs}>
								Have you ever wanted to learn a new skill? Or maybe you
								want to share your skills with others?
								<p>
									SkillEx lets you search our community of volunteer
									mentors and keen students, make contact and organise
									1-2-1 sessions to share skills and knowhow.
								</p>
								Browse through our categories, find a member that suits
								your needs and drop them a message.
								<p className={styles.startYourJourney}>
									Start your journey below by visiting our discover
									page.
								</p>
							</h3>
							<div className={styles.bothButtons}>
								<div className={styles.discoverButtonLayout}>
									<Link href={"/discover/"}>
										<a>
											<Button
												className={styles.discoverButton}
												text="Discover"
											></Button>
										</a>
									</Link>
								</div>
								{!user && (
									<div className={styles.signUpButtonLayout}>
										<Link href={"/profiles/sign-up"}>
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
		</div>
	);
};

export default AboutUs;
