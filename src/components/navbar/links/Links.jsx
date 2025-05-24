"use client";
import Link from "next/link";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { user } from "../../../../lib/data";
import Logo from "@/components/logo/logo";

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

  const putLinks = (isMobile = false) => (
    <>
      {links.map((lin) => (
        <Link
          key={lin.title}
          href={lin.path}
          className={`${isMobile ? styles.mobileLink : styles.normalLink} ${
            myPath === lin.path ? `${styles.active}` : ""
          }`}
          onClick={() => {
            isMobile && setOpen(false);
          }}
        >
          {lin.title}
        </Link>
      ))}
    </>
  );

  return (
    <>
      {putLinks()}
      {/* =====smallScreens===== */}
      <button
        className={` button ${styles.menuButton}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>

      {open && (
        <div
          className={styles.parent + " " + styles.show}
          onClick={() => setOpen(false)}
        >
          <div className={styles.mobilelinks}>
            <Logo />
            {putLinks(true)}
          </div>
        </div>
      )}
    </>
  );
};

export default Links;
