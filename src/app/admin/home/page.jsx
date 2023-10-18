import { BASE_URL } from "@/config";
import styles from "@/styles/admin.module.scss";
import Link from "next/link";

const page = async () => {
  const { data } = await fetch(BASE_URL + "/api/event", {
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
        HOME
        <Link className={styles.add} href="/admin/home/add">
          ADD EVENT
        </Link>
      </div>
      <div className={styles.content}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>EVENTS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item._id} style={{ width: "100%" }}>
                  <td>
                    <img
                      src={item.banner[0]}
                      alt="prooduct image"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.title.toUpperCase()}</td>
                  <td>
                    <Link href={`/admin/home/add?id=${item._id}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17"
                          stroke="black"
                        />
                        <path
                          d="M16 5L19 8M20.385 6.585C20.7788 6.19115 21.0001 5.65698 21.0001 5.1C21.0001 4.54302 20.7788 4.00885 20.385 3.615C19.9912 3.22115 19.457 2.99989 18.9 2.99989C18.343 2.99989 17.8088 3.22115 17.415 3.615L9 12V15H12L20.385 6.585Z"
                          stroke="black"
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
