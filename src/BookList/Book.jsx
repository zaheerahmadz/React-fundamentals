import React from "react";

const Book = ({ img, title, author }) => {
  const handlerFun = () => {
    alert("Hi zaheer");
  };
  const GetAuthor = (author) => {
    console.log(author);
  };
  return (
    <>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        type="button"
        onClick={handlerFun}
      >
        Click It
      </button>
      <button type="button" onClick={() => GetAuthor(author)}>
        A
      </button>
    </>
  );
};

export default Book;
