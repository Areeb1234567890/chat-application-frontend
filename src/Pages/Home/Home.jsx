import React from "react";
import TopBar from "../../components/TopBar/TopBar.jsx";
import SideNav from "../../components/SideNav/SideNav.jsx";
import Chat from "../../components/Chat/Chat.jsx";

const Home = () => {
  return (
    <div className="main">
      <TopBar />
      <div className="wrapper">
        <SideNav />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
