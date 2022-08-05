import { useRouter } from "next/router";
import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
import Searchbar from "../../src/components/SearchBar";
import SkillGallery from "../../src/components/SkillGallery/index";
import styles from "./discover.module.css";
const Discover = () => {
	const router = useRouter();
	const { category } = router.query;

	return (
		<>
			<Header text={category} />
			<ProfileGallery />
			<Searchbar />
			<SkillGallery />
		</>
	);
};

export default Discover;
