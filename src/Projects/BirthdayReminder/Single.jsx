import React from "react";

const Single = ({ firstName, age, img, remove }) => {
  return (
    <>
      <section className="bg-gray-200 shadow-lg flex justify-between items-center px-5">
        <div className=" p-5 flex gap-5">
          <img
            className="h-[70px] w-[70px] rounded-full object-cover hover:scale-120 transition-all duration-200 cursor-pointer"
            src={img}
            alt=""
          />
          <div className=" flex flex-col item-center justify-center">
            <h2 className="text-green-500 font-bold text-2xl">{firstName}</h2>
            <p className="text-1xl text-gray-500 text-start">{age} Years</p>
          </div>
        </div>
        <div>
          <button
            onClick={remove}
            className="bg-red-500 transition-all duration-200 px-5 py-3 cursor-pointer active:scale-90 hover:bg-red-600 text-white rounded"
          >
            Clear
          </button>
        </div>
      </section>
    </>
  );
};

export default Single;
