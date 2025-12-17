import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="https://www.hollywoodreporter.com/wp-content/uploads/2012/12/img_logo_blue.jpg?w=1440&h=810&crop=1"
            alt="Example"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Example Card
          </div>
          <p className="mt-2 text-gray-500">
            This is an example of a simple card styled with Tailwind CSS
            utilities.
          </p>
          <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
