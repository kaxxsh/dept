"use client";
import styles from "@/styles/result.module.scss";
import stylesfoot from "@/styles/footer.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE_URL } from "@/config";

export default function Name() {
  const params = useParams();
  const [data, setdata] = useState({});
  var url = params.event;
  let title;
  if (url === "promptcraft") {
    title = "PROMPTCRAFT";
  } else if (url === "riddlesql") {
    title = "RIDDLESQL";
  } else if (url === "drone") {
    title = "DRONE THE DRACARYS";
  } else if (url === "embrace") {
    title = "EMBRACE THE UNKNOWN";
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
      {console.log(data)}
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.event}>
          <div className={styles.des}>
            <div className={styles.title}>DESCREPTION</div>
            <div className={styles.content}>{data.description}</div>
          </div>
          <div className={styles.round}>
            <div className={styles.title}>{data.round1}</div>
            <div className={styles.rules}>Rule</div>
            <div className={styles.content}>
              {data?.rule1
                ? JSON.parse(data.rule1).map((item, index) => (
                    <div key={index} className="">
                      {`=> ${item}`}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className={styles.round}>
            <div className={styles.title}>{data.round2}</div>
            <div className={styles.rules}>RULES</div>
            <div className={styles.content}>
              {data.rule2
                ? JSON.parse(data.rule2).map((item, index) => (
                    <div key={index} className="">
                      {`=> ${item}`}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className={styles.round}>
            <div className={styles.title}>{data.round3}</div>
            <div className={styles.rules}>RULES</div>
            <div className={styles.content}>
              <div className={styles.content}>
                {data.rule3
                  ? JSON.parse(data.rule3).map((item, index) => (
                      <div key={index} className="">
                        {`=> ${item}`}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.banner}>
          <img src={data.banner} alt="" />
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
                <img src="/insta.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
