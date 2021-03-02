import React, { useState, useContext, useEffect } from "react";
import old from "../assets/old.png";
import { ChatContext } from "./chatContext";
import ChatPerson from "./chatPerson";
import Messages from "./messages";
import Notification from "./notification";

const RightSidebar = () => {
  const [rightSide, setRightSide] = useState("notification");

  const { person } = useContext(ChatContext);
  useEffect(() => {
    if (person[0]?.id) {
      setRightSide("person");
    }
  }, [person]);

  return (
    <>
      <div className="d-flex righttitle">
        <span
          onClick={() => setRightSide("notification")}
          className={`w-50 py-3 text-center font-weight-bold  ${
            rightSide !== "notification" ? "bg-dark text-light" : "text-primary"
          }`}
        >
          NOTIFICATIONS
        </span>
        <span
          onClick={() => setRightSide("messages")}
          className={`w-50 py-3 text-center font-weight-bold ${
            rightSide === "notification" ? "bg-dark text-light" : "text-primary"
          }`}
        >
          MESSAGES
        </span>
      </div>
      {rightSide === "notification" ? (
        <Notification old={old} />
      ) : rightSide === "messages" ? (
        <Messages />
      ) : (
        <ChatPerson />
      )}
    </>
  );
};

export default RightSidebar;
