import React from "react";
import ProfileSec from "../Additionals/Profile/ProfileSec";
import NavMenu from "../Additionals/NavMenu/NavMenu";
import { Topbar } from "./TopBarStyles";

const TopBar = () => {
  return (
    <Topbar>
      <div className="user">
        <ProfileSec />
        <NavMenu />
      </div>
      <div className="sender"></div>
    </Topbar>
  );
};

export default TopBar;
