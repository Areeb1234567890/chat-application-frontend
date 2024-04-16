import { createContext, useContext, useState } from "react";
import axios from "axios";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [openChat, setOpenChat] = useState(false);
  const [chatName, setChatName] = useState("");
  const [chatImg, setChatImg] = useState();

  const contextValue = {
    openChat,
    setOpenChat,
    chatName,
    setChatName,
    chatImg,
    setChatImg,
  };
  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
