import React from "react";
import styles from "./about.module.css";
function Banner() {
  return (
    <div className={styles.banner}>
      <span className={styles.span}>TEN YEARS</span>
      <h2>We{"'"}ve got what you need!</h2>
      <div className={styles.smallLine} />
      <p>
        +10 years of experience on the web fast delivering, performance and
        customer services <br />
        Choose one of our available plans <br /> New clients have trial 30 days
      </p>
      <button>Get Started!</button>
    </div>
  );
}

export default Banner;
