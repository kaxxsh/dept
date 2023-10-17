import { BASE_URL } from "@/config";
import styles from "@/styles/admin.module.scss";
import Link from "next/link";

const Participants = async () => {
  const { data } = await fetch(BASE_URL + "/api/registration", {
    cache: "no-store",
    credentials: "include",
    method: "GET",
  }).then((res) => res.json());
  return (
    <div className={styles.products}>
      <div
        className={styles.top}
        style={{
          justifyContent: "space-between",
        }}
      >
        Participant
        <Link className={styles.add} href="/admin/home/add">
          ADD Participant
        </Link>
      </div>
      <div className={styles.content}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id} style={{ width: "100%" }}>
                  <td>
                    <img
                      src="/profile.png"
                      alt="prooduct image"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.team}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Participants;
