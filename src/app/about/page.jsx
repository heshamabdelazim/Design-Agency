"use client";
import styles from "./about.module.css";
import { Suspense } from "react";
import Card from "@/components/card/card.jsx";
import { allDevelopers } from "../../../lib/data";

//SWIPER
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";

// Import Swiper styles

// import "./";

// import required modules
import {
  A11y,
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import SwiperComp from "@/components/card/SwiperComp";

const About = () => {
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
        <SwiperComp />
      </div>
    </div>
  );
};

export default About;

// modules={[Navigation, Pagination, Scrollbar, A11y]}
