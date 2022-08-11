//SearchBar
import styles from "./searchBar.module.css";
import { useState } from "react";

const Searchbar = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    const learn = document.querySelector(`input[value="learn"]:checked`)
      ? true
      : false;
    const teach = document.querySelector(`input[value="teach"]:checked`)
      ? true
      : false;
    /* include search logic (get request etc)*/
    setText("");
  };

  return (
    <div className={styles.container}>
      <label for="Teach">
        Teach
        <input
          className={styles.radio}
          type="radio"
          name="switch"
          value="teach"
        />
      </label>

      <label for="Learn">
        Learn
        <input
          className={styles.radio}
          type="radio"
          name="switch"
          value="learn"
        />
      </label>

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
