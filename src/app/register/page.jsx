"use client";
import styles from "@/styles/register.module.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { BASE_URL } from "@/config";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

export default function Register() {
  const [Details, setDetails] = useState({
    Event: "",
    Team: "",
    Name: "",
    Email: "",
    Phone: "",
    College: "",
  });
  const router = useRouter();
  const handleUpload = async (e) => {
    e.preventDefault();
    if (
      !Details.Event ||
      !Details.Team ||
      !Details.Name ||
      !Details.Email ||
      Details.Phone.length !== 10 ||
      !Details.College
    ) {
      toast.error("Event has not been created");
    }
    const response = await fetch(BASE_URL + "/api/registration", {
      cache: "no-store",
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        Event: Details.Event,
        Team: Details.Team,
        Name: Details.Name,
        Email: Details.Email,
        Phone: Details.Phone,
        College: Details.College,
      }),
    });
    const data = await response.json();
    if (response.status > 399 && response.status < 499) {
      toast.error(data?.message, { autoClose: 3000 });
    } else {
      toast.success(data?.message, { autoClose: 1000 });
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.title}>REGISTRATION</div>
        <form onSubmit={handleUpload}>
          <div className={styles.details}>
            <div className={styles.content}>
              <label htmlFor="menu">EVENT:</label>
              <select
                id="menu"
                name="menu"
                onChange={(e) =>
                  setDetails((prevDetails) => ({
                    ...prevDetails,
                    Event: e.target.value,
                  }))
                }
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div className={styles.content}>
              <label htmlFor="teamName">TEAM NAME :</label>
              <input
                type="text"
                id="teamName"
                placeholder="Enter your team name"
                onChange={(e) =>
                  setDetails({ ...Details, Team: e.target.value })
                }
              />
            </div>
            <div className={styles.content}>
              <label htmlFor="name">NAME :</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={(e) =>
                  setDetails({ ...Details, Name: e.target.value })
                }
              />
            </div>
            <div className={styles.content}>
              <label htmlFor="email">EMAIL :</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  setDetails({ ...Details, Email: e.target.value })
                }
              />
            </div>
            <div className={styles.content}>
              <label htmlFor="phoneNumber">PHONE NUMBER :</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter your phone number"
                minLength={10}
                maxLength={10}
                onChange={(e) =>
                  setDetails({ ...Details, Phone: e.target.value })
                }
              />
            </div>
            <div className={styles.content}>
              <label htmlFor="college">COLLEGE :</label>
              <input
                type="text"
                id="college"
                placeholder="Enter your college name"
                onChange={(e) =>
                  setDetails({ ...Details, College: e.target.value })
                }
              />
            </div>
          </div>
          <button onClick={handleUpload}>REGISTER</button>
        </form>
      </div>
    </section>
  );
}
