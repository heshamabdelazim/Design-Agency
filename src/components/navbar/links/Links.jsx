"use client";
import Link from "next/link";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Links = () => {
  const myPath = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    // {
    //   title: "Contact",
    //   path: "/contact",
    // },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  // suppose ===============
  const sesstion = false;
  const isadmin = true;
  // if you're not authentcated you should see login
  // if you're admin you should see admin-link

  return (
    <>
      {links.map((lin) => (
        <Link
          key={lin.title}
          href={lin.path}
          className={`${styles.normalLink} ${
            myPath === lin.path ? `${styles.active}` : ""
          }`}
        >
          {lin.title}
        </Link>
      ))}
      {/* ========== */}
      {sesstion ? ( //authentecated ?
        <>
          {isadmin && (
            <Link href="/login" className={`${styles.link}`}>
              Admin
            </Link>
          )}
          {/* <button className={styles.logout}>Logout</button> */}
        </>
      ) : (
        <>
          {/* <Link href="/login" className={styles.normalLink}>
            login
          </Link> */}
        </>
      )}
      {/* ========== */}
      <button
        className={` button ${styles.menuButton}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>

      <div className={`${styles.mobilelinks} ${open ? styles.show : ""}`}>
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={`${styles.mobileLink} ${
              myPath === link.path ? styles.active : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Links;
