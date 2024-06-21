import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSocket } from "./socketProvider";
import { toast } from "react-toastify";
import { useRtc } from "./rtcContext";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};
  const [openChat, setOpenChat] = useState(false);
  const [contactData, setContactData] = useState();
  const [isTyping, setIsTyping] = useState(false);
  const [message, setMessage] = useState({});
  const [openCall, setOpenCall] = useState(false);
  const [callerDetail, setCallerDetail] = useState();
  const [receiverDetail, setReceiverDetail] = useState();
  const [isAccepted, setIsAccepted] = useState(false);
  const [isReceiving, setIsReceiving] = useState(false);
  const [isCalling, setIsCalling] = useState(false);
  const [isDeclined, setIsDeclined] = useState(false);
  const socket = useSocket();
  const { createAnswer, rejectOffer, saveAnswer, peer, createOffer } = useRtc();

  useEffect(() => {
    const handleUpdateMessageReceiver = (data) => {
      getChat(data.id);
    };
    const handleSendertyping = () => setIsTyping(true);
    const handleStopSendertyping = () => setIsTyping(false);
    const handleReceiverDataVideoCall = (data) => {
      setReceiverDetail(data.receiver);
    };
    const handleCallDeclined = () => {
      handelDeclinedCall();
    };
    const handleIncomingVideoCall = (data) => {
      incomingVideoCall(data);
    };
    const handleUpdateMessageSender = (data) => {
      getChat(data.id);
    };
    const handleAddContactError = (error) => {
      toast.error(error.msg);
    };
    const handelNegStarted = (data) => {
      answerNeg(data);
    };
    const handelNegAnswer = (data) => {
      manageNegAnswer(data);
    };

    socket.on("updateMessageReceiver", handleUpdateMessageReceiver);
    socket.on("call-accepted-by-receiver", acceptedCallHandling);
    socket.on("Sendertyping", handleSendertyping);
    socket.on("stopSendertyping", handleStopSendertyping);
    socket.on("receiver_Data-video_call", handleReceiverDataVideoCall);
    socket.on("call-declined", handleCallDeclined);
    socket.on("incomming-Video_call", handleIncomingVideoCall);
    socket.on("updateMessageSender", handleUpdateMessageSender);
    socket.on("addContactError", handleAddContactError);
    socket.on("call-cancelled", handleCancelledCall);
    socket.on("negotiation:started", handelNegStarted);
    socket.on("negotiation:receiveAnswer", handelNegAnswer);

    return () => {
      socket.off("call-accepted-by-receiver", acceptedCallHandling);
      socket.off("updateMessageReceiver", handleUpdateMessageReceiver);
      socket.off("Sendertyping", handleSendertyping);
      socket.off("stopSendertyping", handleStopSendertyping);
      socket.off("receiver_Data-video_call", handleReceiverDataVideoCall);
      socket.off("call-declined", handleCallDeclined);
      socket.off("incomming-Video_call", handleIncomingVideoCall);
      socket.off("updateMessageSender", handleUpdateMessageSender);
      socket.off("addContactError", handleAddContactError);
      socket.off("call-cancelled", handleCancelledCall);
      socket.off("negotiation:started", handelNegStarted);
      socket.off("negotiation:receiveAnswer", handelNegAnswer);
    };
  }, [socket]);

  const handleNegotiation = async () => {
    if (isCalling) {
      const offer = await createOffer();
      socket.emit("negotiation:init", {
        receiver: receiverDetail._id,
        offer: offer,
        caller: userId,
      });
    }
  };

  useEffect(() => {
    peer.addEventListener("negotiationneeded", handleNegotiation);
    return () => {
      peer.removeEventListener("negotiationneeded", handleNegotiation);
    };
  }, [peer, handleNegotiation]);

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
    setCallerDetail(data);
    setOpenCall(true);
    setIsReceiving(true);
  };

  const answerNeg = async (data) => {
    const { offer, caller } = data;
    const answer = await createAnswer(offer);
    socket.emit("negotiation:answer", {
      answer: answer,
      caller: caller,
    });
  };

  const manageNegAnswer = async (data) => {
    const { answer } = data;
    await saveAnswer(answer);
  };

  const handleAcceptCall = async (data) => {
    const { offer, id } = data;
    const answer = await createAnswer(offer);
    socket.emit("call-accepted", { answer, id });
    setIsAccepted(true);
  };

  const acceptedCallHandling = async (data) => {
    const { answer } = data;
    await saveAnswer(answer);
    setIsAccepted(true);
  };

  const declineCall = (data) => {
    socket.emit("decline-call", data);
    setOpenCall(false);
    setCallerDetail(null);
    setIsAccepted(false);
  };

  const handelDeclinedCall = async () => {
    await rejectOffer();
    setIsDeclined(true);
    setTimeout(() => {
      setOpenCall(false);
      setIsCalling(false);
      setIsAccepted(false);
      setIsDeclined(false);
      setReceiverDetail(null);
    }, 1000);
  };

  const handleCancelledCall = async () => {
    setOpenCall(false);
    setIsCalling(false);
    setIsAccepted(false);
    setCallerDetail(null);
  };

  const videoCall = (data) => {
    socket.emit("videoCall-user", data);
    setOpenCall(true);
    setIsCalling(true);
    setIsAccepted(false);
    setReceiverDetail(null);
  };

  const cancelCall = async (data) => {
    socket.emit("cancel-Call", data);
    await rejectOffer();
    setOpenCall(false);
    setIsCalling(false);
    setIsAccepted(false);
    setReceiverDetail(null);
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
    isAccepted,
    handleAcceptCall,
    cancelCall,
    receiverDetail,
    isDeclined,
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
