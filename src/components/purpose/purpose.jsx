import styles from "./purpose.module.css";
const Purpose = ({ h2, p, color }) => {
  const mainColor = color ? color : "var(--text)";
  return (
    <div className={styles.purposeParent} style={{ color: mainColor }}>
      <p className={styles.light}>Purpose</p>
      <h2 className={styles.head2}>{h2}</h2>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
        sunt, iure voluptatem repellat ab veniam facere iusto quae quia
        delectus!
      </p>
      <button
        className="button"
        style={{
          background: `linear-gradient(323deg, var(--bgSoft),${mainColor})`,
        }}
      >
        Get started
      </button>
    </div>
  );
};
export default Purpose;
