"use client";
import styles from "@/styles/result.module.css";
import stylesfoot from "@/styles/footer.module.css";
import { useParams } from "next/navigation";
export default function Name() {
  const params = useParams();
  var url = params.workshop;
  var decodedString = decodeURIComponent(url)
    .split("   ")
    .join("")
    .toUpperCase();
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>{decodedString}</div>
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
            <div className="">PHONE : 0000000000</div>
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
