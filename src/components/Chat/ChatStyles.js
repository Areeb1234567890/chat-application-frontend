import styled from "styled-components";

export const ChatWrap = styled.div`
  width: 70%;
  height: 87vh;
  background-color: #0b141a;
  position: relative;
  .bg {
    width: 100%;
    height: 100%;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  .TextFeild {
    width: 90%;
    border: none;
    outline: none;
    height: 45px;
    font-family: Roboto;
    border-radius: 10px;
    background-color: #2a3942;
    color: #dadada;
    padding: 0 10px;
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
  .addIcon {
    width: 30px;
  }
`;
