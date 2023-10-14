import styles from "@/styles/nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/#">
          <img src="/logo.svg" alt="not found" />
        </a>
      </div>
      <div className={styles.menu}>
        <a href="/#">
          <div className={styles.title}>HOME</div>
        </a>
        <a href="/#event">
          <div className={styles.title}>EVENT</div>
        </a>
        <a href="/#result">
          <div className={styles.title}>RESULT</div>
        </a>
        <a href="/#contact">
          <div className={styles.title}>CONTACT</div>
        </a>
      </div>
    </div>
  );
}
