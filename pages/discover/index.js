
import Header from "../../src/components/Header";
import ProfileGallery from "../../src/components/ProfileGallery";
import Searchbar from "../../src/components/SearchBar";
import SkillGallery from "../../src/components/SkillGallery/index";
import styles from "./discover.module.css";
const Discover = () => {
	return (
		<>
			<Header text="Discover" />
			<ProfileGallery />
			<Searchbar />
			<SkillGallery />
		</>
	);
};

export default Discover;
