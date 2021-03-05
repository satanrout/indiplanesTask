import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { MainProvider } from "./components/mainContext";
import { ChatProvider } from "./components/chatContext";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/loginpage";

const App = () => {
  return (
    <Router>
      <MainProvider>
        <ChatProvider>
          <Route exact path="/" component={HomePage} />
        </ChatProvider>
      </MainProvider>
      <Route exact path="/login" component={LoginPage} />
    </Router>
  );
};

export default App;
