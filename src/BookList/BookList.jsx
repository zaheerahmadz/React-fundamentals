import React from "react";
import { data } from "./data";
import Book from "./Book";
const Booklist = () => {
  return (
    <div>
      {data.map((item, index) => {
        return <Book key={index} {...item} />;
      })}
    </div>
  );
};

export default Booklist;
