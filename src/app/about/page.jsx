"use client";
// import { useEffect, useState } from "react";
// import HydrationTest from "@/components/hydrationTest";
import styles from "./about.module.css";
import dynamic from "next/dynamic";

const About = () => {
  //================
  // First, NOTE: when you change it to CSR the server will work along with client
  // But if SSR, server will work only

  //================
  // Suppose you have Math.random() , When you put that in a dom of JSX
  //server side will be different from client side
  // How to fix this? 3 solutions

  const a = Math.random();

  //================ solution 1
  // after rendering of that client component, useEffect will work and you can conditional render

  // let [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // console.log(a);

  //================Solution 2
  // when you put it in a dom , Wrap it by <div suppressHydrationWarning> {a} </div>
  // There is hydration problem but it will not be shown on browser

  //================Solution 3

  // const HydrationTestNoSSR = dynamic(()=> import("path"), {ssr:false});
  const HydrationTestNoSSR = dynamic(
    () => import("@/components/hydrationTest"),
    {
      ssr: false,
    }
  );
  // this dynamic() came from NEXT
  // Instead of import componenet from "@/componenet/test"
  // You will make a variable that has dynamic(). This variable is (the component)
  // Not like (solution 1) you made this component CSR then Math.random() to see both server side and client side.
  // in this situation you use a CSR component (external component) to use it in SSR
  // Then you import it but {ssr:false}
  //================

  return (
    <div>
      <div className={`container ${styles.aboutParent}`}>
        <article className={styles.article}>
          <h1 className={styles.head1}>
            A digital web studio creating stunning & engaging online experiences
          </h1>
          <p className={styles.para}>
            Ford Foundation reduce child mortality fight against oppression
            refugee disruption pursue these aspirations effect. Free-speech
            Nelson Mandela change liberal; challenges of our times
            sustainability institutions.
            {/* {"<<"} {isClient && a} {">>"} */}
          </p>
          <a href="">Learn more {">"}</a>
          {/* <HydrationTestNoSSR /> */}
          {/* <div suppressHydrationWarning>{a}</div> */}
        </article>
        <div className={styles.gallery}>
          <div>one</div>
          <div>one</div>
          <div>one</div>
        </div>
      </div>
    </div>
  );
};

export default About;
