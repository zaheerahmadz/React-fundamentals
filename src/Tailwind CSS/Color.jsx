import React from "react";

const Color = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Colors & Gradients Test
        </h1>

        {/* Solid background */}
        <div className="p-4 bg-blue-600 text-white rounded-lg">
          Solid Blue Background
        </div>

        {/* Hover color */}
        <button className="p-3 bg-green-600 text-white rounded hover:bg-green-700">
          Hover Me
        </button>

        {/* Gradient */}
        <div className="p-5 rounded-xl text-white  from-purple-500 to-pink-600">
          Beautiful Gradient Box
        </div>
      </div>
    </div>
  );
};

export default Color;
