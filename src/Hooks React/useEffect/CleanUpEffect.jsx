import React, { useEffect, useState } from "react";

const CleanUpEffect = () => {
  const [size, setSize] = useState(window.innerWidth);

  const cleanFun = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", cleanFun);
    return () => {
      window.removeEventListener("resize", cleanFun);
    };
  });
  return (
    <>
      <div className="flex text-5xl flex-col justify-center gap-3 font-bold  text-green-500 h-100 items-center w-100 mx-auto ">
        <h2>Window Size</h2>
        <h2>{size} PX</h2>
      </div>
    </>
  );
};

export default CleanUpEffect;
