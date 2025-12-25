import React, { useRef } from "react";

const CountChange = () => {
  const ref = useRef(0);

  const handlerFun = () => {
    ref.current = ref.current + 1;
    alert(`Your Count is ${ref.current}`);
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <button
          onClick={handlerFun}
          type="button"
          className="rounded-md my-5 mx-auto  px-5 py-2 bg-green-500 text-white cursor-pointer "
        >
          Change Count
        </button>
      </div>
    </>
  );
};

export default CountChange;
