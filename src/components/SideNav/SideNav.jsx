import React, { useEffect, useState } from "react";
import { Sidenav, Contacts, Wrapper } from "./SideStyles";
import filter from "../../assets/images/filter.png";
import avatar from "../../assets/images/avatar2.png";
import { useChatContext } from "../../context/chatContext";
import UserBar from "../userBar/UserBar";
import { useContactContext } from "../../context/contactContext";

const SideNav = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const { setOpenChat, setChatName, setChatImg } = useChatContext();
  const { getContacts, contacts } = useContactContext();
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};

  useEffect(() => {
    const fetch = async () => {
      if (contacts.length === 0) {
        await getContacts(userId);
      }
    };
    fetch();
  }, []);

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
          <input
            type="text"
            placeholder="Search or start a new chat"
            onChange={(e) => {
              setSearchUser(e.target.value);
            }}
            value={searchUser}
          />
          <div
            className={`IconCon ${isIconClicked ? "active" : ""}`}
            onClick={handleIconClick}
          >
            <img className="Icon" src={filter} alt="filterIcon" />
          </div>
        </div>

        <Contacts>
          {contacts && contacts.length > 0
            ? contacts
                .filter((user) =>
                  user.name.toLowerCase().includes(searchUser.toLowerCase())
                )
                .map((data, index) => {
                  return (
                    <div
                      className={`Contact ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => {
                        handleContactClick(index);
                        setOpenChat(true);
                        setChatName(data.name);
                        setChatImg(data.profileImage);
                      }}
                      key={index}
                    >
                      <div className="Image">
                        <img src={data.profileImage || avatar} alt="dp" />
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
                })
            : ""}
        </Contacts>
      </Sidenav>
    </Wrapper>
  );
};

export default SideNav;
