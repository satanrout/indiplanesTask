import React from "react";

const Notification = ({ old }) => {
  return (
    <>
      <div className="px-2 notifications">
        <strong className="strongtitle">Quotations</strong>

        <div className="cardnots mt-2 d-flex p-1 align-items-center">
          <img src={old} width="35px" height="35px" alt="old woman" />
          <div className="nots pl-2">
            <p>
              <span className="nameblue">Vendor Gabby Hawkins</span> has
              uploaded bid for <span className="nameblue">RFQ ID 32453</span>
            </p>
            <span>Feb 13th, 6:61 PM </span>
          </div>
        </div>

        <div className="cardnots mt-2 d-flex p-1 align-items-center">
          <img src={old} width="35px" height="35px" alt="old woman" />
          <div className="nots pl-2">
            <p>
              <span className="nameblue">Vendor Jacob Jones</span> has edited
              bid for <span className="nameblue">RFQ ID 12923</span>{" "}
            </p>
            <span>Feb 13th, 6:61 PM </span>
          </div>
        </div>
      </div>

      <div className="px-2 notifications">
        <strong className="strongtitle">Points</strong>

        <div className="cardnots mt-2 d-flex p-1 align-items-center">
          <img src={old} width="35px" height="35px" alt="old woman" />
          <div className="nots pl-2">
            <p>
              You have received <span className="nameblue">Blue Points</span>{" "}
              from <span className="nameblue">RFQ ID 70996</span>{" "}
            </p>
            <span>Feb 13th, 6:61 PM </span>
          </div>
        </div>

        <div className="cardnots mt-2 d-flex p-1 align-items-center">
          <img src={old} width="35px" height="35px" alt="old woman" />
          <div className="nots pl-2">
            <p>
              You have received <span className="namegreen">Green Points</span>{" "}
              from <span className="nameblue">RFQ ID 70996</span>{" "}
            </p>
            <span>Feb 13th, 6:61 PM </span>
          </div>
        </div>
      </div>

      <div className="px-2 notifications">
        <strong className="strongtitle">Deadlines Reached</strong>

        <div className="cardnots mt-2 d-flex p-1 align-items-center">
          <img src={old} width="35px" height="35px" alt="old woman" />
          <div className="nots pl-2">
            <p>
              <span className="nameblue">Operator Jacob Jones</span> has closed
              bids for <span className="nameblue">RFQ 77094</span>{" "}
            </p>
            <span>Feb 13th, 6:61 PM </span>
          </div>
        </div>

        <div className="cardnots mt-2 d-flex p-1 align-items-center">
          <img src={old} width="35px" height="35px" alt="old woman" />
          <div className="nots pl-2">
            <p>
              <span className="nameblue">Operator Leslie Alexander</span> has
              confirmed BID ID 79903 for{" "}
              <span className="nameblue">RFQ ID 73240</span>
            </p>
            <span>Feb 13th, 6:61 PM </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
