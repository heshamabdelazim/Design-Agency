"use client";
import Link from "next/link";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { user } from "../../../../lib/data";

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

      {/* =====smallScreens===== */}
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
