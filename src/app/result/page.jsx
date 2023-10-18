import styles from "@/styles/result.module.scss";

export default function Result() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>RESULT</div>
        <div className={styles.box}>
          <div className={styles.title}>EVENTS</div>
          <div className={styles.list}>
            <a
              href="/result/promptcraft"
              style={{
                background: 'url("/logo/prompt.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={styles.card}></div>
            </a>

            <a
              href="/result/riddlesql"
              style={{
                background: 'url("/logo/redsql.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.card}></div>
            </a>
            <a
              href="/result/drone"
              style={{
                background: 'url("/logo/drone.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.card}></div>
            </a>
            <a
              href="/result/embrace"
              style={{
                background: 'url("/logo/embrace.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.card}></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
