import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../src/components/Navigation";
import Header from "../src/components/Header";
import SearchBar from "../src/components/SearchBar";
import Testimonials from "../src/components/Testimonials";
import WhyChooseUs from "../src/components/WhyChooseUs";
import AboutUs from "../src/components/AboutUs";
import Footer from "../src/components/Footer";
import SkillGallery from "../src/components/SkillGallery";
export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>SkillEx</title>
				<meta
					name="SkillEx - The knowhow exchange where people swap skills."
					content="SkillEx "
				/>
				<link rel="icon" href="/LightBulbFAVICON.ico" />
			</Head>
			<Navigation />
			<Header />
			<SearchBar />
			<AboutUs />
			<WhyChooseUs />
			<Testimonials />
			<SkillGallery />
			<Footer />
		</div>
	);
}
