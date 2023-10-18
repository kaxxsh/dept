"use client";

import { BASE_URL } from "@/config";
import styles from "@/styles/admin.module.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Add = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [Rule1, setRule1] = useState([]);
  const [Rule2, setRule2] = useState([]);
  const [Rule3, setRule3] = useState([]);
  const [form, setForm] = useState({
    event: "",
  });

  useEffect(() => {
    if (id) {
      fetch(BASE_URL + "/api/result/" + id)
        .then((res) => res.json())
        .then((data) => {
          data.round1 = JSON.parse(data.round1);
          data.round2 = JSON.parse(data.round2);
          data.round3 = JSON.parse(data.round3);
          setForm(data);
        });
    }
  }, [id]);

  useEffect(() => {
    console.log(form);
    if (form.round1 && form.round2 && form.round3) {
      setRule1([...form.round1]);
      setRule2([...form.round2]);
      setRule3([...form.round3]);
    }
  }, [form]);

  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("round1", JSON.stringify(Rule1));
    formData.append("round2", JSON.stringify(Rule2));
    formData.append("round3", JSON.stringify(Rule3));

    try {
      const response = await fetch(BASE_URL + "/api/result", {
        cache: "no-store",
        credentials: "include",
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Product Added!");
      } else {
        toast.error("Error adding product!");
      }
    } catch (error) {
      toast.error("Error adding product!");
    }
  };

  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <span>
          <Link href="/admin/result">{"<"}-&nbsp;</Link>
        </span>
        Add Event
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className="">ROUNDS</div>
          <div className={styles.text}>
            <label htmlFor="Rule1">Round 1</label>
            <form
              className={styles["size-container"]}
              onSubmit={(e) => {
                e.preventDefault();
                const newRule1 = e.target.Rule1.value;
                if (!Rule1.includes(newRule1) && newRule1) {
                  setRule1([...Rule1, newRule1]);
                }
                e.target.Rule1.value = null;
              }}
            >
              <input aria-autocomplete="list" type="text" name="Rule1" />
              <button type="submit">Add</button>
            </form>
            {Rule1.length > 0 && (
              <div className={styles.tooltip}>
                Click on the chips to remove them
              </div>
            )}
            <div className={styles["chip-container"]}>
              {Rule1.map((item) => {
                return (
                  <div
                    className={styles.chip}
                    key={item}
                    title="remove rule"
                    onClick={() => setRule1(Rule1.filter((i) => i !== item))}
                  >
                    {item}
                  </div>
                );
              })}
            </div>

            <label htmlFor="Rule2">Round 2</label>
            <form
              className={styles["size-container"]}
              onSubmit={(e) => {
                e.preventDefault();
                const newRule2 = e.target.Rule2.value;
                if (!Rule2.includes(newRule2) && newRule2) {
                  setRule2([...Rule2, newRule2]);
                }
                e.target.Rule2.value = null;
              }}
            >
              <input aria-autocomplete="list" type="text" name="Rule2" />
              <button type="submit">Add</button>
            </form>
            {Rule2.length > 0 && (
              <div className={styles.tooltip}>
                Click on the chips to remove them
              </div>
            )}
            <div className={styles["chip-container"]}>
              {Rule2.map((item) => {
                return (
                  <div
                    className={styles.chip}
                    key={item}
                    title="remove item"
                    onClick={() => setRule2(Rule2.filter((i) => i !== item))}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <label htmlFor="Rule3">Round 3</label>
            <form
              className={styles["size-container"]}
              onSubmit={(e) => {
                e.preventDefault();
                const newRule3 = e.target.Rule3.value;
                if (!Rule3.includes(newRule3) && newRule3) {
                  setRule3([...Rule3, newRule3]);
                }
                e.target.Rule3.value = null;
              }}
            >
              <input aria-autocomplete="list" type="text" name="Rule3" />
              <button type="submit">Add</button>
            </form>
            {Rule3.length > 0 && (
              <div className={styles.tooltip}>
                Click on the chips to remove them
              </div>
            )}
            <div className={styles["chip-container"]}>
              {Rule3.map((item) => {
                return (
                  <div
                    className={styles.chip}
                    key={item}
                    title="remove item"
                    onClick={() => setRule3(Rule3.filter((i) => i !== item))}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.category}>
            <label htmlFor="type">Type</label>
            <select
              name="type"
              value={form.event}
              onChange={(e) => setForm({ ...form, event: e.target.value })}
            >
              <option value="">Select a title</option>
              <option value="promptcraft">PROMPTCRAFT</option>
              <option value="riddlesql">RiddleSQL</option>
              <option value="drone">DRONE THE DRACARYS</option>
              <option value="embrace">EMBRACE THE UNKNOWN</option>
            </select>
          </div>
          <div className={styles.submit}>
            Make sure you recheck all the details before adding the content to
            the website
            <div className={styles["button-container"]}>
              <button>Preview</button>
              <button onClick={handleSubmit}>{!id ? "ADD" : "UPDATE"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
