import React from "react";
import styled from "styled-components";
import SendIcon from "../../../assets/images/SendIcon.png";
import cancel from "../../../assets/images/cancel.png";

const FilePreview = ({
  displayFile,
  requestMessage,
  inputHandler,
  handleKeyDown,
  setDisplayFile,
  setOpenPreview,
  isTop,
  fileType,
}) => {
  return (
    <Container>
      {isTop && (
        <Top>
          <div className="containerSide">
            <div
              className="imgCon"
              onClick={() => {
                setOpenPreview(false);
                // setDisplayFile(null);
              }}
            >
              <img src={cancel} alt="cancel" />
            </div>
            <h3>Cancel</h3>
          </div>
        </Top>
      )}

      <div className="capturedCon">
        {!fileType && <img src={displayFile} alt="captured image" />}
        {fileType === "image" && <img src={displayFile} alt="captured image" />}
        {fileType === "video" && (
          <video controls>
            <source src={displayFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {fileType === "document" && (
          <iframe
            src={displayFile}
            frameBorder="0"
            allowFullScreen
            title="Video Preview"
          />
        )}
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
    </Container>
  );
};

export default FilePreview;

const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #0f191f;
  top: 60px;
  bottom: 0;
  .Feild {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    gap: 20px;
    .TextFeild {
      width: 55%;
      border: none;
      outline: none;
      font-size: 15px;
      height: 45px;
      font-family: Roboto;
      border-radius: 10px;
      background-color: #2a3942;
      color: #dadada;
      padding: 0 10px;
    }
    .TextFeild::placeholder {
      color: #8696a0;
      font-size: 15px;
    }
    button {
      background-color: #00a884;
      width: 50px;
      cursor: pointer;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  .capturedCon {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 30px;
    justify-content: center;
    img {
      max-width: 55%;
    }
    video,
    iframe {
      width: 60%;
      max-height: 500px;
      border: none;
    }
  }
`;

const Top = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.5);
  user-select: none;
  background-color: #202c33;
  padding: 0 20px;
  .containerSide {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    h3 {
      cursor: pointer;
    }
  }
  h3 {
    color: #dadada;
    font-weight: 400;
  }
  .imgCon {
    user-select: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #dadada33;
    }
    img {
      width: 30px;
    }
  }
`;
