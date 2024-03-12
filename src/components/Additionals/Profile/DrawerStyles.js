import styled from "@emotion/styled";

export const Profile = styled.div`
  display: flex;
  .profileIcon {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 15%;
  gap: 20px;
  background-color: #202c33;
  padding: 20px 30px;
  user-select: none;
  .Arrow {
    width: 30px;
    cursor: pointer;
  }
  h3 {
    font-family: Roboto;
    color: #dadada;
  }
`;

export const ImageSec = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  .imageCon {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    background-image: url(${(props) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 0;
  }
  .hover {
    background-color: #202c33bd;
    z-index: 1;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    opacity: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    /* transition: opacity 0.2s ease-in-out; */
    img {
      width: 28px;
    }
    span {
      color: #dadada;
      font-family: Roboto;
      font-size: 13px;
    }
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
`;

export const InputSec = styled.div`
  padding: 30px 30px;
  span {
    font-family: Roboto;
    color: #00a8849c;
    user-select: none;
    font-weight: 400;
  }
  .name {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    img {
      width: 25px;
      cursor: pointer;
    }
  }
  #detail {
    font-family: Roboto;
    color: #dadada76;
    font-size: 15px;
    font-weight: 300;
    user-select: none;
  }
  h3 {
    padding: 10px 0 20px;
    color: #dadada;
    font-family: Roboto;
    font-weight: 300;
  }
`;
