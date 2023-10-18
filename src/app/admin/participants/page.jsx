import { BASE_URL } from "@/config";
import styles from "@/styles/admin.module.scss";
import Link from "next/link";

const Participants = ({ data, error }) => {
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.products}>
      <div
        className={styles.top}
        style={{
          justifyContent: "space-between",
        }}
      >
        Participant
        <Link className={styles.add} href="/admin/participants/add">
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
            {data.map((item) => (
              <tr key={item._id} style={{ width: "100%" }}>
                <td>
                  <img
                    src="/profile.png"
                    alt="profile image"
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await fetch(BASE_URL + "/api/registration", {
      cache: "no-store",
      credentials: "include",
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return {
      props: {
        data,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: error,
      },
    };
  }
}

export default Participants;
