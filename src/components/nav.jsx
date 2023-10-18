import styles from "@/styles/nav.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/#">
        <Image
            src="/logo.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className={styles.menu}>
        <Link href="/#">
          <div className={styles.title}>HOME</div>
        </Link>
        <Link href="/#event">
          <div className={styles.title}>EVENT</div>
        </Link>
        <Link href="/#result">
          <div className={styles.title}>RESULT</div>
        </Link>
        <Link href="/#contact">
          <div className={styles.title}>CONTACT</div>
        </Link>
      </div>
    </div>
  );
}
