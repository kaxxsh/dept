// "use client";

// import styles from "@/styles/admin.module.scss";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Area51Layout({ children }) {
//   const pathname = usePathname();
//   return (
//     <div className={styles.area51}>
//       <div className={styles.nav}>&lt;Admin /&gt;</div>
//       <div className={styles.container}>
//         <div className={styles.sidebar}>
//           <Link
//             className={pathname == "/admin/home" ? styles.active : undefined}
//             href="/admin/home"
//           >
//             Home
//           </Link>
//           <Link
//             className={
//               pathname.includes("/admin/participants")
//                 ? styles.active
//                 : undefined
//             }
//             href="/admin/participants"
//           >
//             Participants
//           </Link>
//           <Link
//             className={
//               pathname.includes("/admin/result") ? styles.active : undefined
//             }
//             href="/admin/result"
//           >
//             Result
//           </Link>
//         </div>
//         <div className={styles.main}>{children}</div>
//       </div>
//     </div>
//   );
// }
