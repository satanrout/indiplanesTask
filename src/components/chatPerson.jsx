import React, { useContext } from "react";
import { ChatContext } from "./chatContext";
import old from "../assets/old.png";
import send from "../assets/send.svg";

const ChatPerson = () => {
  const { person } = useContext(ChatContext);

  return (
    <div className="px-2 position-relative chatperson">
      <div className="border-bottom pb-2 pt-2 d-flex justify-content-between align-items-center mt-3 border-top">
        <div className="chat d-flex">
          <img src={old} width="35px" height="35px" alt="old" />
          <div>
            <div className="name">{person[0]?.name}</div>
            <div className="new">online</div>
          </div>
        </div>
        <div className="pcl">Private Chat List</div>
      </div>

      <div className="chatRow greyone">
        <p>1:50 pm</p>
      </div>
      <div className="chatRow blueone">
        <p>1:51 pm</p>
      </div>
      <div className="chatRow greyone">
        <p>1:51 pm</p>
      </div>
      <div className="chatRow blueone">
        <p>1:52 pm</p>
      </div>
      <div className="chatRow blueone">
        <p>1:52 pm</p>
      </div>
      <div className="chatRow greyone loading">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="d-flex position-fixed send">
        <input type="text" />
        <div className="d-flex justify-content-center align-items-center">
          <img
            className="mr-3"
            src={send}
            width="25px"
            height="25px"
            alt="send"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPerson;
