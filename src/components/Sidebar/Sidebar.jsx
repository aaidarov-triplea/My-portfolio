//styles
import styles from "./styles.module.css";
//files
import AVATAR from "../../assets/avatar.png";
import Navbar from "../Navbar/Navbar";

const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.blue_bg_outer}>
        <Navbar />
        <div className={styles.blue_bg}>
          <img src={AVATAR} alt="avatar" className={styles.avatar} />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
