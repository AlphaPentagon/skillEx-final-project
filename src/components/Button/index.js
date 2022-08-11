import styles from "./button.module.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button className={`${styles[type]} ${styles.default}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

//Button
// create a button.module.css file ✅
// import the css module into the js file ✅

// create a react component ✅
// props: text ? type (bg colour) ? ✅
// button element ✅
// export the component ✅

// css
// a class for each bgcolour e.g. blue-button, brown-button ✅
/*
 */
