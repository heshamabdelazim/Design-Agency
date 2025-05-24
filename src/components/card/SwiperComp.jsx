"use client";
import React, { useEffect, useState } from "react";
import { EffectCards } from "swiper/modules";
import { allDevelopers } from "../../../lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./card";

//////////////
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";
import { playfair_Display } from "@/app/fonts/fonts";

function SwiperComp() {
  let [slideIndex, setSlideIndex] = useState(0);
  let [domChange, setIsDomChange] = useState(false);
  //for animation of changing the dom used to put a class of animation then delete the class

  useEffect(() => {
    setIsDomChange(true);
    setTimeout(() => setIsDomChange(false), 900);
  }, [slideIndex]);

  const mappingDevelopers = allDevelopers.map((dev) => (
    <SwiperSlide key={dev.id}>
      <Card dev={dev} />
    </SwiperSlide>
  ));

  const slideDev = allDevelopers
    .find((dev) => dev.id === slideIndex)
    .name.split(" ");
  console.log(slideDev);

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      slidesPerView={1}
      modules={[EffectCards]}
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
  );
}

export default SwiperComp;
