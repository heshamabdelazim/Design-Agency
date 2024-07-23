"use client";

import Logo from "../logo/logo";
import Social from "../social/social";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.head}>Footer</h1>
      <div className={styles.top}>
        {/* <div>one</div> */}
        <div className={styles.logoContainer}>
          <Logo />
          {/* <Social /> */}
        </div>
        {/* <div>one</div> */}
      </div>
      <div className={styles.copy}>
        &copy;{new Date().getFullYear()} All rights preserved.
      </div>
    </footer>
  );
};
export default Footer;
