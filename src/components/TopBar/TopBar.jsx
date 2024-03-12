import React from "react";
import ProfileSec from "../Additionals/Profile/ProfileSec";
import NavMenu from "../Additionals/NavMenu/NavMenu";
import menu from "../../assets/images/Menu.png";
import searchIcon from "../../assets/images/Search.png";
import { Topbar } from "./TopBarStyles";
import ContactDets from "../Additionals/contactDets/contactDets";

const TopBar = () => {
  return (
    <Topbar>
      <div className="user">
        <ProfileSec />
        <NavMenu />
      </div>

      <div className="sender">
        <ContactDets />
        <div className="func">
          <div className="imgDiv">
            <img
              style={{ height: "20px", width: "20px" }}
              src={menu}
              alt="Menu"
            />
          </div>
          <div className="imgDiv">
            <img
              style={{ height: "20px", width: "20px" }}
              src={searchIcon}
              alt="Menu"
            />
          </div>
        </div>
      </div>
    </Topbar>
  );
};

export default TopBar;
