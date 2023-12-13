//styles
import styles from "./styles.module.css"

//icons
import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa"
import { TbBrandJavascript } from "react-icons/tb"
import { SiRedux } from "react-icons/si"

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1 className={styles.skills_title}>My skills</h1>
      <div className={styles.skills_items}>
        <div className={styles.skills_item}>
          <div className={styles.skills_item_img}>
            <FaHtml5 className={styles.item_img_icon} />
          </div>
          <div className={styles.skills_item_body}>
            <h1>HTML</h1>
            <span>Hight</span>
          </div>
        </div>

        <div className={styles.skills_item}>
          <div className={styles.skills_item_img}>
            <FaCss3 className={styles.item_img_icon} />
          </div>
          <div className={styles.skills_item_body}>
            <h1>CSS</h1>
            <span>Hight</span>
          </div>
        </div>
      </div>

      <div className={styles.skills_items}>
        <div className={styles.skills_item}>
          <div className={styles.skills_item_img}>
            <TbBrandJavascript className={styles.item_img_icon} />
          </div>
          <div className={styles.skills_item_body}>
            <h1>JavaScript</h1>
            <span>middle</span>
          </div>
        </div>

        <div className={styles.skills_item}>
          <div className={styles.skills_item_img}>
            <FaReact className={styles.item_img_icon} />
          </div>
          <div className={styles.skills_item_body}>
            <h1>React JS</h1>
            <span>middle</span>
          </div>
        </div>
      </div>

      <div className={styles.skills_items}>
        <div className={styles.skills_item}>
          <div className={styles.skills_item_img}>
            <FaFigma className={styles.item_img_icon} />
          </div>
          <div className={styles.skills_item_body}>
            <h1>Figma</h1>
            <span>middle</span>
          </div>
        </div>

        <div className={styles.skills_item}>
          <div className={styles.skills_item_img}>
            <SiRedux className={styles.item_img_icon} />
          </div>
          <div className={styles.skills_item_body}>
            <h1>Redux</h1>
            <span>law</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills
