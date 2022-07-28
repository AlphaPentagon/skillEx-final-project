//Header

const Header = ({ text, colour }) => {
    return ( <div className={styles[colour]}><h1>{text}</h1></div> );
}
 
export default Header;


/* 
create header.module.css 
import and export 
create a component (possible h1) to store text
taking in same terraCotta colour


*/