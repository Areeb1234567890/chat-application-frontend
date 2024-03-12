import React from "react";
import { ChatWrap, Send } from "./ChatStyles";
import bg from "../../assets/images/chat-bg.png";
import addIcon from "../../assets/images/add.png";
import sendIcon from "../../assets/images/SendIcon.png";

const Chat = () => {
  return (
    <ChatWrap image={bg}>
      <div className="bg"></div>

      <Send>
        <div className="imgCon">
          <img className="addIcon" src={addIcon} alt="addIcon" />
        </div>
        <input
          className="TextFeild"
          type="text"
          placeholder="Type a message..."
        />
        <div className="imgCon">
          <img className="addIcon" src={sendIcon} alt="addIcon" />
        </div>
      </Send>
    </ChatWrap>
  );
};

export default Chat;
