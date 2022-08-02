//SearchBar
import styles from "./searchBar.module.css";
import { useState } from "react";

const Searchbar = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    console.log(text);
  };

  const handleClick = () => {
    const learn = document.querySelector(`input[name="learn"]:checked`)
    const teach = document.querySelector(`input[name="teach"]:checked`)
    console.log(teach)
    console.log(learn)

    console.log("submitted", text); /* include search logic (get request etc)*/
    setText("");
  };

  return (
    <div className={styles.container}>
      <label for="Teach">Teach
      <input type="radio" name="teach" value="teach"/></label>
      <label for="Learn">Learn
      <input type="radio" name="learn" value="learn"/></label>
      <input
        value={text}
        onChange={handleChange}
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
