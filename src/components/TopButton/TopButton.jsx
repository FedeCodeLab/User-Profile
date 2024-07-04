"use client";

import { animateScroll as scroll } from "react-scroll";

import styles from "./topButton.module.css";

export default function TopButton() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div onClick={scrollToTop} className={styles.topButton}>
      <span className="material-symbols-outlined">keyboard_arrow_up</span>
    </div>
  );
}
