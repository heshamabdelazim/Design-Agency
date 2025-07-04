"use client";
import Image from "next/image";
import styles from "./dev.module.css";
import { allDevelopers } from "../../../../lib/data";
import { useRouter } from "next/navigation";

const Developer = ({ params }) => {
  // const params = useParams();
  const { slug } = params;

  const route = useRouter();
  function handleBackButton() {
    route.back();
  }

  const theDev = allDevelopers.find((dev) => {
    return dev.id == slug;
  });
  const firstName = theDev.name.split(" ")[0];

  return (
    <div className={`${styles.container} container`}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image src={theDev.path} alt="image" className={styles.img} fill />
        </div>
        <div className={styles.hidden}>
          <div className={styles.textContainer}>
            <div className={styles.postHeader}>
              <span>
                <h1>{theDev.name}</h1>
                <span className={styles.detailValue}> {theDev.title}</span>
              </span>
              <button
                className={"button " + styles.return}
                onClick={() => handleBackButton()}
              >
                Return
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-undo2-icon lucide-undo-2"
                >
                  <path d="M9 14 4 9l5-5" />
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>
              </button>
            </div>
            <div className={styles.content}>{theDev.parag()}</div>
            <div className={styles.buttons}>
              <button className="button">Hire {firstName}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
