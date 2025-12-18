import React, { useState } from "react";
import { data } from "./data";
import Single from "./Single";

const Birthday = () => {
  const [mydata, setMyData] = useState(data);
  const removeSingle = (id) => {
    const newData = mydata.filter((data) => data.id !== id);
    setMyData(newData);
  };
  const clearAll = () => {
    if (mydata.length === 0) {
      setMyData(data);
    } else {
      setMyData([]);
    }
  };
  return (
    <>
      <div className="w-[70%] text-center mx-auto p-5">
        <h1 className="text-5xl text-green-500 font-bold p-5">
          {mydata.length} Birthday Today
        </h1>
        <div className="w-[90% mx-auto bg-gray-400 rounded-md ]">
          {mydata.map((item, index) => {
            return (
              <Single
                key={index}
                remove={() => removeSingle(item.id)}
                {...item}
              />
            );
          })}
        </div>
        <button
          onClick={clearAll}
          className={` text-white rounded w-full cursor-pointer py-2  ${
            mydata.length == 0 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {mydata.length === 0 ? "Refresh All" : "Clear All"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
