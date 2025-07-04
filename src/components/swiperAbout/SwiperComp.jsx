"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, EffectCards } from "swiper/modules";
import { allDevelopers } from "../../../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./card";

//////////////
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

function SwiperComp() {
  let [slideIndex, setSlideIndex] = useState(0);
  let [domChange, setIsDomChange] = useState(false);
  //for animation of changing the dom used to put a class of animation then delete the class

  useEffect(() => {
    setIsDomChange(true);
    const timeout = setTimeout(() => setIsDomChange(false), 900);
    return () => clearInterval(timeout);
  }, [slideIndex]);

  const mappingDevelopers = allDevelopers.map((dev) => (
    <SwiperSlide key={dev.id}>
      <Card dev={dev} />
    </SwiperSlide>
  ));

  const slideDev = allDevelopers
    .find((dev) => dev.id === slideIndex)
    .name.split(" ");
  return (
    <div id="swiper-about">
      <div className="click">
        CLICK
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevrons-down-icon lucide-chevrons-down"
        >
          <path d="m7 6 5 5 5-5" />
          <path d="m7 13 5 5 5-5" />
        </svg>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        slidesPerView={1}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 10000 }}
        // className="mySwiper"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(e) => setSlideIndex(e.activeIndex)}
      >
        {mappingDevelopers}
        <span id="dev-firstName" className={domChange ? "aniamte" : ""}>
          {slideDev[0]}
        </span>
        <span id="dev-lastName" className={domChange ? "aniamte" : ""}>
          {slideDev[1]}
        </span>
      </Swiper>
    </div>
  );
}

export default SwiperComp;
