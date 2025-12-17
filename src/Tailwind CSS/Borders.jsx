import React from "react";

const Borders = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Borders & Shadows Test
        </h1>

        {/* Simple border */}
        <div className="p-4 border border-gray-300 rounded-lg">
          Simple Border Box
        </div>

        {/* Thick colorful border */}
        <div className="p-4 border-4 border-blue-500 rounded-xl">
          Thick Blue Border
        </div>

        {/* Shadow */}
        <div className="p-4 rounded-xl shadow-lg bg-green-500 text-white">
          Shadow Box
        </div>

        {/* Rounded Full */}
        <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-red-500 cursor-pointer">
          Rounded Full Button
        </button>
      </div>
    </div>
  );
};

export default Borders;
