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
