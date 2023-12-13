//styles
import styles from "./styles.module.css"
//files
import AVATAR from "../../assets/avatar.png"


const Sidebar = () => {
  return (
    <section className={styles.sidebar}>
      <div className={styles.blue_bg_outer}>
        <div className={styles.white_bg}>
          <div className={styles.blue_bg}>
            <img src={AVATAR} alt="avatar" className={styles.avatar} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar
