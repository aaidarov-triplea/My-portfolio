import { saveAs } from "file-saver";
//file
import CV from "../../assets/cv.pdf";
//styles
import styles from "./styles.module.css";

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";

const Home = () => {
  const handleDownloadClick = () => {
    saveAs(CV, "Aidarov_CV.pdf");
  };

  return (
    <section className={styles.content}>
      <div className={styles.main}>
        <div className={styles.info}>
          <h1 className={styles.info_title}>Hi, I{"'"}m Akzhol</h1>
          <div className={styles.animate_text}>
            <h1>Frontend Developer.</h1>
          </div>
          <div className={styles.socials}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aaidarov-triplea"
              className={styles.socials_link}
            >
              <IoLogoGithub className={styles.socials_icon} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/akjol.aydarov/"
              className={styles.socials_link}
            >
              <IoLogoFacebook className={styles.socials_icon} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/akzhol_55"
              className={styles.socials_link}
            >
              <IoLogoInstagram className={styles.socials_icon} />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/akzhol-aidarov-19098910a/"
              className={styles.socials_link}
            >
              <IoLogoLinkedin className={styles.socials_icon} />
            </a>
          </div>
          <button
            className={styles.cv_btn}
            type="button"
            onClick={handleDownloadClick}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
