import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .imgCon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: #111b21;
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      cursor: pointer;
      object-fit: contain;
    }
  }

  span {
    color: #dadada;
    font-family: Roboto;
    font-weight: 500;
    font-size: 17px;
  }
`;

export const Typing = styled.h3`
  font-size: 15px;
  color: #06cf9c;
`;

export const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 10px;
  height: 10%;
  /* background-color: #202c33; */
  padding: 10px 30px;
  user-select: none;
  .Arrow {
    width: 30px;
    cursor: pointer;
  }
  h3 {
    font-family: Roboto;
    color: #dadada;
    font-weight: 400;
  }
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    color: #dadada;
    font-size: 20px;
    font-weight: 600;
  }
  span {
    color: #dadada;
    font-size: 15px;
    font-weight: 300;
  }
`;

export const Break = styled.div`
  width: 100%;
  margin-top: 25px;
  height: 15px;
  background-color: #0c1317;
`;
