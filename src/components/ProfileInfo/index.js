import styles from "./profileInfo.module.css";
import Button from "../Button/index";

const ProfileInfo = () => {
  return (
    <section>
      <div>
        <h3>Description:</h3>
        <p></p>
      </div>
      <div>
        <h3>Teach:</h3>
        <ul>
          <li></li>
        </ul>
      </div>
      <div>
        <h3>Learn:</h3>
        <ul>
          <li></li>
        </ul>
      </div>
      <div>
        <h3>Write a message:</h3>
        <form>
          <input></input>
          <Button color="blue" text="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ProfileInfo;

//ProfileInfo
// creat profile css
// import module
// create profile info component
