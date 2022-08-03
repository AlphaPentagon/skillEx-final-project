import Header from "../src/components/Header";
import ProfileGallery from "../src/components/ProfileGallery";
import Searchbar from "../src/components/SearchBar";

const Discover = () => {
  return (
    <>
      <Header text="Discover" />
      <Searchbar/>
      <ProfileGallery />
    </>
  );
};

export default Discover;
