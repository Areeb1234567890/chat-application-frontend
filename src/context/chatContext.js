import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSocket } from "./socketProvider";
import { toast } from "react-toastify";
import { useRtc } from "./rtcContext";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [openChat, setOpenChat] = useState(false);
  const [contactData, setContactData] = useState();
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState({});
  const [openCall, setOpenCall] = useState(false);
  const [callerDetail, setCallerDetail] = useState();
  const [isReceiving, setIsReceiving] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const socket = useSocket();
  const { createAnswer, rejectOffer } = useRtc();

  useEffect(() => {
    socket.on("updateMessageReceiver", (data) => {
      getChat(data.id);
    });
    socket.on("Sendertyping", () => setIsTyping(true));
    socket.on("stopSendertyping", () => setIsTyping(false));
    socket.on("call-declined", () => {
      handelDeclinedCall();
    });

    socket.on("incomming-Video_call", (data) => {
      incomingVideoCall(data);
    });

    socket.on("updateMessageSender", (data) => {
      getChat(data.id);
    });

    socket.on("addContactError", (error) => {
      toast.error(error.msg);
    });

    return () => {
      socket.off("addContactError");
      socket.off("call-declined");
      socket.off("updateMessageReceiver");
      socket.off("updateMessageSender");
      socket.off("Sendertyping");
      socket.off("incomming-Video_call");
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

  const incomingVideoCall = (data) => {
    setCallerDetail(data.caller);
    setOpenCall(true);
    setIsReceiving(true);
    // const answer = await createAnswer(offer);
  };

  const declineCall = (data) => {
    socket.emit("decline-call", data);
    setOpenCall(false);
  };

  const handelDeclinedCall = async () => {
    await rejectOffer();
    setOpenCall(false);
  };

  const sendMessage = (data) => {
    socket.emit("sendMessage", data);
  };

  const videoCall = (data) => {
    socket.emit("videoCall-user", data);
    setOpenCall(true);
    setIsCalling(true);
  };

  const typing = (data) => {
    socket.emit("typing", data);
  };

  const stopTyping = (data) => {
    socket.emit("stopTyping", data);
  };

  const contextValue = {
    declineCall,
    videoCall,
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
    openCall,
    setOpenCall,
    callerDetail,
    isReceiving,
    isCalling,
  };
  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
