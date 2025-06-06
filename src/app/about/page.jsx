"use client";
import styles from "./about.module.css";
// import { Suspense } from "react";
import Card from "@/components/swiperAbout/card.jsx";
import { allDevelopers } from "../../../lib/data";

//SWIPER
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/scrollbar";

// =================Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/keyboard";

import SwiperComp from "@/components/swiperAbout/SwiperComp";
import Testmonial from "@/components/testmonial/Testmonial";
import Banner from "./Banner";
import Image from "next/image";

const About = () => {
  const arrayImages = [
    "/cover-about.jpg",
    "/cover-about1.jpg",
    "/cover-about2.jpg",
  ];
  let [imageInd, setImageInd] = useState(0);
  useEffect(() => {
    //every 7 sec, the imageInd will change => means the hero image will change
    const timeout = setTimeout(() => {
      setImageInd((old) => (old === arrayImages.length - 1 ? 0 : old + 1));
    }, 5000);
    return () => clearTimeout(timeout); //remove unnecessary renderes
  });
  return (
    <>
      <div className={styles.first + " first-element"}>
        <article
          className={styles.article}
          // style={{
          //   backgroundImage: `var(--img${imageInd})`,
          // }}
        >
          <Image
            src={arrayImages[imageInd]}
            fill
            style={{ objectFit: "cover", transition: "0.6s" }}
          />
          <div>
            <h1 className={styles.head1}>
              A digital web studio creating stunning & engaging online
              experiences
            </h1>
            <p className={styles.para}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              nisi vel voluptatibus deleniti recusandae at quae odit quibusdam
              nulla, perspiciatis veniam id ipsam? Tempore impedit eaque nemo!
              Veniam, commodi dolor!
            </p>
            <button href="" className={styles.button + " button"}>
              Learn more {">"}
            </button>
          </div>
        </article>
      </div>
      {/* ==================== */}
      <Banner />
      {/* ==================== */}
      <SwiperComp />
    </>
  );
};

export default About;

// modules={[Navigation, Pagination, Scrollbar, A11y]}
