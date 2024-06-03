import React, { useEffect, useState } from "react";
import { ChatWrap, Send, Wrapper, Image, Input } from "./ChatStyles";
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
import WebcamCapture from "../Additionals/Webcam/index";
import CustomEmojiPicker from "../Additionals/EmojiPicker/index";
import MessageHandler from "../Additionals/MessageHandler/MessageHandler";
import FilePreview from "../Additionals/FilePreview/FilePreview";
import { getFileType } from "../../services/getFileType";

const Chat = () => {
  const maxSizeInMB = 10;
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  const { message, sendMessage, contactData, typing, stopTyping } =
    useChatContext();
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};
  const [messageToSend, setMessageToSend] = useState({
    senderId: userId,
    chatId: contactData.chat_id,
    receiverId: contactData.contact_id,
    message: "",
    file: "",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [fileType, setFileType] = useState("");
  const [displayfile, setDisplayFile] = useState(null);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [debounce, setDebounce] = useState(null);
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
    typing(messageToSend);

    if (debounce) clearTimeout(debounce);
    setDebounce(
      setTimeout(() => {
        stopTyping(messageToSend);
      }, 1000)
    );
  };

  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= maxSizeInBytes) {
      setMessageToSend((prev) => ({ ...prev, file }));
      handleClose();
      getFileType(setFileType, setDisplayFile, file);
      setOpenPreview(true);
    } else {
      toast.error(`You can't send a file that is bigger than ${maxSizeInMB}mb`);
    }
  };

  const requestMessage = () => {
    if (messageToSend.file !== "") {
      sendMessage(messageToSend);
      setMessageToSend((prev) => ({ ...prev, message: "", file: "" }));
      setOpenPreview(false);
    } else {
      const trimmedMessage = messageToSend.message.trim();
      if (trimmedMessage !== "") {
        sendMessage({ ...messageToSend, message: trimmedMessage });
        setMessageToSend((prev) => ({ ...prev, message: "" }));
      } else {
        toast.error("Can't send an empty message");
      }
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

      {openPreview ? (
        <FilePreview
          displayFile={displayfile}
          setDisplayFile={setDisplayFile}
          inputHandler={inputHandler}
          setOpenPreview={setOpenPreview}
          requestMessage={requestMessage}
          handleKeyDown={handleKeyDown}
          isTop={true}
          fileType={fileType}
        />
      ) : (
        <ChatWrap image={bg}>
          <div className="bg" onClick={() => setEmojiPickerOpen(false)} />

          <MessageHandler message={message} userId={userId} />

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
              <MenuItem sx={menuItemHoverStyle}>
                <Image src={Document} alt="img" />
                Document
                <Input
                  accept=".docx,.pdf,.xml,.txt,.doc,.ppt,.pptx,.zip,.rar"
                  onChange={fileHandler}
                  name="file"
                  type="file"
                />
              </MenuItem>

              <MenuItem sx={menuItemHoverStyle}>
                <Image src={photo} alt="img" className="MEnuImg" />
                Photos & videos
                <Input
                  name="file"
                  onChange={(e) => fileHandler(e)}
                  accept=".jpg,.jpeg,.png,.gif,.mp4,.mkv,.avi"
                  type="file"
                />
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
      )}

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
