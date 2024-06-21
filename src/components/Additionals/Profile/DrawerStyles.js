import styled from "@emotion/styled";

export const Profile = styled.div`
  display: flex;
  .profileContainer {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background-color: #111b21;
    .profileIcon {
      height: 45px;
      width: 45px;
      object-fit: contain;
      border-radius: 50%;
      cursor: pointer;
    }
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
  padding: ${({ sm }) => (sm === true ? "10px" : "30px")};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  .ContactConPcture {
    width: 250px;
    height: 250px;
    background-color: #202c33;
    border-radius: 50%;
    cursor: pointer;
    .ContactImage {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .imageCon {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background-color: #202c33;
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
  user-select: none;
  span {
    font-family: Roboto;
    color: #00a8849c;
    user-select: none;
    font-weight: 400;
  }
  .nameWrapper {
    display: ${({ isOpen }) => (isOpen ? "none" : "block")};
    .name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      width: 100%;
      img {
        width: 25px;
        cursor: pointer;
      }
      .bio {
        transition: display 0.5s all ease-in-out;
        display: ${({ isOpen }) => (isOpen ? "none" : "block")};
      }
      .editIcon {
        transition: display 0.5s all ease-in-out;
        display: ${({ isOpen }) => (isOpen ? "none" : "block")};
      }
    }
  }

  .editWrapper {
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    margin-bottom: 20px;
    .editCon {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      img {
        width: 25px;
        cursor: pointer;
      }
      input {
        width: 100%;
        height: 40px;
        background-color: transparent;
        color: #dadada;
        border: none;
        border-bottom: 2px solid #06cf9c;
        outline: none;
        font-size: 15px;
        font-weight: 400;
        transition: display 0.5s ease-in-out;
        display: ${({ isOpen }) => (isOpen ? "block" : "none")};
      }
      .aboutIcons {
        display: ${({ isOpen }) => (isOpen ? "block" : "none")};
      }
    }
  }

  .about {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    img {
      width: 25px;
      cursor: pointer;
    }
    .bio {
      transition: display 0.5s all ease-in-out;
      display: ${({ isActive }) => (isActive ? "none" : "block")};
    }
    .editIcon {
      transition: display 0.5s all ease-in-out;
      display: ${({ isActive }) => (isActive ? "none" : "block")};
    }
    .edit {
      position: absolute;
      width: 100%;
      margin-top: 35px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
      input {
        width: 100%;
        height: 40px;
        background-color: transparent;
        color: #dadada;
        border: none;
        border-bottom: 2px solid #06cf9c;
        outline: none;
        font-size: 15px;
        font-weight: 400;
        transition: display 0.5s ease-in-out;
        display: ${({ isActive }) => (isActive ? "block" : "none")};
      }
      .aboutIcons {
        display: ${({ isActive }) => (isActive ? "block" : "none")};
      }
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
export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #3b6c6e;
  transition: background-color 0.3s ease-in-out;
  border: none;
  outline: none;
  color: #dadada;
  font-family: Roboto;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #264344;
  }
`;
export const ButtonCancel = styled.button`
  width: 150px;
  height: 40px;
  background-color: #fe5955;
  transition: background-color 0.3s ease-in-out;
  border: none;
  outline: none;
  color: #dadada;
  font-family: Roboto;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #264344;
  }
`;
