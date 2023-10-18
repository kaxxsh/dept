"use client";
import styles from "@/styles/result.module.scss";
import stylesfoot from "@/styles/footer.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BASE_URL } from "@/config";

export default function Name() {
  const [data, setdata] = useState({});
  const params = useParams();
  var url = params.workshop;
  let title;
  if (url === "devsecope") {
    title = "DEVSECOPS";
  } else if (url === "erc") {
    title = "ERC-TOKEN BLOCKCHAIN";
  } else if (url === "salesforce") {
    title = "SALESFORCE";
  } else if (url === "cybersecurity") {
    title = "CYBERSECURITY";
  } else if (url === "cloud") {
    title = "Cloud CI/CD Pipeline";
  } else if (url === "advance") {
    title = "Advanced AI Analytics in Healthcare";
  } else if (url === "llms") {
    title = "Cloud CI/CD Pipeline";
  }

  const Fetch = async () => {
    await fetch(BASE_URL + "/api/event/id=1/" + url, {
      cache: "no-store",
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((item) => setdata(item));
  };

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.instructor}>
          <div className={styles.photo}>
            <Image
              src={data.photo}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div className={styles.details}>
            <div className={styles.designation}>
              Designation : {data.inposition}
            </div>
            <div className={styles.name}>Name : {data.inname}</div>
            <div className={styles.Description}>
              Description : {data.indescription}
            </div>
            <div className={styles.Description}>
              Experience : {data.inexeperience}
            </div>
          </div>
        </div>
        <div className={styles.agenta}>
          <div className={styles.title}>AGENTA</div>
          <div className={styles.content}>
            <div className={styles.card}>
              {data?.course
                ? JSON.parse(data.course).map((item, index) => (
                    <div key={index} className="">
                      {`=> ${item}`}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className={styles.requirement}>
          <div className={styles.title}>REQUIREMENTS</div>
          <div className={styles.content}>
            <div className={styles.card}>
              {data?.requirements
                ? JSON.parse(data.requirements).map((item, index) => (
                    <div key={index} className="">
                      {`=> ${item}`}
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <Image
            src={data.banner}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className={stylesfoot.footer}>
        <div className={stylesfoot.contact}>
          <div className={stylesfoot.head}>
            <div className={stylesfoot.title}>LOCATION</div>
            <div className={stylesfoot.location}>{data.location}</div>
            <div className={stylesfoot.title}>CO-ORDINATORS</div>
            <div className={stylesfoot.subtitle}>
              MS.G.ABINAYA ( 95002 06093 )
            </div>
          </div>
        </div>
        <div className={stylesfoot.other}>
          <div className={stylesfoot.subhead}>
            <div className={stylesfoot.title}>EVENT CO-ORDINATORS</div>
            <div className={stylesfoot.subtitle}>{data.facoordinator}</div>
            <div className={stylesfoot.title}>STUDENT CO-ORDINATORS</div>
            <div className={stylesfoot.subtitle}>{data.stcoordinator1}</div>
            <div className={stylesfoot.subtitle}>{data.stcoordinator2}</div>
          </div>
        </div>
        <div className={stylesfoot.location}>
          <div className={stylesfoot.contact}>
            <div className={stylesfoot.title}>CONTACT</div>
            <div className="">EMAIL : sec.drestein.it@gmail.com</div>
            <div className={stylesfoot.title}>SOCIAL MEDIA</div>
            <div className="">
              <a href="https://www.instagram.com/it_drestein23/?igshid=YTQwZjQ0NmI0OA%3D%3D">
                <Image
                  src="/insta.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
