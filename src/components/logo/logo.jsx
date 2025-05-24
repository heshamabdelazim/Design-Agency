import Link from "next/link";
import styles from "./logo.module.css";

const Logo = ({ isForHeader = false }) => {
  return (
    <Link href="/" className={isForHeader ? styles.phoneNone : ""}>
      <h2>
        <span className={styles.first}>Design</span>{" "}
        <span className={styles.second}>Agency</span>
      </h2>
    </Link>
  );
};

export default Logo;
