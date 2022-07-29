import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.sitemapContainer}>
				<Link href="/">
					<a title="Go to home page">Home</a>
				</Link>
				<br />
				<Link href="/">
					<a title="Discover skills">Discover</a>
				</Link>
				<br />
				<Link href="/">
					<a title="Get in touch">Contact us</a>
				</Link>
			</div>
			<div className={styles.socialContainer}>
				<Link href="/">
					<a title="Facebook">
						<Image
							src="/media/icons/facebook.png"
							width={30}
							height={30}
						/>
					</a>
				</Link>
				<Link href="/">
					<a title="Instagram">
						<Image
							src="/media/icons/instagram.png"
							width={30}
							height={30}
						/>
					</a>
				</Link>
				<Link href="/">
					<a title="TikTok">
						<Image src="/media/icons/tiktok.png" width={30} height={30} />
					</a>
				</Link>
				<Link href="/">
					<a title="Twitter">
						<Image
							src="/media/icons/twitter.png"
							width={30}
							height={30}
						/>
					</a>
				</Link>
			</div>
			<div className={styles.otherLinksContainer}>
				<Link href="/">
					<a title="Code of Conduct">Code of Conduct</a>
				</Link>
				<Link href="/">
					<a title="Privacy Policy">Privacy Policy</a>
				</Link>
				<Link href="/">
					<a title="Terms of Service">Terms of Service</a>
				</Link>
			</div>
			<div className={styles.copyrightContainer}>
				<p>© 2022 SkillEx</p>
			</div>
		</div>
	);
};

export default Footer;
