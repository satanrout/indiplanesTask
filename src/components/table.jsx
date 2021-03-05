import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/js/src/collapse.js";
import "../App.css";
import bolt from "../assets/bolt.svg";
import clamp from "../assets/clamp.svg";
import coupling from "../assets/coupling.svg";

const Tables = ({ data }) => {
  const milsec = new Date() - new Date(data?.data?.[6]?.create_date);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <td>RFQ details</td>
            <td>Part Number</td>
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
                  {`Created ${Math.round(
                    milsec / 86400000
                  )} days ago, ${new Date(
                    data?.data?.[0]?.create_date
                  ).toLocaleDateString()}`}
                </div>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {new Date(data?.data?.[0]?.targetdate)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
            <td>
              {new Date(data?.data?.[0]?.deadline)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
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
                <div className=" title">
                  {data?.data?.[0]?.component_set?.[0]?.component_name}
                </div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>{data?.data?.[0]?.component_set?.[0]?.number}</td>

            <td>{data?.data?.[0]?.component_set?.[0]?.manufacturer}</td>
            <td>{data?.data?.[0]?.component_set?.[0]?.quantity}</td>
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
                <div className="title">
                  {data?.data?.[0]?.component_set?.[1]?.component_name}
                </div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>{data?.data?.[0]?.component_set?.[1]?.number}</td>

            <td>{data?.data?.[0]?.component_set?.[1]?.manufacturer}</td>
            <td>{data?.data?.[0]?.component_set?.[1]?.quantity}</td>
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
                <div className="title">
                  {data?.data?.[0]?.component_set?.[2]?.component_name}
                </div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>{data?.data?.[0]?.component_set?.[2]?.number}</td>
            <td>{data?.data?.[0]?.component_set?.[2]?.manufacturer}</td>
            <td>{data?.data?.[0]?.component_set?.[2]?.quantity}</td>
            <td></td>
            <td></td>
            <td>
              <span></span>
            </td>
            <td></td>
          </tr>

          <tr
            data-toggle="collapse"
            data-target=".multi-collapse2"
            aria-controls="multiCollapseExample2"
          >
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
                <div className="subtitle">{`Created ${Math.round(
                  milsec / 86400000
                )} days ago, ${new Date(
                  data?.data?.[2]?.create_date
                ).toLocaleDateString()}`}</div>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              {new Date(data?.data?.[2]?.targetdate)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
            <td>
              {new Date(data?.data?.[2]?.deadline)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
            <td className="priority">
              <span style={{ backgroundColor: "#F12B2C" }}>high</span>
            </td>
            <td></td>
          </tr>

          <tr className=" collapse multi-collapse2" id="multiCollapseExample2">
            <td className="d-flex child align-items-center">
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
                <div className=" title">
                  {data?.data?.[1]?.component_set?.[0]?.component_name}
                </div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>{data?.data?.[1]?.component_set?.[0]?.number}</td>

            <td>{data?.data?.[1]?.component_set?.[0]?.manufacturer}</td>
            <td>{data?.data?.[1]?.component_set?.[0]?.quantity}</td>
            <td></td>
            <td></td>
            <td>
              <span></span>
            </td>
            <td></td>
          </tr>

          <tr className=" collapse multi-collapse2" id="multiCollapseExample2">
            <td className="d-flex child align-items-center">
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
                B
              </div>
              <div>
                <div className=" title">
                  {data?.data?.[1]?.component_set?.[1]?.component_name}
                </div>
                <div className="subtitle"></div>
              </div>
            </td>
            <td>{data?.data?.[1]?.component_set?.[1]?.number}</td>

            <td>{data?.data?.[1]?.component_set?.[1]?.manufacturer}</td>
            <td>{data?.data?.[1]?.component_set?.[1]?.quantity}</td>
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
                <div className="title">
                  {data?.data?.[2]?.component_set?.[0]?.component_name}
                </div>
                <div className="subtitle">{`Created ${Math.round(
                  milsec / 86400000
                )} days ago, ${new Date(
                  data?.data?.[3]?.create_date
                ).toLocaleDateString()}`}</div>
              </div>
            </td>
            <td>{data?.data?.[1]?.component_set?.[2]?.number}</td>
            <td>{data?.data?.[2]?.component_set?.[0]?.manufacturer}</td>
            <td>{data?.data?.[2]?.component_set?.[0]?.quantity}</td>
            <td>
              {new Date(data?.data?.[3]?.targetdate)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
            <td>
              {new Date(data?.data?.[3]?.deadline)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
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
                <div className="title">
                  {data?.data?.[3]?.component_set?.[0]?.component_name}
                </div>
                <div className="subtitle">{`Created ${Math.round(
                  milsec / 86400000
                )} days ago, ${new Date(
                  data?.data?.[4]?.create_date
                ).toLocaleDateString()}`}</div>
              </div>
            </td>
            <td>{data?.data?.[2]?.component_set?.[0]?.number}</td>
            <td>{data?.data?.[3]?.component_set?.[0]?.manufacturer}</td>
            <td>{data?.data?.[3]?.component_set?.[0]?.quantity}</td>
            <td>
              {new Date(data?.data?.[4]?.target)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
            <td>
              {new Date(data?.data?.[4]?.deadline)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
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
                <div className="title">
                  {data?.data?.[4]?.component_set?.[0]?.component_name}
                </div>
                <div className="subtitle">{`Created ${Math.round(
                  milsec / 86400000
                )} days ago, ${new Date(
                  data?.data?.[5]?.create_date
                ).toLocaleDateString()}`}</div>
              </div>
            </td>
            <td>{data?.data?.[2]?.component_set?.[1]?.number}</td>
            <td>{data?.data?.[4]?.component_set?.[0]?.manufacturer}</td>
            <td>{data?.data?.[4]?.component_set?.[0]?.quantity}</td>
            <td>
              {new Date(data?.data?.[5]?.targetdate)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
            <td>
              {new Date(data?.data?.[5]?.deadline)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
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
                <div className="title">
                  {data?.data?.[5]?.component_set?.[0]?.component_name}
                </div>
                <div className="subtitle">{`Created ${Math.round(
                  milsec / 86400000
                )} days ago, ${new Date(
                  data?.data?.[6]?.create_date
                ).toLocaleDateString()}`}</div>
              </div>
            </td>
            <td>{data?.data?.[2]?.component_set?.[2]?.number}</td>
            <td>{data?.data?.[5]?.component_set?.[0]?.manufacturer}</td>
            <td>{data?.data?.[5]?.component_set?.[0]?.quantity}</td>
            <td>
              {new Date(data?.data?.[6]?.targetdate)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
            <td>
              {new Date(data?.data?.[6]?.deadline)
                .toDateString()
                .split(" ")
                .slice(1)
                .join(" ")}
            </td>
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
