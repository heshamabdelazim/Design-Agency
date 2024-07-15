import styles from "./purpose.module.css";
const Purpose = ({ h2, p, changeColor }) => {
  return (
    <div
      className={`${styles.purposeParent} ${
        changeColor ? styles.changeColor : ""
      }`}
    >
      <p className={styles.light}>Purpose</p>
      <h2 className={styles.head2}>{h2}</h2>
      <p className={styles.para}>{p}</p>
      <button className="button">Get started</button>
    </div>
  );
};

export default Purpose;
