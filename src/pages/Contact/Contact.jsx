//styles
import styles from './styles.module.css'

//react-icons
import { FaTelegram, FaWhatsapp } from "react-icons/fa"
import { CgMail } from "react-icons/cg"

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.contact_title}>Contact me</h1>
      <div className={styles.contact_items}>
        <div className={styles.contact_item}>
          <FaTelegram className={styles.contact_item_icon} />
          <span className={styles.contact_item_title}>Telegtam:</span>
          <a
            href="https://t.me/aaidarov_TripleA"
            className={styles.contact_item_link}
          >
            @aaidarov
          </a>
        </div>

        <div className={styles.contact_item}>
          <FaWhatsapp className={styles.contact_item_icon} />
          <span className={styles.contact_item_title}>Whatsapp:</span>
          <a href="tel:+996556400977" className={styles.contact_item_link}>
            +996 (556) 400-977
          </a>
        </div>

        <div className={styles.contact_item}>
          <CgMail className={styles.contact_item_icon} />
          <span className={styles.contact_item_title}>Gmail:</span>
          <a
            href="mailto:aaidarov.triple@gmail.com"
            className={styles.contact_item_link}
          >
            aaidarov
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact
