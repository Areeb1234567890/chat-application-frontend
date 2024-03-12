import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
  }
  span {
    color: #dadada;
    font-family: Roboto;
    font-weight: 600;
    font-size: 17px;
  }
`;
