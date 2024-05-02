import styled from "styled-components";

export const Menus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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
`;

export const ModalInner = styled.form`
  width: 100%;
  height: 100%;
  h3 {
    color: #dadada;
    font-family: Roboto;
    font-weight: 400;
  }
  button {
    width: 100%;
    height: 45px;
    background-color: #3b6c6e;
    transition: background-color 0.3s ease-in-out;
    border: none;
    outline: none;
    border-radius: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
    color: #dadada;
    font-family: Roboto;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      background-color: #264344;
    }
  }
  input {
    margin-top: 20px;
    height: 45px;
    width: 100%;
    border-radius: 15px;
    border: none;
    background-color: #202c33;
    padding: 0 20px;
    font-size: 15px;
    color: #dadada;
  }
`;
