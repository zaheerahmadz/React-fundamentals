import React, { useState } from "react";

const ChangeTitle = () => {
  const [text, setText] = useState("This is Heading ONE");
  const handlerFun = () => {
    if (text === "This is Heading ONE") {
      setText("This is Heading TWO");
    } else {
      setText("This is Heading ONE");
    }
  };
  return (
    <>
      <div className="gap-4 container mx-auto flex flex-col justify-center my-5 ">
        <h1 className="text-center text-green-500 text-5xl">{text}</h1>
        <button
          onClick={handlerFun}
          className="  cursor-pointer active:scale-90 hover:bg-green-500 transition-all duration-200 px-3 py-2 bg-red-500  text-white w-fit d-block mx-auto rounded-md "
        >
          Change Title
        </button>
      </div>
    </>
  );
};

export default ChangeTitle;
