"use client";
import React from "react";

function Yarb() {
  console.log("inside child");
  const a = Math.random();
  return <h2>{a}</h2>;
}

export default Yarb;
