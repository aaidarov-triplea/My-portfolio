//styles
import styles from "./styles.module.css";
//file
import IMG from "../../assets/12.jpg";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_imagebox}>
        <img src={IMG} alt="image" />
      </div>
      <div className={styles.about_info}>
        <h1 className={styles.about_info_title}>About me</h1>
        <p className={styles.about_info_text}>
          Hi! I am a beginner Frontend developer, my name is{" "}
          <strong>Akzhol</strong>. I completed web development courses at{" "}
          <strong>Codify Lab</strong> and am passionate about creating
          interfaces for web applications. My main skills include{" "}
          <strong>HTML, CSS, JavaScript и React</strong>. Looking for work
          experience and the opportunity to delve deeper into development using
          frameworks such as React. I strive for continuous self-development.
          Ready for cooperation and open to new projects!
        </p>
      </div>
    </div>
  );
};

export default About;
