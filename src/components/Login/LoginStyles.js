import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #202c33;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  height: 60%;
  width: 30%;
  background-color: #37444c;
  border-radius: 10px;
  text-align: center;
  padding: 30px 20px;
  h1 {
    font-family: Roboto;
    color: #dadada;
  }
  h3 {
    color: #dadada;
    padding-bottom: 10px;
    font-weight: 200;
    font-size: 16px;
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
  .redirect {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .Route {
      font-family: Roboto;
      cursor: pointer;
      font-weight: 500;
      color: #fff;
      text-decoration: underline;
    }
  }
`;
export const Button = styled.button`
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
`;
