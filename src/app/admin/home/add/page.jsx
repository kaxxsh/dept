// "use client";

// import { BASE_URL } from "@/config";
// import styles from "@/styles/admin.module.scss";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";

// const Add = () => {
//   const searchParams = useSearchParams();
//   const id = searchParams.get("id");

//   const [Rule1, setRule1] = useState([]);
//   const [Rule2, setRule2] = useState([]);
//   const [Rule3, setRule3] = useState([]);
//   const [Requirements, setRequirements] = useState([]);
//   const [Course, setCourse] = useState([]);
//   const [Banner, setBanner] = useState([]);
//   const [Photo, setPhoto] = useState([]);
//   const [form, setForm] = useState({
//     type: "",
//     title: "",
//     description: "",
//     days: "",
//     date: "",
//     round1: "",
//     round2: "",
//     round3: "",
//     inposition: "",
//     inname: "",
//     inexeperience: "",
//     indescription: "",
//     linkedin: "",
//     mailid: "",
//     location: "",
//     facoordinator: "",
//     stcoordinator1: "",
//     stcoordinator2: "",
//   });

//   useEffect(() => {
//     if (id) {
//       fetch(BASE_URL + "/api/event/" + id)
//         .then((res) => res.json())
//         .then((data) => {
//           data.rule1 = JSON.parse(data.rule1);
//           data.rule2 = JSON.parse(data.rule2);
//           data.rule3 = JSON.parse(data.rule3);
//           data.requirements = JSON.parse(data.requirements);
//           data.course = JSON.parse(data.course);
//           setForm(data);
//         });
//     }
//   }, [id]);

