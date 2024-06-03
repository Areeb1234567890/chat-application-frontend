import React, { useState } from "react";
import { Container, Typing, Top, Info, Break } from "./DrawerStyles";
import { ImageSec } from "../Profile/DrawerStyles";
import avatar from "../../../assets/images/avatar2.png";
import Drawer from "@mui/material/Drawer";
import { useChatContext } from "../../../context/chatContext";
import cancel from "../../../assets/images/cancel.png";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const ContactDets = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    boxShadow: 0,
    borderRadius: "15px",
  };
  const [state, setState] = React.useState({
    right: false,
  });
  const anchor = "right";
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { contactData, isTyping } = useChatContext();
  const [open3, setOpen3] = useState(false);
  const handleClose2 = () => {
    setOpen3(false);
  };
  return (
    <Container>
      <div className="imgCon">
        <img
          src={contactData.profileImage || avatar}
          alt="Image"
          onClick={toggleDrawer(anchor, true)}
        />
      </div>
      <div className="wrap">
        <span>{contactData.name}</span> <br />
        {isTyping && <Typing>typing...</Typing>}
      </div>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#111B21",
            width: "30%",
          },
        }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        <Top>
          <img
            className="Arrow"
            src={cancel}
            alt="arrow"
            onClick={toggleDrawer(anchor, false)}
          />
          <h3>Contact info</h3>
        </Top>
        <ImageSec sm={true}>
          <div className="ContactConPcture">
            <img
              onClick={() => setOpen3(true)}
              src={contactData.profileImage || avatar}
              className="ContactImage"
            />
          </div>
          <Modal
            open={open3}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
              className="ModalBody"
              onClick={() => {
                handleClose2();
              }}
            >
              <div
                style={{ position: "relative", width: "100%", height: "100%" }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    objectFit: "contain",
                  }}
                  className="profileIcon"
                  src={contactData.profileImage || avatar}
                  alt="profile"
                />
              </div>
            </Box>
          </Modal>
        </ImageSec>
        <Info>
          <h3>{contactData.name}</h3>
          <span>{contactData.email}</span>
        </Info>
        <Break />
      </Drawer>
    </Container>
  );
};

export default ContactDets;
