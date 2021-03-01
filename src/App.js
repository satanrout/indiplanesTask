import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import styled from "styled-components";
import Main from "./components/main";
import RightSidebar from "./components/rightSidebar";
import { MainProvider } from "./components/mainContext";

const Contain = styled.div`
  width: 100%; ;
`;

const App = () => {
  return (
    <MainProvider>
      <div className="d-flex ">
        <aside className="position-fixed">
          <Sidebar />
        </aside>

        <Contain className="px-2 middle">
          <Header />
          <Main />
        </Contain>
        <div
          className="rightbar px-2"
          style={{ minWidth: "250px", maxWidth: "250px" }}
        >
          <RightSidebar />
        </div>
      </div>
    </MainProvider>
  );
};

export default App;
