import React from "react";
import SideNav from "../../components/SideNav/SideNav.jsx";
import Chat from "../../components/Chat/Chat.jsx";
import DummyChat from "../../components/DummyChat/DummyChat.jsx";
import { useChatContext } from "../../context/chatContext.js";
import DraggableModal from "../../components/Additionals/DraggableModel/Draggable.jsx";

const Home = () => {
  const { openChat } = useChatContext();

  return (
    <div className="main">
      <DraggableModal />
      <div className="wrapper">
        <SideNav />
        {openChat === true ? <Chat /> : <DummyChat />}
      </div>
    </div>
  );
};

export default Home;
