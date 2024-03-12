import React, { useState } from "react";
import { Sidenav, Contacts } from "./SideStyles";
import filter from "../../assets/images/filter.png";
import avatar from "../../assets/images/avatar2.png";

const SideNav = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
  };

  return (
    <Sidenav>
      <div className="Actions">
        <input type="text" placeholder="Search or start a new chat" />
        <div
          className={`IconCon ${isIconClicked ? "active" : ""}`}
          onClick={handleIconClick}
        >
          <img className="Icon" src={filter} alt="filterIcon" />
        </div>
      </div>

      <Contacts>
        <div className="Contact">
          <div className="Image">
            <img src={avatar} alt="dp" />
          </div>
          <div className="Info">
            <div className="dets">
              <h3>Faizan Uni</h3>
              <span>Yesterday</span>
            </div>
            <span>Yar bat sun subha nasahta karny chaly</span>
          </div>
        </div>
      </Contacts>
    </Sidenav>
  );
};

export default SideNav;
