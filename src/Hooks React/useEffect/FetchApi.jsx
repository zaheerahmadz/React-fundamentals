import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";
const url = "https://api.github.com/users";
const FetchApi = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        {users.map((item, index) => {
          return <SingleUser key={index} {...item} />;
        })}
      </div>
    </>
  );
};

export default FetchApi;
