import styles from "@/styles/home.module.scss";

export default function Main() {
  return (
    <section>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.text_top}>
            <div>
              <span>DEPARTMENT</span>
              <span>Information Technology</span>
            </div>
          </div>
          <div className={styles.text_bottom}>
            <div>
              <span>DR</span>
              <span>ES</span>
              <span>TE</span>
              <span>IN'23</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img src="/main.svg" alt="" />
        </div>
      </div>
      <div className={styles.registration}>
        <a href="/register">
          <div className={styles.btn}>REGISTER</div>
        </a>
      </div>
    </section>
  );
}
