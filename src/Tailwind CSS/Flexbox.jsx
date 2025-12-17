import React from "react";

const Flexbox = () => {
  return (
    <>
      <div className="container min-h-screen mx-auto flex item-center justify-center bg-gray-100">
        <div className=" bg-white p-8 rounded-2xl shadow-xl w-[450px]">
          <h1 className="text-2xl font-bold mb-6 text-center ">Flexbox Test</h1>
          <div className="flex gap-4 mb-6">
            <div className=" bg-blue-500 text-white p-5 rounded w-full text-center ">
              Row 1
            </div>
            <div className=" bg-green-500 text-center text-white p-5 rounded w-full">
              Row 2
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-purple-500 text-white p-3 rounded text-center">
              Column 1
            </div>
            <div className="bg-yellow-500 text-white p-3 rounded text-center">
              Column 2
            </div>
            <div className="bg-red-500 text-white p-3 rounded text-center">
              Column 3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flexbox;
