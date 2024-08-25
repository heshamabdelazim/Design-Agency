"use client";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { useEffect, useRef, useState } from "react";
import Logo from "../logo/logo";

const Nav = () => {
  const navParent = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0
        ? (navParent.current.style.backgroundColor = "white")
        : (navParent.current.style.backgroundColor = "transparent");
    });
  });

  return (
    <div className={styles.container} ref={navParent}>
      <Logo />
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default Nav;
