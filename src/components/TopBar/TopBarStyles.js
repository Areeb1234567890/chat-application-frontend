import styled from "styled-components";

export const Topbar = styled.div`
  width: 100%;
  height: 60px;
  background-color: #202c33;
  user-select: none;
  display: flex;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    .func {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      flex-direction: row-reverse;
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
    }
  }
`;
