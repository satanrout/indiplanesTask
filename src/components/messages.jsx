import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import search1 from "../assets/search1.svg";
import MessageRow from "./messageRow";

const Messages = () => {
  const [inputData, setInputData] = useState("");

  return (
    <>
      <div className="message-form d-flex mt-2">
        <Form.Control
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          type="text"
          placeholder="search"
        />
        <img src={search1} alt="search" width="35px" height="35px" />
      </div>
      <div className="message-sec d-flex mt-3">
        <div className="message-icon d-flex flex-md-column align-items-center">
          <span>O</span>
          <div>Operators</div>
        </div>
        <div className="message-icon d-flex flex-md-column align-items-center">
          <span>V</span>
          <div>Vendors</div>
        </div>
        <div className="d-flex btncon align-items-center">
          <button className="public">Public</button>
          <button className="private">Private</button>
        </div>
      </div>

      {/* chats row */}

      <MessageRow inputData={inputData} />
    </>
  );
};

export default Messages;
