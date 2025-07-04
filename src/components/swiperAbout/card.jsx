"use client";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
import { useRef } from "react";
const Card = ({ dev }) => {
  return (
    <Link href={`/about/${dev.id}`} className={styles.developer}>
      <Image src={dev.path} alt={dev.name} fill />
    </Link>
  );
};

export default Card;
