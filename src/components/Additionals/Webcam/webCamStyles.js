import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  background-color: #0f191f;
  top: 60px;
  bottom: 0;
  .btnCon {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      position: relative;
      top: -50px;
      background-color: #00a884;
      width: 70px;
      cursor: pointer;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      img {
        width: 35px;
        height: 35px;
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
      width: 50%;
    }
  }
`;

export const Top = styled.div`
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
