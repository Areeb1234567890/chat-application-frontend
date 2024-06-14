import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import {
  Container,
  Handle,
  Content,
  DetailContainer,
  ButtonContainer,
} from "./ModalStyles";
import minimize from "../../../assets/images/minimize.png";
import avatar from "../../../assets/images/avatar2.png";
import maximize from "../../../assets/images/maximize.png";
import bg from "../../../assets/images/chat-bg.png";
import call from "../../../assets/images/call.png";
import { useChatContext } from "../../../context/chatContext";

const DraggableModal = () => {
  const [minimizeModal, setMinimize] = useState(false);
  const [resetPosition, setResetPosition] = useState(false);
  const draggableRef = useRef(null);
  const {
    cancelCall,
    receiverDetail,
    openCall,
    callerDetail,
    isReceiving,
    isCalling,
    declineCall,
    isDeclined,
    handleAcceptCall,
  } = useChatContext();

  useEffect(() => {
    if (resetPosition) {
      draggableRef.current.state.x = 0;
      draggableRef.current.state.y = 0;
      setTimeout(() => setResetPosition(false), 0);
    }
  }, [resetPosition]);

  const handleMinimize = () => {
    setResetPosition(true);
    setTimeout(() => setMinimize(true), 0);
  };

  const acceptCall = () => {
    handleAcceptCall({
      offer: callerDetail.offer,
      id: callerDetail.caller._id,
    });
  };

  const handleMaximize = () => {
    setMinimize(false);
  };

  const handleDeclineCall = () => {
    declineCall(callerDetail.caller._id);
  };

  const cancelOngoingCall = () => {
    cancelCall(receiverDetail._id);
  };

  if (!openCall) return null;

  return (
    <Draggable
      ref={draggableRef}
      bounds=".main"
      defaultPosition={{ x: 550, y: 80 }}
      disabled={resetPosition}
    >
      <Container size={minimizeModal}>
        <Handle size={minimizeModal}>
          <h3>
            {isCalling ? "Ongoing " : "Incoming "}Video Call
            {isDeclined && " (Declined)"}
          </h3>
          {minimizeModal ? (
            <div className="imgDiv" onClick={handleMaximize}>
              <img
                style={{ height: "20px", width: "20px" }}
                src={minimize}
                alt="Menu"
              />
            </div>
          ) : (
            <div className="imgDiv" onClick={handleMinimize}>
              <img
                style={{ height: "20px", width: "20px" }}
                src={maximize}
                alt="Menu"
              />
            </div>
          )}
        </Handle>

        <Content bg={bg}>
          <div className="bg" />
          {callerDetail && isReceiving && (
            <DetailContainer
              size={minimizeModal}
              image={callerDetail.caller.profileImage || avatar}
            >
              <div className="profileImage" />
              <div className="textCon">
                <h2>{callerDetail.caller.name}</h2>
                <h3>{callerDetail.caller.email}</h3>
              </div>
              <ButtonContainer>
                <div className="button accept" onClick={acceptCall}>
                  <img src={call} />
                </div>
                <div className="button decline" onClick={handleDeclineCall}>
                  <img src={call} />
                </div>
              </ButtonContainer>
            </DetailContainer>
          )}

          {receiverDetail && isCalling && (
            <DetailContainer
              size={minimizeModal}
              image={receiverDetail.profileImage || avatar}
            >
              <div className="profileImage" />
              {isDeclined && <h3>(Declined)</h3>}
              <div className="textCon">
                <h2>{receiverDetail.name}</h2>
                <h3>{receiverDetail.email}</h3>
              </div>
              <ButtonContainer>
                <div className="button decline" onClick={cancelOngoingCall}>
                  <img src={call} />
                </div>
              </ButtonContainer>
            </DetailContainer>
          )}
        </Content>
      </Container>
    </Draggable>
  );
};

export default DraggableModal;
