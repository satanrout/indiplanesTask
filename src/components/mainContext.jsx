import React, { useState, createContext } from "react";

export const MainContext = createContext();

export const MainProvider = (props) => {
  const [small, setSmall] = useState(0);
  return (
    <MainContext.Provider value={{ small, setSmall }}>
      {props.children}
    </MainContext.Provider>
  );
};
