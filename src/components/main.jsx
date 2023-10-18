import styles from "@/styles/home.module.scss";
import Link from "next/link";
import Image from "next/image";

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
          <Image
            src="/main.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className={styles.registration}>
        <Link href="/register">
          <div className={styles.btn}>REGISTER</div>
        </Link>
      </div>
    </section>
  );
}
