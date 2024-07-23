import Image from "next/image";
import styles from "./home.module.css";
import Purpose from "@/components/purpose/purpose";
import { connectToDb } from "../../lib/utils";
import { getDevs } from "../../lib/data";

const Home = () => {
  // console.log(connectToDb());
  // console.log(process.env.MONGO);
  // console.log(getDevs());
  return (
    <>
      <section className={styles.home}>
        <div className={` container ${styles.content}`}>
          <p className={styles.soft}>developer</p>
          <h1 className={styles.strong}>we deliver best websites for you.</h1>
          <p className={styles.par}>
            Let your Audience know what you do. <br /> Let your website
            describes your inthusiasm.
          </p>
          <button className="button">Get started </button>
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
