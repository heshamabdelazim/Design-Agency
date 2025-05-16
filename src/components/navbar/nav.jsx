"use client";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { useEffect, useRef, useState } from "react";
import Logo from "../logo/logo";
import { user } from "../../../lib/data";

const Nav = () => {
  const navParent = useRef();
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: ` ${isScrolled ? "white" : "transparent"}` }}
      ref={navParent}
    >
      <Logo />
      <div className={styles.links}>
        <Links />
      </div>
      <div>{user ? "Authenticated" : "Not-Authenticated"}</div>
    </div>
  );
};

export default Nav;
