import React from "react";

const SingleUser = ({ login, avatar_url }) => {
  return (
    <>
      <div className="container flex flex-col">
        <h1>{login}</h1>
        <img width={50} src={avatar_url} alt="" />
      </div>
    </>
  );
};

export default SingleUser;