//   useEffect(() => {
//     if (
//       Array.isArray(form.rule1) &&
//       Array.isArray(form.rule2) &&
//       Array.isArray(form.rule3) &&
//       Array.isArray(form.course) &&
//       Array.isArray(form.requirements)
//     ) {
//       setRule1([...form.rule1]);
//       setRule2([...form.rule2]);
//       setRule3([...form.rule3]);
//       setCourse([...form.course]);
//       setRequirements([...form.requirements]);
//       setBanner([...form.banner]);
//       setPhoto([...form.photo]);
//     }
//   }, [form]);

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     for (const key in form) {
//       formData.append(key, form[key]);
//     }
//     for (let i = 0; i < Banner.length; i++) {
//       formData.append("banner", Banner[i]);
//     }
//     for (let i = 0; i < Photo.length; i++) {
//       formData.append("photo", Photo[i]);
//     }
//     formData.append("rule1", JSON.stringify(Rule1));
//     formData.append("rule2", JSON.stringify(Rule2));
//     formData.append("rule3", JSON.stringify(Rule3));
//     formData.append("requirements", JSON.stringify(Requirements));
//     formData.append("course", JSON.stringify(Course));
//     const response = fetch(BASE_URL + "/api/event", {
//       cache: "no-store",
//       credentials: "include",
//       method: "POST",
//       body: formData,
//     });
//     toast.promise(response, {
//       pending: "Adding product...",
//       success: "Product Added!",
//       error: "Error adding product!",
//     });
//     const data = await response.then((response) => response.json());
//   };

//   // error handling wip
//   return (
//     <div className={styles.products}>
//       <div className={styles.top}>
//         <span>
//           <Link href="/admin/home">{"<"}-&nbsp;</Link>
//         </span>
//         Add Event
//       </div>
//       <div className={styles.content}>
//         <div className={styles.left}>
//           <div className="">BASIC</div>
//           <div className={styles.text}>
//             <label htmlFor="title">title</label>
//             <select
//               name="title"
//               value={form.title}
//               onChange={(e) => setForm({ ...form, title: e.target.value })}
//             >
//               <option value="">Select a title</option>
//               <option value="promptcraft">PROMPTCRAFT</option>
//               <option value="riddlesql">RiddleSQL</option>
//               <option value="drone">DRONE THE DRACARYS</option>
//               <option value="embrace">EMBRACE THE UNKNOWN</option>
//               <option value="devsecope">DEVSECOPS</option>
//               <option value="erc">ERC-Token Blockchain</option>
//               <option value="salesforce">Salesforce</option>
//               <option value="cybersecurity">Cybersecurity</option>
//               <option value="cloud">Cloud CI/CD Pipeline</option>
//               <option value="advance">
//                 CAdvanced AI Analytics in Healthcare
//               </option>
//               <option value="llms">Advanced AI Analytics in Healthcare</option>
//             </select>
//             <label htmlFor="description">Description</label>
//             <textarea
//               value={form.description}
//               spellCheck="false"
//               type="text"
//               name="description"
//               placeholder="Enter description"
//               onChange={(e) =>
//                 setForm({ ...form, description: e.target.value })
//               }
//             />
//             <label htmlFor="days">Number of Days</label>
//             <input
//               value={form.days}
//               aria-autocomplete="list"
//               type="number"
//               name="days"
//               placeholder="Number of Days"
//               onChange={(e) => setForm({ ...form, days: e.target.value })}
//             />
//             <label htmlFor="date">Date</label>
//             <input
//               value={form.date}
//               aria-autocomplete="list"
//               type="date"
//               name="date"
//               placeholder="Date"
//               onChange={(e) => setForm({ ...form, date: e.target.value })}
//             />
//             <label htmlFor="banner">Banner</label>
//             <div className={styles.upload}>
//               {Banner.length > 0 && (
//                 <div className={styles["uploaded-container"]}>
//                   {Banner.map((item) => {
//                     return (
//                       <img
//                         onClick={() =>
//                           setBanner(Banner.filter((img) => img !== item))
//                         }
//                         className={styles.uploadedimg}
//                         src={
//                           typeof item === "string"
//                             ? item
//                             : URL.createObjectURL(item)
//                         }
//                         alt="uploaded image"
//                         key={item.name}
//                       />
//                     );
//                   })}
//                 </div>
//               )}
//               <button>
//                 <label
//                   style={{
//                     cursor: "pointer",
//                   }}
//                   htmlFor="banner"
//                 >
//                   Upload Image
//                 </label>
//               </button>
//               <input
//                 hidden
//                 type="file"
//                 name="img"
//                 id="banner"
//                 accept="image/png, image/jpeg, image/webp"
//                 onChange={(e) => setBanner([...Banner, e.target.files[0]])}
//               />
//               Accepts png, jpeg and webp.
//             </div>
//           </div>
//           <div className="">ROUNDS</div>
//           <div className={styles.text}>
//             <label htmlFor="round1">Round 1</label>
//             <input
//               value={form.round1}
//               aria-autocomplete="list"
//               type="text"
//               name="Round 1"
//               placeholder="Enter Round name"
//               onChange={(e) => setForm({ ...form, round1: e.target.value })}
//             />
//             <label htmlFor="Rule1">Rules</label>
//             <form
//               className={styles["size-container"]}
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const newRule1 = e.target.Rule1.value;
//                 if (!Rule1.includes(newRule1) && newRule1) {
//                   setRule1([...Rule1, newRule1]);
//                 }
//                 e.target.Rule1.value = null;
//               }}
//             >
//               <input aria-autocomplete="list" type="text" name="Rule1" />
//               <button type="submit">Add</button>
//             </form>
//             {Rule1.length > 0 && (
//               <div className={styles.tooltip}>
//                 Click on the chips to remove them
//               </div>
//             )}
//             <div className={styles["chip-container"]}>
//               {Rule1.map((item) => {
//                 return (
//                   <div
//                     className={styles.chip}
//                     key={item}
//                     title="remove rule"
//                     onClick={() => setRule1(Rule1.filter((i) => i !== item))}
//                   >
//                     {item}
//                   </div>
//                 );
//               })}
//             </div>
//             <label htmlFor="round2">Round 2</label>
//             <input
//               value={form.round2}
//               aria-autocomplete="list"
//               type="text"
//               name="Round 2"
//               placeholder="Enter Round name"
//               onChange={(e) => setForm({ ...form, round2: e.target.value })}
//             />
//             <label htmlFor="Rule2">Rules</label>
//             <form
//               className={styles["size-container"]}
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const newRule2 = e.target.Rule2.value;
//                 if (!Rule2.includes(newRule2) && newRule2) {
//                   setRule2([...Rule2, newRule2]);
//                 }
//                 e.target.Rule2.value = null;
//               }}
//             >
//               <input aria-autocomplete="list" type="text" name="Rule2" />
//               <button type="submit">Add</button>
//             </form>
//             {Rule2.length > 0 && (
//               <div className={styles.tooltip}>
//                 Click on the chips to remove them
//               </div>
//             )}
//             <div className={styles["chip-container"]}>
//               {Rule2.map((item) => {
//                 return (
//                   <div
//                     className={styles.chip}
//                     key={item}
//                     title="remove item"
//                     onClick={() => setRule2(Rule2.filter((i) => i !== item))}
//                   >
//                     {item}
//                   </div>
//                 );
//               })}
//             </div>
//             <label htmlFor="round3">Round 3</label>
//             <input
//               value={form.round3}
//               aria-autocomplete="list"
//               type="text"
//               name="Round 3"
//               placeholder="Enter Round name"
//               onChange={(e) => setForm({ ...form, round3: e.target.value })}
//             />
//             <label htmlFor="Rule3">Rules</label>
//             <form
//               className={styles["size-container"]}
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const newRule3 = e.target.Rule3.value;
//                 if (!Rule3.includes(newRule3) && newRule3) {
//                   setRule3([...Rule3, newRule3]);
//                 }
//                 e.target.Rule3.value = null;
//               }}
//             >
//               <input aria-autocomplete="list" type="text" name="Rule3" />
//               <button type="submit">Add</button>
//             </form>
//             {Rule3.length > 0 && (
//               <div className={styles.tooltip}>
//                 Click on the chips to remove them
//               </div>
//             )}
//             <div className={styles["chip-container"]}>
//               {Rule3.map((item) => {
//                 return (
//                   <div
//                     className={styles.chip}
//                     key={item}
//                     title="remove item"
//                     onClick={() => setRule3(Rule3.filter((i) => i !== item))}
//                   >
//                     {item}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="">Instructor</div>
//           <div className={styles.text}>
//             <label htmlFor="position">Position</label>
//             <input
//               value={form.inposition}
//               aria-autocomplete="list"
//               type="text"
//               name="position"
//               placeholder="instructor position"
//               onChange={(e) => setForm({ ...form, inposition: e.target.value })}
//             />
//             <label htmlFor="Photo">Photo</label>
//             <div className={styles.upload}>
//               {Photo.length > 0 && (
//                 <div className={styles["uploaded-container"]}>
//                   {Photo.map((item) => (
//                     <img
//                       onClick={() =>
//                         setPhoto(Photo.filter((img) => img !== item))
//                       }
//                       className={styles.uploadedimg}
//                       src={
//                         typeof item === "string"
//                           ? item
//                           : URL.createObjectURL(item)
//                       }
//                       alt="uploaded image"
//                       key={item.name}
//                     />
//                   ))}
//                 </div>
//               )}
//               <button>
//                 <label
//                   style={{
//                     cursor: "pointer",
//                   }}
//                   htmlFor="Photo"
//                 >
//                   Upload Image
//                 </label>
//               </button>
//               <input
//                 hidden
//                 type="file"
//                 name="Photo"
//                 id="Photo"
//                 accept="image/png, image/jpeg, image/webp"
//                 onChange={(e) => setPhoto([...Photo, e.target.files[0]])}
//               />
//             </div>
//             <label htmlFor="name">Name</label>
//             <input
//               value={form.inname}
//               aria-autocomplete="list"
//               type="text"
//               name="Name"
//               placeholder="Enter Instructor name"
//               onChange={(e) => setForm({ ...form, inname: e.target.value })}
//             />

//             <label htmlFor="expreience">Expreience</label>
//             <input
//               value={form.inexeperience}
//               aria-autocomplete="list"
//               type="text"
//               name="expreience"
//               placeholder="Enter title"
//               onChange={(e) =>
//                 setForm({ ...form, inexeperience: e.target.value })
//               }
//             />
//             <label htmlFor="description">Description</label>
//             <textarea
//               value={form.indescription}
//               spellCheck="false"
//               type="text"
//               name="description"
//               placeholder="Enter Instructor Expreience"
//               onChange={(e) =>
//                 setForm({ ...form, indescription: e.target.value })
//               }
//             />
//             <label htmlFor="linkedin">Linkedin</label>
//             <input
//               value={form.linkedin}
//               aria-autocomplete="list"
//               type="text"
//               name="linkedin"
//               placeholder="Enter Instructor Linkedin"
//               onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
//             />
//             <label htmlFor="mail">Mail ID</label>
//             <input
//               value={form.mailid}
//               aria-autocomplete="list"
//               type="email"
//               name="email"
//               placeholder="Enter Instructor email"
//               onChange={(e) => setForm({ ...form, mailid: e.target.value })}
//             />
//           </div>
//           <div className="">Course</div>
//           <div className={styles.variant}>
//             <label htmlFor="Requirements">Requirements</label>
//             <form
//               className={styles["size-container"]}
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const newRequirements = e.target.Requirements.value;
//                 if (
//                   !Requirements.includes(newRequirements) &&
//                   newRequirements
//                 ) {
//                   setRequirements([...Requirements, newRequirements]);
//                 }
//                 e.target.Requirements.value = null;
//               }}
//             >
//               <input aria-autocomplete="list" type="text" name="Requirements" />
//               <button type="submit">Add</button>
//             </form>
//             {Requirements.length > 0 && (
//               <div className={styles.tooltip}>
//                 Click on the chips to remove them
//               </div>
//             )}
//             <div className={styles["chip-container"]}>
//               {Requirements.map((item) => {
//                 return (
//                   <div
//                     className={styles.chip}
//                     key={item}
//                     title="remove item"
//                     onClick={() =>
//                       setRequirements(Requirements.filter((i) => i !== item))
//                     }
//                   >
//                     {item}
//                   </div>
//                 );
//               })}
//             </div>
//             <label htmlFor="Course">Course Content</label>
//             <form
//               className={styles["size-container"]}
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const newCourse = e.target.Course.value;
//                 if (!Course.includes(newCourse) && newCourse) {
//                   setCourse([...Course, newCourse]);
//                 }
//                 e.target.Course.value = null;
//               }}
//             >
//               <input aria-autocomplete="list" type="text" name="Course" />
//               <button type="submit">Add</button>
//             </form>
//             {Course.length > 0 && (
//               <div className={styles.tooltip}>
//                 Click on the chips to remove them
//               </div>
//             )}
//             <div className={styles["chip-container"]}>
//               {Course.map((item) => {
//                 return (
//                   <div
//                     className={styles.chip}
//                     key={item}
//                     title="remove item"
//                     onClick={() => setCourse(Course.filter((i) => i !== item))}
//                   >
//                     {item}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="">Footer</div>
//           <div className={styles.text}>
//             <label htmlFor="location">Location</label>
//             <input
//               value={form.location}
//               aria-autocomplete="list"
//               type="text"
//               name="location"
//               placeholder="Enter location"
//               onChange={(e) => setForm({ ...form, location: e.target.value })}
//             />
//             <label htmlFor="facoordinator">Faculty Co-ordinator</label>
//             <input
//               value={form.facoordinator}
//               aria-autocomplete="list"
//               type="text"
//               name="facoordinator"
//               placeholder="Enter Faculty co-ordinator (00000 00000)"
//               onChange={(e) =>
//                 setForm({ ...form, facoordinator: e.target.value })
//               }
//             />
//             <label htmlFor="stcoordinator1">Student Co-ordinator</label>
//             <input
//               value={form.stcoordinator1}
//               aria-autocomplete="list"
//               type="text"
//               name="stcoordinator1"
//               placeholder="Enter Studdent Co-ordinator (00000 00000)"
//               onChange={(e) =>
//                 setForm({ ...form, stcoordinator1: e.target.value })
//               }
//             />
//             <label htmlFor="stcoordinator2">Student Co-ordinator</label>
//             <input
//               value={form.stcoordinator2}
//               aria-autocomplete="list"
//               type="text"
//               name="stcoordinator2"
//               placeholder="Enter Studdent Co-ordinator (00000 00000)"
//               onChange={(e) =>
//                 setForm({ ...form, stcoordinator2: e.target.value })
//               }
//             />
//           </div>
//         </div>
//         <div className={styles.right}>
//           <div className={styles.category}>
//             <label htmlFor="type">Type</label>
//             <select
//               name="type"
//               value={form.type}
//               onChange={(e) => setForm({ ...form, type: e.target.value })}
//             >
//               <option value="">Select a type</option>
//               <option value="workshop">Workshop</option>
//               <option value="event">Event</option>
//             </select>
//           </div>
//           <div className={styles.submit}>
//             Make sure you recheck all the details before adding the content to
//             the website
//             <div className={styles["button-container"]}>
//               <button>Preview</button>
//               <button onClick={handleSubmit}>{id ? "UPDATE" : "ADD"}</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;
