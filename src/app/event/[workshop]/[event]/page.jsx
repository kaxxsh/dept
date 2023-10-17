"use client";
import styles from "@/styles/result.module.scss";
import stylesfoot from "@/styles/footer.module.css";
import { useParams } from "next/navigation";
export default function Name() {
  const params = useParams();
  var url = params.event;
  var decodedString = decodeURIComponent(url)
    .split("   ")
    .join("")
    .toUpperCase();
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>{decodedString}</div>
        <div className={styles.event}>
          <div className={styles.des}>
            <div className={styles.title}>DESCREPTION</div>
            <div className={styles.content}>
              A short description, also known as a brief description, is a
              concise and condensed statement that provides essential
              information about a subject while keeping the content relatively
              brief. <br /> It's often used in various contexts where brevity is
              essential, such as in advertisements, product listings, social
              media posts, or summaries. <br /> Short descriptions aim to convey
              the key points quickly and effectively without unnecessary detail,
              making them easy to understand at a glance.
            </div>
          </div>
          <div className={styles.round}>
            <div className={styles.title}>Wild Wings</div>
            <div className={styles.rules}>RULES</div>
            <div className={styles.content}>
              Participants must solve a series of mind-bending puzzles within a
              time limit. <br /> Correct answers earn points; incorrect answers
              deduct points. <br /> The player with the highest score at the end
              of the round advances to the next stage.
            </div>
          </div>
          <div className={styles.round}>
            <div className={styles.title}>Demotiff</div>
            <div className={styles.rules}>RULES</div>
            <div className={styles.content}>
              The remaining players face off in a one-on-one showdown.
              <br /> The first to complete a challenging task wins the
              competition. <br /> The ultimate winner claims the title and a
              grand prize.
            </div>
          </div>
          <div className={styles.round}>
            <div className={styles.title}>Dracarys The Ruler</div>
            <div className={styles.rules}>RULES</div>
            <div className={styles.content}>
              The remaining players face off in a one-on-one showdown. <br />{" "}
              The first to complete a challenging task wins the competition.{" "}
              <br /> The ultimate winner claims the title and a grand prize.
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <img src="/demobanner.jpg" alt="" />
        </div>
      </div>
      <div className={stylesfoot.footer}>
        <div className={stylesfoot.contact}>
          <div className={stylesfoot.head}>
            <div className={stylesfoot.title}>LOCATION</div>
            <div className={stylesfoot.location}>
              XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXX
            </div>
            <div className={stylesfoot.title}>CO-ORDINATORS</div>
            <div className={stylesfoot.subtitle}>
              MS.G.ABINAYA ( 95002 06093 )
            </div>
          </div>
        </div>
        <div className={stylesfoot.other}>
          <div className={stylesfoot.subhead}>
            <div className={stylesfoot.title}>EVENT CO-ORDINATORS</div>
            <div className={stylesfoot.subtitle}>
              XXXXXXXXXXXX ( 00000 00000 )
            </div>
            <div className={stylesfoot.title}>STUDENT CO-ORDINATORS</div>
            <div className={stylesfoot.subtitle}>
              XXXXXXXXXXXX ( 00000 00000 )
            </div>
            <div className={stylesfoot.subtitle}>
              XXXXXXXXXXXX ( 00000 00000 )
            </div>
          </div>
        </div>
        <div className={stylesfoot.location}>
          <div className={stylesfoot.contact}>
            <div className={stylesfoot.title}>CONTACT</div>
            <div className="">EMAIL : drestein.it@gmail.com</div>
            <div className={stylesfoot.title}>SOCIAL MEDIA</div>
            <div className="">
              <a href="https://www.instagram.com/it_drestein23/?igshid=YTQwZjQ0NmI0OA%3D%3D">
                <img src="/insta.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
