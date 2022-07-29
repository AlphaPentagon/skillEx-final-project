import Image from "next/image";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-title">About Us</h2>
      <img
        src="/media/images/skilswapping.png"
        alt="diagram showing how skillswapping works"
        className="about-us-image"
      />
      <p className="about-us-text">
        SkillEx is the place where exchanging skills and talents becomes easy.
        Swap your skills, find what you are looking for It’s all free, you just
        “pay” with your time.
      </p>
    </div>
  );
};

export default AboutUs;
