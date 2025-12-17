import React from "react";
import { RiChatSmile3Line } from "react-icons/ri";
import { chats } from "./Chats";
import SingleCard from "./SingleCard";

const MainScreen = () => {
  return (
    <>
      <div className=" container overflow-hidden rounded-md shadow-2xl  mx-auto  xl:w-[25%] lg:w-[30%] md:w-[60%] w-[90%] mt-5 ">
        <div className=" flex gap-3 p-5 bg-green-500">
          <RiChatSmile3Line className="text-white" size={45} />
          <h4 className="text-white">
            Start Conversation <br></br> Hi! Click of member below to chat on{" "}
            <b>Whatsapp</b>
          </h4>
        </div>
        <p className="p-5 text-gray-500">
          The team typically replies in a few minutes.
        </p>
        {chats.map((item, index) => {
          return <SingleCard {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default MainScreen;
