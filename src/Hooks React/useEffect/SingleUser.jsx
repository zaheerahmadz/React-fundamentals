import React from "react";

const SingleUser = ({ login, avatar_url }) => {
  return (
    <>
      <div className="container flex flex-col gap-5 p-5 items-center justify-center">
        <img
          className="rounded-full cursor-pointer hover:scale-110 transition-all duration-200"
          width={200}
          src={avatar_url}
          alt=""
        />
        <h2 className="text-center w-[200px] capitalize text=2xl font-bold">
          {login}
        </h2>
      </div>
    </>
  );
};

export default SingleUser;
