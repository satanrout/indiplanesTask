import React, { useContext } from "react";
import { ChatContext } from "./chatContext";

import { MessageData } from "../data/messagedata";

const MessageRow = ({ inputData }) => {
  const filterChat = MessageData.filter((chat) =>
    chat.name.toLowerCase().includes(inputData.toLowerCase())
  );

  const { setPerson } = useContext(ChatContext);

  return (
    <>
      {filterChat.map((data) => (
        <div
          onClick={() => {
            setPerson(
              MessageData.filter((message) => message?.id === data?.id)
            );
          }}
          key={data.id}
          className="border-bottom pb-2 d-flex justify-content-between align-items-center mt-3"
        >
          <div className="chat d-flex">
            <img src={data.image} width="35px" height="35px" alt="old" />
            <div>
              <div className="name">{data.name}</div>
              <div className="new">
                {data.messageStatus} <span>*{data.lastSeen}*</span>
              </div>
            </div>
          </div>
          <div className="msgicon position-relative">
            <img src={data.icon} width="100%" height="100%" alt="msgicon" />
            <div className="position-absolute">{data.messageCount}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageRow;
