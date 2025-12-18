import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    console.log("Runs on every render");
  });

  useEffect(() => {
    console.log("Runs only once");
  }, []);

  useEffect(() => {
    console.log("Runs when state changes");
  }, [state]);

  const changeState = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div className="w-[50%] flex flex-col justify-center mx-auto text-center">
      <h1 className="text-8xl">{state}</h1>
      <button
        onClick={changeState}
        className="py-3 bg-green-500 text-white font-bold w-[150px] mx-auto rounded-md hover:bg-green-600 mt-5 active:scale-90"
      >
        Change State
      </button>
    </div>
  );
};

export default UseEffectBasics;
