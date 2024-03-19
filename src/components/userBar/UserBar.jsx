import React from "react";
import styled from "styled-components";
import ProfileSec from "../Additionals/Profile/ProfileSec";
import NavMenu from "../Additionals/NavMenu/NavMenu";

const UserBar = () => {
  return (
    <User>
      <ProfileSec />
      <NavMenu />
    </User>
  );
};

export default UserBar;

const User = styled.div`
  width: 100%;
  height: 60px;
  user-select: none;
  border-right: 0.1px solid #dadada52;
  padding: 0px 15px;
  background-color: #202c33;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
