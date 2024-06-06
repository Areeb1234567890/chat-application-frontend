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
import maximize from "../../../assets/images/maximize.png";
import bg from "../../../assets/images/chat-bg.png";
import call from "../../../assets/images/call.png";
import { useChatContext } from "../../../context/chatContext";

const DraggableModal = () => {
  const [minimizeModal, setMinimize] = useState(false);
  const [resetPosition, setResetPosition] = useState(false);
  const draggableRef = useRef(null);
  const {
    openCall,
    callerDetail,
    isReceiving,
    isCalling,
    declineCall,
    contactData,
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

  const handleMaximize = () => {
    setMinimize(false);
  };

  const handleDeclineCall = () => {
    declineCall(callerDetail._id);
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
          <h3>{isCalling ? "Ongoing " : "Incoming "}Video Call</h3>
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
              image={callerDetail.profileImage}
            >
              <div className="profileImage" />
              <div className="textCon">
                <h2>{callerDetail.name}</h2>
                <h3>{callerDetail.email}</h3>
              </div>
              <ButtonContainer>
                <div className="button accept">
                  <img src={call} />
                </div>
                <div className="button decline" onClick={handleDeclineCall}>
                  <img src={call} />
                </div>
              </ButtonContainer>
            </DetailContainer>
          )}

          {contactData && isCalling && (
            <DetailContainer
              size={minimizeModal}
              image={contactData.profileImage}
            >
              <div className="profileImage" />
              <div className="textCon">
                <h2>{contactData.name}</h2>
                <h3>{contactData.email}</h3>
              </div>
              <ButtonContainer>
                <div className="button decline">
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
