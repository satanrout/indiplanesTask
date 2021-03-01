import React, { useState, useContext } from "react";
import { MainContext } from "./mainContext";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import dashboard from "../assets/dashboard.svg";
import rfq from "../assets/rfq.svg";
import vendors from "../assets/vendors.svg";
import operators from "../assets/operators.svg";
import help from "../assets/help.svg";
import toggle from "../assets/toggle.svg";

const StyledCol = styled(Col)`
  span {
    display: ${(p) => (p.compact ? "none" : null)};
  }
`;

const Sidebar = (props) => {
  const [compact, setCompact] = useState(0);

  const { small, setSmall } = useContext(MainContext);

  return (
    <>
      <Col
        style={{
          color: "#A4A6B3",
          width: compact ? "50px" : "250px",
          transition: "ease-in .1s",
          zIndex: 2,
        }}
        className="vh-100 font-weight-bold bg-dark px-0 "
      >
        <StyledCol
          compact={compact}
          className=" py-3 border-bottom border-secondary"
        >
          <img
            alt="icon"
            onClick={() => {
              setCompact(Number(!compact));
              setSmall(Number(!small));
            }}
            className="mr-3"
            width="16px"
            src={toggle}
          />{" "}
          <span></span>
        </StyledCol>
        <StyledCol
          compact={compact}
          className="border-bottom py-3 border-secondary"
        >
          <img alt="icon" className="mr-3" width="16px" src={dashboard} />{" "}
          <span>User Dashboard</span>
        </StyledCol>
        <StyledCol
          compact={compact}
          className="border-bottom py-3 border-secondary"
        >
          <img alt="icon" className="mr-3" width="16px" src={rfq} />{" "}
          <span>RFQs</span>
        </StyledCol>
        <StyledCol
          compact={compact}
          className="border-bottom py-3 border-secondary"
        >
          <img alt="icon" className="mr-3" width="16px" src={vendors} />{" "}
          <span>Vendors</span>
        </StyledCol>
        <StyledCol
          compact={compact}
          className="border-bottom py-3 border-secondary"
        >
          <img alt="icon" className="mr-3" width="16px" src={operators} />{" "}
          <span>Operators</span>
        </StyledCol>
        <StyledCol
          compact={compact}
          className="border-bottom py-3 border-secondary"
        >
          <img alt="icon" className="mr-3" width="16px" src={help} />{" "}
          <span>Help</span>
        </StyledCol>
      </Col>
    </>
  );
};

export default Sidebar;
