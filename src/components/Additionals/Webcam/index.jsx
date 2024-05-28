import React, { useRef, useCallback, useState, useEffect } from "react";
import Webcam from "react-webcam";
import cancel from "../../../assets/images/cancel.png";
import returnIcon from "../../../assets/images/return.png";
import SendIcon from "../../../assets/images/SendIcon.png";
import { Container, Top } from "./webCamStyles";
import camera from "../../../assets/images/camera.png";
import { useChatContext } from "../../../context/chatContext";

const WebcamCapture = ({ setCameraOpen, userId, chatId, receiverId }) => {
  const webcamRef = useRef(null);
  const [openImage, setOpenImage] = useState(false);
  const [image, setImage] = useState(null);
  const { sendCameraCapture } = useChatContext();
  const [dataToSend, setDataToSend] = useState({
    file: image,
    senderId: userId,
    message: "",
    chatId,
    receiverId,
  });

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setOpenImage(true);
  }, [webcamRef]);

  useEffect(() => {
    setDataToSend((prev) => ({
      ...prev,
      file: image,
    }));
  }, [image]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setDataToSend({ ...dataToSend, [name]: value });
  };

  const requestMessage = () => {
    sendCameraCapture(dataToSend);
    setCameraOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      requestMessage();
    }
  };

  return (
    <>
      <Container>
        <Top>
          <div className="containerSide">
            <div className="imgCon" onClick={() => setCameraOpen(false)}>
              <img src={cancel} alt="cancel" />
            </div>
            <h3>Take photo</h3>
          </div>
          {image && openImage ? (
            <div className="containerSide">
              <div
                className="imgCon"
                onClick={() => {
                  setOpenImage(false);
                  setImage(null);
                }}
              >
                <img src={returnIcon} alt="cancel" />
              </div>
              <h3
                onClick={() => {
                  setOpenImage(false);
                  setImage(null);
                }}
              >
                Retake
              </h3>
            </div>
          ) : (
            ""
          )}
        </Top>
        {!openImage ? (
          <>
            <Webcam
              style={{ width: "100%", height: "550px" }}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/png"
            />
            <div className="btnCon">
              <button onClick={capture}>
                <img src={camera} alt="capture" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="capturedCon">
              <img src={image} alt="captured image" />
            </div>
            <div className="Feild">
              <input
                className="TextFeild"
                type="text"
                name="message"
                onChange={inputHandler}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
              />
              <button onClick={() => requestMessage()}>
                <img src={SendIcon} alt="capture" />
              </button>
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default WebcamCapture;
