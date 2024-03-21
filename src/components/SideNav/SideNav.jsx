import React, { useState } from "react";
import { Sidenav, Contacts, Wrapper } from "./SideStyles";
import filter from "../../assets/images/filter.png";
import avatar from "../../assets/images/avatar2.png";
import { useChatContext } from "../../context/chatContext";
import UserBar from "../userBar/UserBar";

const SideNav = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const { setOpenChat, setChatName } = useChatContext();
  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked);
  };
  const handleContactClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const sample = [
    {
      name: "Faizan uni",
      Image: avatar,
    },
    {
      name: "Asif uni",
      Image: avatar,
    },
    {
      name: "Ibrar uni",
      Image: avatar,
    },
  ];

  return (
    <Wrapper>
      <UserBar />
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
          {sample &&
            sample.map((data, index) => {
              return (
                <div
                  className={`Contact ${index === activeIndex ? "active" : ""}`}
                  onClick={() => {
                    handleContactClick(index);
                    setOpenChat(true);
                    setChatName(data.name);
                  }}
                  key={index}
                >
                  <div className="Image">
                    <img src={data.Image} alt="dp" />
                  </div>
                  <div className="Info">
                    <div className="dets">
                      <h3>{data.name}</h3>
                      <span>Yesterday</span>
                    </div>
                    <span>Yar bat sun subha nasahta karny chaly</span>
                  </div>
                </div>
              );
            })}
        </Contacts>
      </Sidenav>
    </Wrapper>
  );
};

export default SideNav;
