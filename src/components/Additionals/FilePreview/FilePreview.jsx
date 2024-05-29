import React from "react";
import styled from "styled-components";
import SendIcon from "../../../assets/images/SendIcon.png";

const FilePreview = ({
  displayFile,
  requestMessage,
  inputHandler,
  handleKeyDown,
}) => {
  return (
    <Container>
      <div className="capturedCon">
        <img src={displayFile} alt="captured image" />
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
      width: 55%;
    }
  }
`;
