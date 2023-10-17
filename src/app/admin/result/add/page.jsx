"use client";

import { BASE_URL } from "@/config";
import styles from "@/styles/admin.module.scss";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  const [Rule1, setRule1] = useState([]);
  const [Rule2, setRule2] = useState([]);
  const [Rule3, setRule3] = useState([]);
  const [form, setform] = useState({
    event: "",
  });
  // useEffect(() => {
  //   if (id) {
  //     fetch(BASE_URL + "/api/area51/product/" + id)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setColors(data.colors);
  //         setSizes(data.sizes);
  //         setImages(data.media);
  //         setForm(data);
  //       });
  //   }
  // }, [id]);

  const handleSubmit = async () => {
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("round1", JSON.stringify(Rule1));
    formData.append("round2", JSON.stringify(Rule2));
    formData.append("round3", JSON.stringify(Rule3));
    const response = fetch(BASE_URL + "/api/result", {
      cache: "no-store",
      credentials: "include",
      method: "POST",
      body: formData,
    });
    toast.promise(response, {
      pending: "Adding product...",
      success: "Product Added!",
      error: "Error adding product!",
    });
    const data = await response.then((response) => response.json());
  };

  // error handling wip
  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <span>
          <Link href="/admin/home">{"<"}-&nbsp;</Link>
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
              onChange={(e) => setform({ ...form, event: e.target.value })}
            >
              <option value="">Select a type</option>
              <option value="Event1">Event1</option>
              <option value="Event2">Event2</option>
              <option value="Event3">Event3</option>
              <option value="event4">Event4</option>
            </select>
          </div>
          <div className={styles.submit}>
            Make sure you recheck all the details before adding the content to
            the website
            <div className={styles["button-container"]}>
              <button>Preview</button>
              <button onClick={handleSubmit}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
