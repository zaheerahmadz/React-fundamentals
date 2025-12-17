import React, { useState } from "react";

export const Count = () => {
  const [Title, setTitle] = useState(0);
  const handleTitle = (e) => {
    if (e.target.innerText == "Inc") {
      setTitle(Title + 1);
    } else if (e.target.innerText == "Re") {
      setTitle(0);
    } else {
      setTitle(Title - 1);
    }
  };
  return (
    <>
      <div className="mx-auto p-4 text-center">
        <h1
          className={`text-9xl mb-8 ${
            Title > 0
              ? "text-green-500 "
              : Title == 0
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {Title}
        </h1>
        <div className="flex justify-center gap-6">
          <button
            onClick={handleTitle}
            className="cursor-pointer active:scale-90 bg-red-500 hover:bg-red-600 px-6 py-3 text-white rounded-full shadow-md transition duration-300"
          >
            Dec
          </button>
          <button
            onClick={handleTitle}
            className="cursor-pointer active:scale-90 bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-white rounded-full shadow-md transition duration-300"
          >
            Re
          </button>
          <button
            onClick={handleTitle}
            className="cursor-pointer active:scale-90 bg-green-500 hover:bg-green-600 px-6 py-3 text-white rounded-full shadow-md transition duration-300"
          >
            Inc
          </button>
        </div>
      </div>
    </>
  );
};

export default Count;
