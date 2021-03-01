import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/js/src/collapse.js";
import "../App.css";

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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td>Mar 10, 2021</td>
            <td>Jan 26, 2021</td>
            <td className="priority">
              <span>completed</span>
            </td>
            <td></td>
          </tr>

          <tr className="collapse multi-collapse1" id="multiCollapseExample1">
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td></td>
            <td></td>
            <td>
              <span></span>
            </td>
            <td></td>
          </tr>

          <tr className="collapse multi-collapse1" id="multiCollapseExample1">
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td></td>
            <td></td>
            <td>
              <span></span>
            </td>
            <td></td>
          </tr>

          <tr className="collapse multi-collapse1" id="multiCollapseExample1">
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td>Mar 10, 2021</td>
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td>Mar 10, 2021</td>
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td>Mar 10, 2021</td>
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td>Mar 10, 2021</td>
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
            <td>RR37100D</td>
            <td>S270T252-7</td>
            <td>Others</td>
            <td>6</td>
            <td>Mar 10, 2021</td>
            <td>Jan 26, 2021</td>
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
