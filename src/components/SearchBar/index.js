//SearchBar
import styles from "./searchbar.module.css"


const Searchbar = ({ text }) => {
    return ( <div className = {styles.container}>
        <input className = {styles.searchInput} placeholder="Search here"/> 
        <img className = {styles.magnifyingGlass} src="/media/icons/searchIconWHITE.png" alt="Search"/>
    </div> );
}
 
export default Searchbar;

/* 
import and exports
Create a search bar component 
    search input 

question about a additional button
import previous button component

*/