import React, { useContext } from "react";
import { MainContext } from "./mainContext";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import styled from "styled-components";
import Tables from "../components/table";

const Btncon = styled.div`
  top: 0;
  right: 0;
  margin-bottom: 15px;
  button {
    padding: 5px;
    border: none;
    border-radius: 5px;
  }
`;

const Topcard = styled.div`
  padding: 10px;
  text-align: end;
  .top {
    font-size: 0.6rem;
  }
`;

const Main = () => {
  const { small } = useContext(MainContext);
  return (
    <div
      style={{ marginLeft: !small ? "250px" : "50px" }}
      className="main position-relative mt-5"
    >
      <Tabs
        style={{ backgroundColor: "#f7f8fc" }}
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
      >
        <Tab className="border border-top-0" eventKey="home" title="All RFQs">
          <div className="table-container">
            <Topcard className="small-top">
              <span className="top mx-2">Private</span>
              <span className="top mx-2">Public</span>
              <span className="top mx-2">Sort</span>
              <span className="top mx-2">Filter</span>
            </Topcard>
            <Tables />
          </div>
        </Tab>
        <Tab
          className="tab border active border-top-0"
          eventKey="profile"
          title="Active"
        >
          active
        </Tab>
        <Tab
          className="tab border archive border-top-0"
          eventKey="contact"
          title="Archive"
        >
          archive
        </Tab>
      </Tabs>
      <Btncon className="position-absolute">
        <button
          style={{
            backgroundColor: "#29CC97",
            marginRight: "10px",
            color: "white",
          }}
        >
          Create RFQs
        </button>
        <button style={{ backgroundColor: "#E2E5E7", color: "#94949E" }}>
          Drafts
        </button>
      </Btncon>
    </div>
  );
};

export default Main;
