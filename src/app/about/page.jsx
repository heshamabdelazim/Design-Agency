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

const About = () => {
  const theFirstImage = 0; //this helpful for the (css variable) when I change var(--img1) then var(--img2)
  const theLastImage = 2;
  let [imageInd, setImageInd] = useState(theFirstImage);
  useEffect(() => {
    //every 7 sec, the imageInd will change => means the hero image will change
    const timeout = setTimeout(() => {
      setImageInd((old) => (old === theLastImage ? theFirstImage : old + 1));
    }, 5000);
    return () => clearTimeout(timeout); //remove unnecessary renderes
  });
  return (
    <>
      <div className={styles.first + " first-element"}>
        <article
          className={styles.article}
          style={{
            backgroundImage: `var(--img${imageInd})`,
          }}
        >
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
      <Banner banner={styles.banner} />
      {/* ==================== */}

      {/* ==================== */}
      <SwiperComp />
    </>
  );
};

export default About;

// modules={[Navigation, Pagination, Scrollbar, A11y]}
