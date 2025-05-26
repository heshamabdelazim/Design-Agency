import React from "react";

function Testmonial({ isActive }) {
  return <div>{isActive ? "active now" : "Not active"}</div>;
}

export default Testmonial;
