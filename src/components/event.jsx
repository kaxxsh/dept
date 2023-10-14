import styles from "@/styles/event.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Event() {
  AOS.init();
  return (
    <section>
      <div className={styles.event} id="event">
        <div className={styles.list}>
          <div className={styles.workshop}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-offset="50"
            >
              <div className={styles.title}>WORKSHOPS</div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-offset="50"
            >
              <div className={styles.card}></div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-offset="50"
            >
              <div className={styles.card}></div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-offset="50"
            >
              <div className={styles.card}></div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-offset="50"
            >
              <div className={styles.card}></div>
            </div>
          </div>
          <div className={styles.games}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
              data-aos-offset="50"
            >
              <div className={styles.title}>EVENTS</div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
              <div className={styles.card}></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
              <div className={styles.card}></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
              <div className={styles.card}></div>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="center-center">
              <div className={styles.card}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.result} id="result">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className={styles.title}>RESULT</div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-center">
          <div className={styles.card}></div>
        </div>
      </div>
    </section>
  );
}
