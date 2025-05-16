"use client";
import styles from "./about.module.css";
import { Suspense } from "react";
import Card from "@/components/card/card.jsx";
import { allDevelopers } from "../../../lib/data";

//SWIPER
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";
// import "./";

// import required modules
import { EffectCards } from "swiper/modules";

const About = () => {
  const mappingDevelopers = allDevelopers.map((dev) => (
    <SwiperSlide key={dev.id}>
      {" "}
      <Card dev={dev} />
    </SwiperSlide>
  ));

  return (
    <div className="container">
      <div className={` ${styles.aboutParent}`}>
        <article className={styles.article}>
          <h1 className={styles.head1}>
            A digital web studio creating stunning & engaging online experiences
          </h1>
          <p className={styles.para}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            nisi vel voluptatibus deleniti recusandae at quae odit quibusdam
            nulla, perspiciatis veniam id ipsam? Tempore impedit eaque nemo!
            Veniam, commodi dolor!
          </p>
          <a href="" className={styles.href}>
            Learn more {">"}
          </a>
        </article>
        <Suspense fallback={<div>Looding...</div>}>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {mappingDevelopers}
          </Swiper>
          {/* <div className={styles.gallery}>{mappingDevelopers}</div> */}
        </Suspense>
      </div>
    </div>
  );
};

export default About;

/*
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

*/
