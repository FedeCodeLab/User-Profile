"use client";

import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <div className={`${styles.flexHeader} container`}>
        <h4>Contacto</h4>
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Acerca de mí
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="interests"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Intereses
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contáctame
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
