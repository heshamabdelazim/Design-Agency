"use client";
import { useEffect, useRef, useState } from "react";
import Styles from "./draw.module.css";

function Page() {
  const canvasDom = useRef();
  const ctx = useRef();
  const [isDrawing, setIsDrawing] = useState(false);
  const [positionObj, setPositionObj] = useState({
    screenX: null,
    screenY: null,
  });

  useEffect(() => {
    canvasDom.current.addEventListener("mousedown", handleMousDown);
    if (isDrawing) {
      canvasDom.current.addEventListener("mousemove", handleMouseMove);
    }
    canvasDom.current.addEventListener("mouseup", handleMouseUp);
    return () =>
      canvasDom.current.removeEventListener("mousemove", handleMouseMove);
  }, [isDrawing]);
  console.log(isDrawing);
  const handleMousDown = (e) => {
    setIsDrawing(true);
    canvasDom.current.beginPath();
    canvasDom.current.moveTo(e.screenX, e.screenY);
  };
  const handleMouseMove = (e) => {
    console.log(isDrawing, "inside handleMouseMove");

    // console.log("test");
    canvasDom.current.lineTo(e.screenX, e.screenY);
    canvasDom.current.stroke();
  };
  const handleMouseUp = (e) => {
    setIsDrawing(false);
  };
  return (
    <>
      <div id={Styles.parent} className="container">
        <canvas
          id="drawingCanvas"
          width="500"
          height="500"
          ref={canvasDom}
          onMouseDown={handleMousDown}
          onMouseUp={handleMouseUp}
        />
        <button id="clearCanvas" onClick={() => console.log(isDrawing)}>
          Clear
        </button>
      </div>
    </>
  );
}

export default Page;
