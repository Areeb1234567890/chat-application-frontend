import React from "react";
import { ChatWrap, Send, Wrapper } from "./ChatStyles";
import bg from "../../assets/images/chat-bg.png";
import addIcon from "../../assets/images/add.png";
import sendIcon from "../../assets/images/SendIcon.png";
import ChatBar from "../ChatBar/ChatBar";

const Chat = () => {
  return (
    <Wrapper>
      <ChatBar />
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
    </Wrapper>
  );
};

export default Chat;
