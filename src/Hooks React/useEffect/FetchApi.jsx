import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
const url = "https://api.github.com/users";
const FetchApi = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className=" w-full bg-gray-100">
        <h1 className=" rounded-md p-5 w-[85%] mx-auto shadow-lg text-center capitalize text-5xl font-bold my-5 bg-black text-white">
          API Data Fetching and Rendering in React
        </h1>
        <div className=" container p-5 shadow-lg bg-gray-200 mx-auto justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((item, index) => {
            return <SingleUser key={index} {...item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FetchApi;
