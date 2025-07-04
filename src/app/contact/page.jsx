"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const Yarb = dynamic(
    () => {
      return import("./Yarb");
    },
    { ssr: false, loading: "Waiting the Yarb component to be rendered," }
  );
  console.log("inside parent => server");
  const a = Math.random();
  console.log("this is" + a);

  // Inside the client component, to calculate the time to send the (HTML + Bundled js) from server to the browser
  const b = Date.now();
  console.log(b); //in both
  let [c, setC] = useState();
  useEffect(() => setC(Date.now()), []);
  console.log("Duration in milli-seconds => " + (b - c)); //Duration in milli-seconds => 2

  return (
    <div>
      {/* <Yarb /> */}
      <div suppressHydrationWarning>{a}</div>
    </div>
  );
};

export default Contact;
