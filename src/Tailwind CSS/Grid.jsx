import React from "react";

const Grid = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6">Grid Test</h1>
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
          <div className="p-6 bg-blue-600 text-white rounded">Item 1</div>
          <div className="p-6 bg-green-600 text-white rounded">Item 2</div>
          <div className="p-6 bg-purple-600 text-white rounded">Item 3</div>
          <div className="p-6 bg-yellow-500 text-white rounded">Item 4</div>
          <div className="p-6 bg-red-600 text-white rounded">Item 5</div>
          <div className="p-6 bg-indigo-600 text-white rounded">Item 6</div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
