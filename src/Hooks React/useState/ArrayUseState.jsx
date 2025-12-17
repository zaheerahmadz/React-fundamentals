import React, { useState } from "react";
import { data } from "./data";
const ArrayUseState = () => {
  const [card, setCard] = useState(data);
  const handlerFun = () => {
    setCard([]);
  };
  return (
    <div className="flex justify-center flex-col container mx-auto">
      {card.map((item) => {
        const clear = (id) => {
          const newCard = card.filter((item) => item.id !== id);
          setCard(newCard);
        };
        return (
          <div className=" flex  gap-2 m-5 " key={item.id}>
            <h2 className="bg-gray-400 text-2xl p-5 text-gray-900 w-[90%]">
              {item.name}
            </h2>
            <button
              onClick={() => clear(item.id)}
              className="w-[10%] rounded-md cursor-pointer active:scale-90 px-4 py-2 bg-gray-600 text-white"
            >
              Clear
            </button>
          </div>
        );
      })}
      <button
        onClick={handlerFun}
        className=" w-[10%] mt-2 py-2 active:scale-90 text-center mx-auto bg-gray-600 text-white rounded-md cursor-pointer"
      >
        Clear All
      </button>
    </div>
  );
};

export default ArrayUseState;
