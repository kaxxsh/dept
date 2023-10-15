import styles from "@/styles/event.module.css";
import "aos/dist/aos.css";

export default function Event() {
  return (
    <section>
      <div className={styles.event} id="event">
        <div className={styles.list}>
          <div className={styles.workshop}>
            <div data-aos="fade-down-left">
              <div className={styles.title}>WORKSHOPS</div>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/workshop1">
                <div className={styles.card}></div>
              </a>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/workshop2">
                <div className={styles.card}></div>
              </a>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/workshop3">
                <div className={styles.card}></div>
              </a>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/workshop4">
                <div className={styles.card}></div>
              </a>
            </div>
          </div>
          <div className={styles.games}>
            <div data-aos="fade-down-left">
              <div className={styles.title}>EVENTS</div>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/list/event1">
                <div className={styles.card}></div>
              </a>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/list/event2">
                <div className={styles.card}></div>
              </a>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/list/event3">
                <div className={styles.card}></div>
              </a>
            </div>
            <div data-aos="fade-down-left">
              <a href="/event/list/event4">
                <div className={styles.card}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.result} id="result">
        <div data-aos="flip-left">
          <div className={styles.title}>RESULT</div>
        </div>

        <div data-aos="fade-down-left">
          <a href="/result">
            <div className={styles.card}></div>
          </a>
        </div>
      </div>
    </section>
  );
}
