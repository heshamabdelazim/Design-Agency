import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
const Card = ({ dev }) => {
  return (
    <Link href={`/about/${dev.id}`} className={styles.developer}>
      <Image src={dev.path} alt={dev.name} fill />

      <div
        className={styles.figDetails}
        onMouseEnter={(e) => e.target.classList.add(styles.show)}
        onMouseLeave={(e) => e.target.classList.remove(styles.show)}
      >
        <h3>{dev.name}</h3>
      </div>
    </Link>
  );
};

export default Card;
