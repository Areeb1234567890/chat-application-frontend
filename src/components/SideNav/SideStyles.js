import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const Sidenav = styled.div`
  width: 100%;
  height: 87vh;
  background-color: #111b21;
  border-right: 0.1px solid #dadada52;
  user-select: none;
  overflow-y: hidden;
  padding-bottom: 25px;
  .Actions {
    display: flex;
    align-items: center;
    padding: 10px 15px 30px;
    input {
      width: 100%;
      height: 40px;
      background-color: #202c33;
      border: none;
      outline: none;
      border-radius: 10px;
      padding: 0 20px;
      color: #dadada;
      font-size: 15px;
    }
    input::placeholder {
      color: #8696a0;
      font-size: 15px;
    }
    .IconCon {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      cursor: pointer;
      .Icon {
        width: 15px;
        height: 15px;
      }
    }
    .active {
      background-color: #00a884;
    }
  }
`;

export const Contacts = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
  .noUSer {
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      color: #8696a0;
      font-size: 15px;
    }
  }
  .Contact {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    height: 75px;
    padding: 0 15px;
    cursor: pointer;
    &:hover {
      background-color: #2a3942;
    }
    .Image {
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .Info {
      height: 100%;
      width: 100%;
      padding: 10px 0;
      border-top: 0.1px solid #dadada52;
      span {
        color: #dadada52;
        font-size: 13px;
        font-family: Roboto;
      }
      .dets {
        width: 100%;
        display: flex;
        justify-content: space-between;
        h3 {
          color: #dadada;
          font-family: Roboto;
        }
        span {
          color: #dadada;
          font-size: 13px;
        }
      }
    }
  }
  .active {
    background-color: #2a3942;
  }
`;
