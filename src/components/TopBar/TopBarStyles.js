import styled from "styled-components";

export const Topbar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #202c33;
  user-select: none;
  .user {
    width: 30%;
    height: 100%;
    border-right: 0.1px solid #dadada52;
    padding: 0px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sender {
    width: 70%;
  }
`;
