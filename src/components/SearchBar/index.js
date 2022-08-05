//SearchBar
import styles from "./searchBar.module.css";
import { useState } from "react";
import profiles from "../../libs/profiles";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [teach, setTeach] = useState(true);

  
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    setTeach("radio button", true);
    console.log(teach);
    console.log("Search val", searchValue);
    
    const filteredData = profiles.filter((profile) => {
      return (Object.values(profile.teach_skills) )
        .join("")
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setFilteredResults(filteredData);
  
    console.log("filteredData", filteredData);
  };

  // const handleChange = (event) => {
  //   setText(event.target.value);
  //   console.log(text);
  // };

  const handleClick = () => {
    const learn = document.querySelector(`input[value="learn"]:checked`)
      ? true
      : false;
    const teach = document.querySelector(`input[value="teach"]:checked`)
      ? true
      : false;

    console.log("teach radio: ", teach);
    console.log("learn radio: ", learn);

    // console.log("submitted:", text); /* include search logic (get request etc)*/
    // setText("");
  };

  return (
    <div className={styles.container}>
      <label for="Teach">
        Teach
        <input
          type="radio"
          name="switch"
          id="teach"
          value={teach}
          onClick={(e) => setTeach("hello")}
        />
      </label>

      <label for="Learn">
        Learn
        <input type="radio" name="switch" value="" />
      </label>

      <input
        value={searchInput}
        onChange={(e) => searchItems(e.target.value)}
        className={styles.searchInput}
        placeholder="Search here"
      />
      <img
        onClick={handleClick}
        className={styles.magnifyingGlass}
        src="/media/icons/searchIconWHITE.png"
        alt="Search"
      />
    </div>
  );
};

export default Searchbar;

/* 
import and exports
Create a search bar component 
    search input 

question about a additional button
import previous button component

*/
