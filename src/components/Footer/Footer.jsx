import Instagram from "@/icons/Instagram";
import styles from "./footer.module.css";
import Facebook from "@/icons/Facebook";
import Twitter from "@/icons/Twitter";
import Linkedin from "@/icons/Linkedin";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="">
      <div className={`${styles.flexFooter} container`}>
        <p>© Todos los derechos Reservados - 2024</p>
        <p className={`${styles.email} gray`}>mariaUser@gmail.com</p>
        <div className={styles.flexIcons}>
          <Link href="https://www.linkedin.com/in/fedecodelab/">
            <Twitter width={"20px"} height={"20px"} />
          </Link>

          <Link href="https://www.linkedin.com/in/fedecodelab/">
            <Facebook width={"20px"} height={"20px"} />
          </Link>

          <Link href="https://www.linkedin.com/in/fedecodelab/">
            <Instagram width={"20px"} height={"20px"} />
          </Link>

          <Link href="https://www.linkedin.com/in/fedecodelab/">
            <Linkedin width={"20px"} height={"20px"} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
