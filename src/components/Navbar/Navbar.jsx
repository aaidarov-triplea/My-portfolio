import { NavLink } from "react-router-dom"
//styles
import styles from "./styles.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logo_title}>
            aaidarov
          </NavLink>
        </div>
        <div>
          <ul className={styles.list}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar
