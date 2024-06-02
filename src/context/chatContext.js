import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSocket } from "./socketProvider";
import { toast } from "react-toastify";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [openChat, setOpenChat] = useState(false);
  const [contactData, setContactData] = useState();
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState({});
  const socket = useSocket();

  useEffect(() => {
    socket.on("updateMessageReceiver", (data) => {
      getChat(data.id);
    });

    socket.on("Sendertyping", () => setIsTyping(true));
    socket.on("stopSendertyping", () => setIsTyping(false));

    socket.on("updateMessageSender", (data) => {
      getChat(data.id);
    });

    socket.on("addContactError", (error) => {
      toast.error(error.msg);
    });

    return () => {
      socket.off("addContactError");
      socket.off("updateMessageReceiver");
      socket.off("updateMessageSender");
      socket.off("Sendertyping");
      socket.off("stopSendertyping");
    };
  }, [socket]);

  const getChat = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_GET_CHAT_URL}/${id}`
      );
      setMessage(res.data.chatData.chat);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  const sendMessage = (data) => {
    socket.emit("sendMessage", data);
  };

  const typing = (data) => {
    socket.emit("typing", data);
  };

  const stopTyping = (data) => {
    socket.emit("stopTyping", data);
  };

  const contextValue = {
    setContactData,
    contactData,
    sendMessage,
    openChat,
    message,
    getChat,
    setOpenChat,
    typing,
    isTyping,
    stopTyping,
  };
  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
