import React from "react";

const SingleCard = ({ name, job, image }) => {
  return (
    <>
      <div className="flex my-3 mx-5 py-1 px-3 border-l-3 shadow border-green-500 items-center justify-between ">
        <div className="flex gap-4 items-center">
          <img
            src={image}
            className="w-[70px] h-[70px] rounded-full object-cover"
            alt=""
          />
          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className=" text-gray-500">{job}</p>
          </div>
        </div>
        <div className=" rounded-full bg-green-500 p-3"></div>
      </div>
    </>
  );
};

export default SingleCard;
