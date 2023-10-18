import styles from "../styles/footer.module.css";
export default function footer() {
  return (
    <section>
      <div className={styles.footer} id="contact">
        <div className={styles.contact}>
          <div className={styles.head}>
            <div className={styles.title}>LOCATION</div>
            <div className={styles.location}>
              Saveetha Engineering College, Saveetha Nagar, Thandalam,
              Chennai-602 105, TamilNadu, India.
            </div>
            <div className={styles.title}>CO-ORDINATORS</div>
            <div className={styles.subtitle}>Dr.K.SURESH KUMAR</div>
            <div className={styles.subtitle}>DR.N.RAJA RAJESHWARI </div>
          </div>
        </div>
        <div className={styles.other}>
          <div className={styles.subhead}>
            <div className={styles.title}>DEPARTMENT CO-ORDINATORS</div>
            <div className={styles.subtitle}>MS.G.ABINAYA ( 95002 06093 )</div>
            <div className={styles.title}>STUDENT CO-ORDINATORS</div>
            <div className={styles.subtitle}>M.VASUDEVAN ( 93458 35209 )</div>
            <div className={styles.subtitle}>M.RAGHUL ( 90252 73351 )</div>
          </div>
        </div>
        <div className={styles.location}>
          <div className={styles.contact}>
            <div className={styles.title}>CONTACT</div>
            <div className="">EMAIL : cse.drestein.it@gmail.com</div>
            <div className={styles.title}>SOCIAL MEDIA</div>
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
