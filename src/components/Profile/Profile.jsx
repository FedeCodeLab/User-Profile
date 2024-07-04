import Call from "@/icons/Call";
import styles from "./profile.module.css";
import Letter from "@/icons/Letter";
import Image from "next/image";
import Instagram from "@/icons/Instagram";
import Facebook from "@/icons/Facebook";
import Twitter from "@/icons/Twitter";
import Linkedin from "@/icons/Linkedin";
import Link from "next/link";

export default function Profile() {
  return (
    <section className={`${styles.gridProfile} container`}>
      <div className={styles.flexStyle}>
        <h3 className={styles.job}>Productora Creativa</h3>
        <h1 className={styles.name}>María Paula Molina</h1>
        <div className={styles.flex}>
          <Letter color={"#C3C6CA"} width={"25px"} height={"25px"} />
          <p className="gray">mariauser@gmail.com</p>
        </div>
        <div className={styles.flex}>
          <Call color={"#C3C6CA"} width={"25px"} height={"25px"} />
          <p className="gray">+54 09 12345678</p>
        </div>
        <div className={styles.flexIcons}>
          <Link
            href="https://www.linkedin.com/in/fedecodelab/"
            className={styles.icon}
          >
            <Twitter width={"15px"} height={"15px"} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fedecodelab/"
            className={styles.icon}
          >
            <Facebook width={"15px"} height={"15px"} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fedecodelab/"
            className={styles.icon}
          >
            <Instagram width={"15px"} height={"15px"} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fedecodelab/"
            className={styles.icon}
          >
            <Linkedin width={"15px"} height={"15px"} />
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <Image
          src="/perfil.jpg"
          alt="Foto de perfil"
          width={250}
          height={250}
          className={styles.image}
        />
      </div>
    </section>
  );
}
