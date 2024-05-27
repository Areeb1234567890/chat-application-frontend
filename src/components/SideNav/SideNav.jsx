import React, { useEffect, useState } from "react";
import { Sidenav, Contacts, Wrapper } from "./SideStyles";
import avatar from "../../assets/images/avatar2.png";
import { useChatContext } from "../../context/chatContext";
import UserBar from "../userBar/UserBar";
import { useContactContext } from "../../context/contactContext";

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchUser, setSearchUser] = useState("");
  const { setOpenChat, setContactData, getChat } = useChatContext();
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

  const handleContactClick = (index, data) => {
    setActiveIndex(index === activeIndex ? null : index);
    setOpenChat(index === activeIndex ? false : true);
    setContactData(data);
    getChat(data.chat_id);
  };

  const closeChat = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpenChat(false);
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeChat);
    return () => {
      document.removeEventListener("keydown", closeChat);
    };
  }, []);

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
        </div>

        <Contacts>
          {contacts && contacts.length > 0 ? (
            contacts.filter((user) =>
              user.name.toLowerCase().includes(searchUser.toLowerCase())
            ).length > 0 ? (
              contacts
                .filter((user) =>
                  user.name.toLowerCase().includes(searchUser.toLowerCase())
                )
                .map((data, index) => {
                  return (
                    <div
                      className={`Contact ${
                        index === activeIndex ? "active" : ""
                      }`}
                      onClick={() => handleContactClick(index, data)}
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
                        <span>{data.message}</span>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className="noUSer">
                <span>No chats or contact found</span>
              </div>
            )
          ) : (
            <div className="noUSer">
              <span>No chats or contact found</span>
            </div>
          )}
        </Contacts>
      </Sidenav>
    </Wrapper>
  );
};

export default SideNav;
