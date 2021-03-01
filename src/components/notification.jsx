import React from "react";

const Notification = ({ old }) => {
  return (
    <>
      <strong>Quotations</strong>

      <div className="cardnots mt-2 d-flex p-1 align-items-center">
        <img src={old} width="35px" height="35px" alt="old woman" />
        <div className="nots pl-2">
          <p>Vendor Gabby Hawkins has uploaded bid for RFQ ID 32453 </p>
          <span>Feb 13th, 6:61 PM </span>
        </div>
      </div>

      <div className="cardnots mt-2 d-flex p-1 align-items-center">
        <img src={old} width="35px" height="35px" alt="old woman" />
        <div className="nots pl-2">
          <p>Vendor Gabby Hawkins has uploaded bid for RFQ ID 32453 </p>
          <span>Feb 13th, 6:61 PM </span>
        </div>
      </div>

      <div className="cardnots mt-2 d-flex p-1 align-items-center">
        <img src={old} width="35px" height="35px" alt="old woman" />
        <div className="nots pl-2">
          <p>Vendor Gabby Hawkins has uploaded bid for RFQ ID 32453 </p>
          <span>Feb 13th, 6:61 PM </span>
        </div>
      </div>
    </>
  );
};

export default Notification;
