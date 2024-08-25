"use client";
import Image from "next/image";
import styles from "./home.module.css";
import Purpose from "@/components/purpose/purpose";
import { connectToDb } from "../../lib/utils";
import { getDevs, user } from "../../lib/data";
import { useRouter } from "next/navigation";

const Home = () => {
  // console.log(connectToDb());
  // console.log(process.env.MONGO);
  // console.log(getDevs());
  console.log(user);

  const router = useRouter();
  return (
    <>
      <section className={styles.home}>
        <div className={` ${styles.content}`}>
          <p className={styles.soft}>developer</p>
          <h1 className={styles.strong}>we deliver best websites for you.</h1>
          <p className={styles.par}>
            Let your Audience know what you do. <br /> Let your website
            describes your inthusiasm.
          </p>
          <button className="button" onClick={() => router.push("/blog")}>
            Get started{" "}
          </button>
        </div>
      </section>
      <section className={styles.purpose}>
        <Purpose
          h2="Business"
          p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt, iure voluptatem repellat ab veniam facere iusto quae quia delectus! "
        />
        <Purpose
          h2="personal"
          p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum sunt, iure voluptatem repellat ab veniam facere iusto quae quia delectus! "
          changeColor={true}
        />
      </section>
    </>
  );
};

export default Home;
