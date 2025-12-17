import React, { useState } from "react";

const ObjectUseState = () => {
  const [people, setPeople] = useState({
    name: "ahmad",
    age: 20,
    message: "random message",
  });

  const changeTitle = () => {
    setPeople({ ...people, message: "Now it is change" });
  };
  return (
    <>
      <div className="flex flex-col items-center text-center gap-5 text-6xl capitalize font-bold">
        <h1>{people.name}</h1>
        <h1>{people.age}</h1>
        <h1>{people.message}</h1>
        <button
          onClick={changeTitle}
          className="active:scale-90 px-5 py-4 rounded-md bg-green-500 text-white cursor-pointer inline-block"
        >
          Change Message
        </button>
      </div>
    </>
  );
};

export default ObjectUseState;
