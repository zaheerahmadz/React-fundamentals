import React from "react";

const Spacing = () => {
  return (
    <>
      <div className="container min-h-screen mx-auto flex item-center justify-center bg-gray-100">
        <div className=" bg-white p-8 rounded-2xl shadow-xl w-[400px]">
          <h1 className="text-2xl font-bold mb-6 text-center">Spacing Test</h1>
          <div className="flex gap-4 justify-center">
            <div className="bg-blue-500 text-white p-8 rounded">Box 1</div>
            <div className="bg-green-500 text-white p-8 rounded">Box 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spacing;
