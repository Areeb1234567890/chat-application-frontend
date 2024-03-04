import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopBar from "./components/TopBar/TopBar.jsx";
import SideNav from "./components/SideNav/SideNav.jsx";
import Chat from "./components/Chat/Chat.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";

function App() {
  return (
    <Router>
      <>
        {/* <TopBar />
        <div className="wrapper">
          <SideNav />
          <Chat />
        </div> */}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
