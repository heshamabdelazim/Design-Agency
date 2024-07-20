"use client";
import Image from "next/image";
// import styles from "./developer.moule.css";

import styles from "./dev.module.css";
import { allDevelopers } from "../../../../lib/data";
import { useParams } from "next/navigation";

const Developer = ({ params }) => {
  // const params = useParams();
  const { slug } = params;
  console.log(slug);

  const theDev = allDevelopers.find((dev) => {
    return dev.id == slug;
  });
  console.log(theDev);

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.imgContainer}>
        <Image src={theDev.path} alt="image" className={styles.img} fill />
      </div>
      <div className={styles.hidden}>
        <div className={styles.textContainer}>
          <span>
            <h1>{theDev.name}</h1>
            <span className={styles.detailValue}> {theDev.title}</span>
          </span>
          <div className={styles.content}>{theDev.parag()}</div>
          <button className="button">Hire {theDev.name}</button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
