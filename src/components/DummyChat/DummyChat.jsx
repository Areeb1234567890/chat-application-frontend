import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";

const DummyChat = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <h1>Select a freind to start chat</h1>
    </Container>
  );
};

export default DummyChat;

const Container = styled.div`
  width: 70%;
  height: 94.7vh;
  text-align: center;
  background-color: #222e35;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100px;
    height: 100px;
  }
  h1 {
    color: #dadada;
    font-family: Roboto;
  }
`;
