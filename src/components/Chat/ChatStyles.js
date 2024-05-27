import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 70%;
`;

export const ChatWrap = styled.div`
  width: 100%;
  height: 87vh;
  background-color: #0b141a;
  position: relative;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: repeat;
    background-position: center;
    opacity: 0.1;
  }
`;

export const Send = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 40px;
  padding: 8px 20px;
  background-color: #202c33;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  .TextFeild {
    width: 90%;
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
  }
  .active {
    background-color: #dadada33;
    .addIcon {
      transform: rotate(135deg);
    }
  }
  .activate {
    background-color: #dadada33;
  }
  .addIcon {
    transition: transform 0.3s ease-in-out;
    width: 30px;
  }
`;

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
      border-radius: 4px;
      background-color: #005c4b;
      max-width: 50%;
      position: relative;
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

export const Image = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`;

export const Input = styled.input`
  opacity: 0.000001;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
