import React, { useState } from "react";
import old from "../assets/old.png";
import Messages from "./messages";
import Notification from "./notification";

const RightSidebar = () => {
  const [rightSide, setRightSide] = useState("notification");

  return (
    <>
      <div className="d-flex righttitle">
        <span
          onClick={() => setRightSide("notification")}
          className={`w-50 py-3 text-center  ${
            rightSide === "messages" ? "bg-dark text-light" : "text-primary"
          }`}
        >
          NOTIFICATIONS
        </span>
        <span
          onClick={() => setRightSide("messages")}
          className={`w-50 py-3 text-center ${
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
      ) : null}
    </>
  );
};

export default RightSidebar;
