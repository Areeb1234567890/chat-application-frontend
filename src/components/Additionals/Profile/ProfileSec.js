import React, { useState } from "react";
import avatar from "../../../assets/images/avatar2.png";
import Drawer from "@mui/material/Drawer";
import arrow from "../../../assets/images/Arrow-back.png";
import cameraIcon from "../../../assets/images/camera.png";
import editIcon from "../../../assets/images/edit.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Profile, Top, ImageSec, InputSec } from "./DrawerStyles";

const ProfileSec = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "70%",
    boxShadow: 0,
    borderRadius: "15px",
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open2 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemHoverStyle = {
    position: "relative",
    "&:hover": {
      backgroundColor: "#182229",
    },
  };
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => {
    setOpen3(true);
  };
  const handleClose2 = () => {
    setOpen3(false);
  };

  const _token = sessionStorage.getItem("authUser");
  const { profilePicture, name, bio } = _token ? JSON.parse(_token) : {};

  return (
    <Profile>
      <img
        className="profileIcon"
        src={profilePicture || avatar}
        alt="profile"
        onClick={toggleDrawer(true)}
      />
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#111B21",
            width: "30%",
          },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Top>
          <img
            className="Arrow"
            src={arrow}
            alt="arrow"
            onClick={toggleDrawer(false)}
          />
          <h3>Profile</h3>
        </Top>

        <ImageSec image={profilePicture || avatar}>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open2}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#222E35",
                color: "#dadada",
              },
            }}
            TransitionComponent={Fade}
          >
            <MenuItem sx={menuItemHoverStyle} onClick={handleClose}>
              Upload photo
              <input
                style={{
                  opacity: "0.000001",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                }}
                type="file"
              />
            </MenuItem>
            <MenuItem sx={menuItemHoverStyle} onClick={handleClose}>
              Remove photo
            </MenuItem>
            <MenuItem
              sx={menuItemHoverStyle}
              onClick={() => {
                handleClose();
                handleOpen();
              }}
            >
              View photo
            </MenuItem>
          </Menu>
          <Modal
            open={open3}
            onClose={handleClose2}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="ModalBody">
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
                  src={profilePicture || avatar}
                  alt="profile"
                />
              </div>
            </Box>
          </Modal>

          <div className="imageCon" onClick={handleClick}>
            <div className={`hover ${open2 ? "active" : ""}`}>
              <img src={cameraIcon} alt="icon" />
              <span>
                CHANGE <br /> PROFILE PHOTO
              </span>
            </div>
          </div>
        </ImageSec>

        <InputSec>
          <span>Your name</span>
          <div className="name">
            <h3>{name}</h3>
            <img src={editIcon} alt="" />
          </div>

          <span id="detail">
            This is not your username or pin. This name will be visible to your
            Chat contacts.
          </span>
          <br />
          <div style={{ marginTop: "25px" }}>
            <span>About</span>
            <div className="name">
              <h3>{bio}</h3>
              <img src={editIcon} alt="" />
            </div>
          </div>
        </InputSec>
      </Drawer>
    </Profile>
  );
};

export default ProfileSec;
