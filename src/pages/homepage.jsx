import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import styled from "styled-components";
import Main from "../components/main";
import RightSidebar from "../components/rightSidebar";

const Contain = styled.div`
  width: 100%;
`;

const HomePage = ({ history }) => {
  const [data, setData] = useState({});
  const access_token = localStorage.getItem("access");
  console.log(data);
  if (!access_token) {
    history.push("/login");
  }
  useEffect(() => {
    axios("https://workindipl.herokuapp.com/listofrfq/", {
      method: "GET",

      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
      .then((response) => setData(response))
      .catch((err) => console.log(err));
  }, [access_token]);

  return (
    <div className="d-flex ">
      <aside className="position-fixed">
        <Sidebar />
      </aside>

      <Contain className="px-2 middle">
        <Header />
        <Main data={data} />
      </Contain>
      <div
        className="rightbar "
        style={{ minWidth: "250px", maxWidth: "250px" }}
      >
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
