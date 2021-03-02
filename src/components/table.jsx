import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/js/src/collapse.js";
import "../App.css";
import bolt from "../assets/bolt.svg";
import clamp from "../assets/clamp.svg";
import coupling from "../assets/coupling.svg";

const Tables = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>RFQ details</td>
            <td>Part Number</td>
            <td>Engine Number</td>
            <td>Manufacturer</td>
            <td>Quantity</td>
            <td>Target Date</td>
            <td>Deadline</td>
            <td>Priority</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr
            data-toggle="collapse"
            data-target=".multi-collapse1"
            aria-controls="multiCollapseExample1"
          >
            <td className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: "#F28D8D",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                C
              </div>
              <div>
                <div className="title">Coupling, Clamp Assy, Bolt</div>
                <div className="subtitle">
                  Created 2.5 months ago, 10.12.2020
                </div>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Apr 29, 2021</td>
            <td>Feb 15, 2021</td>
            <td className="priority">
              <span style={{ backgroundColor: "#29CC97" }}>normal</span>
            </td>
            <td></td>
          </tr>

          <tr className=" collapse multi-collapse1" id="multiCollapseExample1">
            <td className="d-flex child align-items-center">
              <img
                className="mr-2"
                src={coupling}
                alt="coupling"
                width="15px"
                height="15px"
              />
              <div
                style={{
                  backgroundColor: "#F28D8D",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                C
              </div>
              <div>
                <div className=" title">Coupling</div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>VR1029-400</td>
            <td>CFM56-7</td>
            <td>Others</td>
            <td>5</td>
            <td></td>
            <td></td>
            <td>
              <span></span>
            </td>
            <td></td>
          </tr>

          <tr className="collapse multi-collapse1" id="multiCollapseExample1">
            <td className="d-flex child align-items-center">
              <img
                className="mr-2"
                src={clamp}
                alt="clamp"
                width="15px"
                height="15px"
              />
              <div
                style={{
                  backgroundColor: "#008DC8",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                C
              </div>
              <div>
                <div className="title">Clamp Assy</div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>VR1025-350</td>
            <td>CFM56-7</td>
            <td>Others</td>
            <td>5</td>
            <td></td>
            <td></td>
            <td>
              <span></span>
            </td>
            <td></td>
          </tr>

          <tr className="collapse multi-collapse1" id="multiCollapseExample1">
            <td className="d-flex child align-items-center">
              <img
                className="mr-2"
                src={bolt}
                alt="bolt"
                width="15px"
                height="15px"
              />
              <div
                style={{
                  backgroundColor: "#A1F9A9",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                B
              </div>
              <div>
                <div className="title">Bolt</div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>ST1420-08</td>
            <td>PW4000</td>
            <td>Others</td>
            <td>7</td>
            <td></td>
            <td></td>
            <td>
              <span></span>
            </td>
            <td></td>
          </tr>

          <tr>
            <td className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: "#F1E25C",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                B
              </div>
              <div>
                <div className="title">Bracket</div>
                <div className="subtitle">Created 3 months ago, 5.02.2021</div>
              </div>
            </td>
            <td>UP60482</td>
            <td>V2500</td>
            <td>Others</td>
            <td>6</td>
            <td>Mar 10, 2021</td>
            <td>Feb 10, 2021</td>
            <td className="priority">
              <span style={{ backgroundColor: "#F12B2C" }}>high</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: "#A1DFF9",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                P
              </div>
              <div>
                <div className="title">Hydraulic Check Valve</div>
                <div className="subtitle">Created 8 months ago, 5.02.2020</div>
              </div>
            </td>
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>9</td>
            <td>Feb 26, 2021</td>
            <td>Jan 26, 2021</td>
            <td className="priority">
              <span>completed</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: "#A1DFF9",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                P
              </div>
              <div>
                <div className="title">Sensor, Temp Oil</div>
                <div className="subtitle">Created 1 year ago, 5.02.2020</div>
              </div>
            </td>
            <td>RP221-00</td>
            <td>CFM56-7</td>
            <td>Auxitrol</td>
            <td>3</td>
            <td>Jan 13, 2021</td>
            <td>Dec 16, 2020</td>
            <td className="priority">
              <span>completed</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: "#A1DFF9",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                P
              </div>
              <div>
                <div className="title">Sensor, Temp Oil</div>
                <div className="subtitle">Created 1 year ago, 5.02.2020</div>
              </div>
            </td>
            <td>RP221-00</td>
            <td>CFM56-7</td>
            <td>Auxitrol</td>
            <td>3</td>
            <td>Dec 05, 2020</td>
            <td>Nov 27, 2020</td>
            <td className="priority">
              <span>completed</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="d-flex align-items-center">
              <div
                style={{
                  backgroundColor: "#A1DFF9",
                  padding: "0 10px",
                  borderRadius: "50%",
                  color: "white",
                  fontSize: "1.7rem",
                  marginRight: "20px",
                }}
                className="c"
              >
                P
              </div>
              <div>
                <div className="title">Sensor, Temp Oil</div>
                <div className="subtitle">Created 1 year ago, 5.02.2020</div>
              </div>
            </td>
            <td>RP221-00</td>
            <td>CFM56-7</td>
            <td>Auxitrol</td>
            <td>3</td>
            <td>Nov 21, 2020</td>
            <td>Apr 26, 2020</td>
            <td className="priority">
              <span>completed</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Tables;
