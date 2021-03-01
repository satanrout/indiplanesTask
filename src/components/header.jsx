import React, { useContext } from "react";
import { MainContext } from "./mainContext";
import Form from "react-bootstrap/Form";
import header from "../assets/header.png";
import search from "../assets/search.svg";

const Header = () => {
  const { small } = useContext(MainContext);
  return (
    <>
      <div
        style={{ marginLeft: !small ? "250px" : "50px" }}
        className="d-flex px-3 justify-content-between align-items-center"
      >
        <strong className="fs-4">RFQs</strong>
        <div
          style={{ width: "500px" }}
          className="d-flex gap-3 position-relative justify-content-end align-items-center"
        >
          <Form.Control
            className="mr-5"
            size="sm"
            style={{ width: "200px" }}
            type="text"
            placeholder="search"
          />
          <img
            src={search}
            alt="search"
            width="12px"
            height="12px"
            className="position-absolute header-search"
          />
          <div className="d-flex align-items-center">
            <span className="mr-2">Jones Ferdinand</span>
            <img src={header} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
