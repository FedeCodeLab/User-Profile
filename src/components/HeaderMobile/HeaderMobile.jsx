"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import styles from "./headerMobile.module.css";

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.headerMobile}>
      <div className={styles.center}>
        <h4>Contacto</h4>
        <span
          className="material-symbols-outlined pointer"
          onClick={toggleMenu}
        >
          menu
        </span>
      </div>
      {menuOpen && (
        <div className={styles.menu}>
          <ul>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              <li>Acerca de mí</li>
            </Link>
            <Link
              activeClass="active"
              to="interests"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              <li>Intereses</li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              <li>Contacto</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}
