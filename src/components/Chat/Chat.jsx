import React from "react";
import { ChatMain, ChatWrap, Send, Wrapper } from "./ChatStyles";
import bg from "../../assets/images/chat-bg.png";
import addIcon from "../../assets/images/add.png";
import sendIcon from "../../assets/images/SendIcon.png";
import ChatBar from "../ChatBar/ChatBar";

const Chat = () => {
  const dummy = [
    {
      message: "Helo how are you",
      type: "sending",
      time: "2:30 pm",
    },
    {
      message: "I am fine btw who are you?",
      type: "receiving",
      time: "2:31 pm",
    },
    {
      message: "my name is areeb",
      type: "sending",
      time: "2:32 pm",
    },
    {
      message: "areeb who?",
      type: "receiving",
      time: "2:33 pm",
    },
    {
      message: "we were together in university",
      type: "sending",
      time: "2:34 pm",
    },
    {
      message: "oh i see got it how are you areeb?",
      type: "receiving",
      time: "2:35 pm",
    },
    {
      message: "I am good just have a peice of work with you",
      type: "sending",
      time: "2:36 pm",
    },
    {
      message: "neend an information regarding admission in next semester",
      type: "sending",
      time: "2:37 pm",
    },
  ];

  return (
    <Wrapper>
      <ChatBar />
      <ChatWrap image={bg}>
        <div className="bg"></div>
        <ChatMain>
          {dummy &&
            dummy.map((data) => {
              return (
                <>
                  {data.type === "sending" && (
                    <div className="sendCon">
                      <div className="send">
                        <h3>{data.message}</h3>
                        <span>{data.time}</span>
                      </div>
                    </div>
                  )}
                  {data.type === "receiving" && (
                    <div className="recevingCon">
                      <div className="receive">
                        <h3>{data.message}</h3>
                        <span>{data.time}</span>
                      </div>
                    </div>
                  )}
                </>
              );
            })}
        </ChatMain>

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
