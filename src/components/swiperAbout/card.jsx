"use client";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { useRef } from "react";
const Card = ({ dev }) => {
  const theDom = useRef();

  return (
    <Link href={`/about/${dev.id}`} className={styles.developer}>
      <Image src={dev.path} alt={dev.name} fill />
      <div ref={theDom} className={styles.figDetails}>
        <h3>{dev.name}</h3>
      </div>
    </Link>
  );
};

export default Card;
