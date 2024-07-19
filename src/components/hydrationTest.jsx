"use client";
const HydrationTest = () => {
  // We make this to test hydration
  // we will send this client component to server component
  const a = Math.random();
  console.log(a);

  return <div>{a}</div>;
};

export default HydrationTest;
