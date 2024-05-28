import React, { useEffect, useState } from "react";
import { ChatMain, ChatWrap, Send, Wrapper, Image, Input } from "./ChatStyles";
import bg from "../../assets/images/chat-bg.png";
import addIcon from "../../assets/images/add.png";
import sendIcon from "../../assets/images/SendIcon.png";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import Document from "../../assets/images/Document.png";
import photo from "../../assets/images/photo.png";
import camerared from "../../assets/images/camerared.png";
import person from "../../assets/images/person.png";
import MenuItem from "@mui/material/MenuItem";
import micIcon from "../../assets/images/mic.png";
import emojiIcon from "../../assets/images/emojiIcon.png";
import cancelIcon from "../../assets/images/cancel.png";
import ChatBar from "../ChatBar/ChatBar";
import { useChatContext } from "../../context/chatContext";
import { toast } from "react-toastify";
import { format } from "date-fns";
import WebcamCapture from "../Additionals/Webcam/index";
import CustomEmojiPicker from "../Additionals/EmojiPicker/index";

const Chat = () => {
  const { message, sendMessage, contactData } = useChatContext();
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};
  const [messageToSend, setMessageToSend] = useState({
    senderId: userId,
    chatId: contactData.chat_id,
    receiverId: contactData.contact_id,
    message: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemHoverStyle = {
    borderRadius: "10px",
    height: "50px",
    "&:hover": {
      backgroundColor: "#182229",
    },
  };

  useEffect(() => {
    setMessageToSend((prev) => ({
      ...prev,
      chatId: contactData.chat_id,
      receiverId: contactData.contact_id,
    }));
  }, [contactData]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setMessageToSend({ ...messageToSend, [name]: value });
  };

  const requestMessage = () => {
    const trimmedMessage = messageToSend.message.trim();
    if (trimmedMessage !== "") {
      sendMessage({ ...messageToSend, message: trimmedMessage });
      setMessageToSend((prev) => ({ ...prev, message: "" }));
    } else {
      toast.error("Can't send an empty message");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      requestMessage();
    }
  };

  return (
    <Wrapper>
      <ChatBar />
      <ChatWrap image={bg}>
        <div className="bg"></div>
        <ChatMain>
          {message && message.length > 0
            ? message.map((data, index) => {
                return (
                  <>
                    {data.senderId === userId ? (
                      <div className="sendCon" key={index}>
                        <div className="send">
                          {data.attachments && (
                            <img
                              className="image"
                              src={data.attachments.url}
                              alt="image"
                            />
                          )}
                          <h3>{data.message}</h3>
                          <span>{format(new Date(data.time), "HH:mm aa")}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="recevingCon" key={index}>
                        <div className="receive">
                          {data.attachments && (
                            <img
                              className="image"
                              src={data.attachments.url}
                              alt="image"
                            />
                          )}
                          <h3>{data.message}</h3>
                          <span>{format(new Date(data.time), "HH:mm aa")}</span>
                        </div>
                      </div>
                    )}
                  </>
                );
              })
            : ""}
        </ChatMain>
        {emojiPickerOpen && (
          <CustomEmojiPicker
            onSelectEmoji={(emoji) =>
              setMessageToSend((prev) => ({
                ...prev,
                message: prev.message + emoji,
              }))
            }
          />
        )}
        <Send>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            sx={{
              "& .MuiPaper-root": {
                top: "unset !important",
                bottom: "80px",
                transform: "unset !important",
                backgroundColor: "#233138",
                color: "#dadada",
                borderRadius: "15px",
                padding: "5px",
                // width: "200px",
              },
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose} sx={menuItemHoverStyle}>
              <Image src={Document} alt="img" />
              Document
              <Input name="file" type="file" />
            </MenuItem>

            <MenuItem onClick={handleClose} sx={menuItemHoverStyle}>
              <Image src={photo} alt="img" className="MEnuImg" />
              Photos & videos
            </MenuItem>

            <MenuItem
              sx={menuItemHoverStyle}
              onClick={() => {
                setCameraOpen(true);
                handleClose();
              }}
            >
              <Image src={camerared} alt="img" className="MEnuImg" />
              Camera
            </MenuItem>

            <MenuItem sx={menuItemHoverStyle}>
              <Image src={person} alt="img" className="MEnuImg" />
              Contact
            </MenuItem>
          </Menu>

          <div
            className={`imgCon ${emojiPickerOpen ? "activate" : ""}`}
            onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
          >
            <img className="addIcon" src={emojiIcon} alt="addIcon" />
            <img className="cancelIcon" src={cancelIcon} alt="addIcon" />
          </div>

          <div
            className={`imgCon ${anchorEl !== null ? "active" : ""}`}
            onClick={handleClick}
          >
            <img className="addIcon" src={addIcon} alt="addIcon" />
          </div>
          <input
            className="TextFeild"
            type="text"
            value={messageToSend.message}
            name="message"
            onChange={(e) => inputHandler(e)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
          />
          {messageToSend.message !== "" ? (
            <div className="imgCon" onClick={() => requestMessage()}>
              <img className="addIcon" src={sendIcon} alt="addIcon" />
            </div>
          ) : (
            <div className="imgCon">
              <img className="addIcon" src={micIcon} alt="addIcon" />
            </div>
          )}
        </Send>
      </ChatWrap>

      {cameraOpen && (
        <WebcamCapture
          receiverId={messageToSend.receiverId}
          chatId={messageToSend.chatId}
          userId={userId}
          setCameraOpen={setCameraOpen}
        />
      )}
    </Wrapper>
  );
};

export default Chat;
