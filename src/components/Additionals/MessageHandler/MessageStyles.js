import styled from "styled-components";

export const ChatMain = styled.div`
  z-index: 1;
  width: 100%;
  max-height: 79.5vh;
  overflow-y: scroll;
  position: relative;
  padding: 15px 20px;

  .sendCon {
    width: 100%;
    display: flex;
    margin-top: 10px;
    justify-content: flex-end;
    .send {
      padding: 7px 10px 15px;
      border-radius: 6px;
      background-color: #005c4b;
      max-width: 50%;
      position: relative;
      img {
        max-width: 100%;
        max-height: 100%;
        padding: -16px;
        border-radius: 6px;
        cursor: pointer;
      }
      h3 {
        color: #dadada;
        font-family: Roboto;
        font-weight: 400;
        font-size: 16px;
        padding-right: 30px;
      }
      span {
        color: #dadada;
        font-family: Roboto;
        position: absolute;
        right: 5px;
        bottom: 2px;
        font-weight: 400;
        font-size: 10px;
      }
    }
  }
  .recevingCon {
    width: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    .receive {
      padding: 7px 10px 15px;
      position: relative;
      border-radius: 4px;
      max-width: 50%;
      background-color: #202c33;
      .image {
        max-width: 100%;
        max-height: 100%;
        padding: -12px;
        border-radius: 6px;
        cursor: pointer;
      }
      h3 {
        font-size: 16px;
        color: #dadada;
        font-family: Roboto;
        font-weight: 400;
        padding-right: 30px;
      }
      span {
        color: #dadada;
        font-family: Roboto;
        position: absolute;
        right: 5px;
        bottom: 2px;
        font-weight: 400;
        font-size: 10px;
      }
    }
  }
`;
