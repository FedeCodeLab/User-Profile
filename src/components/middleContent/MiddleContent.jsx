import About from "../About/About";
import Interests from "../Interests/Interests";
import styles from "./middleContent.module.css";

export default function MiddleContent() {
  return (
    <section className="container" id="about">
      <div className={styles.grid}>
        <About />
        <Interests />
      </div>
    </section>
  );
}
