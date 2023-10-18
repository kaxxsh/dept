import styles from "@/styles/event.module.css";
import "aos/dist/aos.css";
import Link from "next/link";

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
              <Link href="/workshop/devsecope">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/devsecope.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/workshop/erc">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/erc.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/workshop/salesforce">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/salesforce.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/workshop/cybersecurity">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/cybersecurity.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/workshop/cloud">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/cloud.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/workshop/advance">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/advance.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/workshop/llms">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/llms.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
          </div>
          <div className={styles.games}>
            <div data-aos="fade-down-left">
              <div className={styles.title}>EVENTS</div>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/event/promptcraft">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/prompt.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/event/riddlesql">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/riddlesql.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/event/drone">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/drone.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
            </div>
            <div data-aos="fade-down-left">
              <Link href="/event/embrace">
                <div
                  className={styles.card}
                  style={{
                    background: 'url("/event/embrace.svg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
              </Link>
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
            <div
              className={styles.card}
              style={{
                background: 'url("/event/result.svg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </a>
        </div>
      </div>
    </section>
  );
}
