"use client";
import Image from "next/image";
// import { useEffect, useState } from "react";
// import HydrationTest from "@/components/hydrationTest";
import styles from "./about.module.css";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import Card from "@/components/card/card.jsx";
import { allDevelopers } from "../../../lib/data";

const About = () => {
  //================
  // First, NOTE: when you change it to CSR the (server intial render) then client
  // first render will be in the server side
  // But if SSR, server (render it only without client), So if you make something in server component it will be rendered inside the server only
  // Look the following example for more details

  //================
  // Suppose you have Math.random() , When you put that in a dom of JSX
  //server side will be different from client side
  // How to fix this? 3 solutions

  const a = Math.random();
  console.log("test"); // because we are inside Client component it will be appeared in server and client

  //================ solution 1
  // after rendering of that client component, useEffect will work and you can conditional render

  // let [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  console.log(a);

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
  // Not like (solution 1) you made this current component CSR then Math.random() to see both server side and client side.
  // in this situation you use a CSR component (external component) to use it here server component
  // Then you import it but {ssr:false}
  //================

  // Second question =============
  // When client component has inside it server component, Does this server component will be in client side ???
  // The answer is No. Try console.log("test"); you will not find it in the client side

  // =====================================================================

  const mappingDevelopers = allDevelopers.map((dev, ind) => (
    <Card dev={dev} key={ind} />
  ));

  return (
    <div className="container">
      <div className={` ${styles.aboutParent}`}>
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
          <a href="" className={styles.href}>
            Learn more {">"}
          </a>
          {/* <HydrationTestNoSSR /> */}
          {/* <div suppressHydrationWarning>{a}</div> */}
        </article>
        <Suspense fallback={<div>Looding...</div>}>
          <div className={styles.gallery}>{mappingDevelopers}</div>
        </Suspense>
      </div>
    </div>
  );
};

export default About;
