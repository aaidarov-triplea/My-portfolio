import { NavLink } from "react-router-dom";
import { useState } from "react";
//styles
import styles from "./styles.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logo_title}>
            aaidarov
          </NavLink>
        </div>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span className={isOpen ? styles.closeIcon : styles.openIcon}>
            <svg
              width="35px"
              height="35px"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                fill="#fff"
              />
              <path
                d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                fill="#fff"
              />
              <path
                d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                fill="#fff"
              />
            </svg>
          </span>
        </div>
        <ul className={`${styles.list} ${isOpen ? styles.active : ""}`}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={toggleMenu}>
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={toggleMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
