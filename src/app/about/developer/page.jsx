import Image from "next/image";
// import styles from "./developer.moule.css";

import styles from "./dev.module.css";
const Developer = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.imgContainer}>
        <Image src="/Hesham.jpg" alt="image" className={styles.img} fill />
      </div>
      <div className={styles.hidden}>
        <div className={styles.textContainer}>
          <span>
            <h1>Hesham Abdelazim Kamel</h1>
            <span className={styles.detailValue}> Front End Developer</span>
          </span>
          <div className={styles.content}>
            Hello There. <br />I Hope meet your expectation, I have got +1 year
            of experinece. on Web Development using
            <br />
            <strong>NEXT.JS, Tailwind & Bootstrap</strong>. <br />I adore
            working with team and okay with remote work. <br />I have got
            reading documentation skill, Trying to solve BUGs and Errors.
          </div>
          <button className="button">Hire Hesham</button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
