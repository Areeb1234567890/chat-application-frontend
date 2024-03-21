import React from "react";
import ContactDets from "../Additionals/contactDets/contactDets";
import styled from "styled-components";
import menu from "../../assets/images/Menu.png";
import searchIcon from "../../assets/images/Search.png";

const ChatBar = () => {
  return (
    <Sender>
      <ContactDets />
      <div className="func">
        <div className="imgDiv">
          <img
            style={{ height: "20px", width: "20px" }}
            src={menu}
            alt="Menu"
          />
        </div>
        <div className="imgDiv">
          <img
            style={{ height: "20px", width: "20px" }}
            src={searchIcon}
            alt="Menu"
          />
        </div>
      </div>
    </Sender>
  );
};

export default ChatBar;

const Sender = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.5);
  user-select: none;
  background-color: #202c33;
  justify-content: space-between;
  padding: 0 20px;
  .func {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    flex-direction: row-reverse;
    .imgDiv {
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
    .hover {
      background-color: #dadada33;
    }
  }
`;
