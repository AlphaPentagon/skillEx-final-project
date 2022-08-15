import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../src/components/Header";
// import SearchBar from "../src/components/SearchBar";
import WhyChooseUs from "../src/components/WhyChooseUs";
import AboutUs from "../src/components/AboutUs";
import SkillGallery from "../src/components/SkillGallery";
import SimpleSlider from "../src/components/Testimonials1";

export default function Home() {
	return (
		<>
			<Head>
				<title>SkillEx</title>
				<meta
					name="description"
					content="SkillEx is a free platform for people to share their skills in exchange for developing the skills of others."
				/>
				<link rel="icon" href="/LightBulbFAVICON.ico" />
			</Head>

			<Header text="Exchange skills & knowhow for FREE!" />
			{/* <p className={styles.sloganText}>
        Exchanging skills and knowhow made easy for FREE!
      </p> */}

			{/* <SearchBar /> */}
			<AboutUs />
			<WhyChooseUs />
			<SimpleSlider />
			<h2 className={styles.discoverHeading}>Discover Categories</h2>
			<p className={styles.aboutText}>
				Select the category that you want to teach or learn below:
			</p>
			<SkillGallery />
		</>
	);
}
