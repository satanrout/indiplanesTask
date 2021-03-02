import React, { useState, createContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = (props) => {
  const [person, setPerson] = useState("");
  return (
    <ChatContext.Provider value={{ person, setPerson }}>
      {props.children}
    </ChatContext.Provider>
  );
};
