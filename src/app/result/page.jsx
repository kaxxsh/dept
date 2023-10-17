import styles from "@/styles/result.module.scss";
export default function Result() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>RESULT</div>
        <div className={styles.box}>
          <div className={styles.title}>EVENTS</div>
          <div className={styles.list}>
            <a href="/result/Drone The Dracarys">
              <div className={styles.card}></div>
            </a>
            <a href="/result/event2">
              <div className={styles.card}></div>
            </a>
            <a href="/result/event3">
              <div className={styles.card}></div>
            </a>
            <a href="/result/event4">
              <div className={styles.card}></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
