import React, { useState } from "react";
import avatar from "../../../assets/images/avatar.jpg";
import Drawer from "@mui/material/Drawer";
import arrow from "../../../assets/images/Arrow-back.png";
import cameraIcon from "../../../assets/images/camera.png";
import editIcon from "../../../assets/images/edit.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Profile, Top, ImageSec, InputSec } from "./DrawerStyles";

const ProfileSec = () => {
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
    "&:hover": {
      backgroundColor: "#182229",
    },
  };

  return (
    <Profile>
      <img
        className="profileIcon"
        src={avatar}
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

        <ImageSec image={avatar}>
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
            </MenuItem>
            <MenuItem sx={menuItemHoverStyle} onClick={handleClose}>
              Remove photo
            </MenuItem>
            <MenuItem sx={menuItemHoverStyle} onClick={handleClose}>
              View photo
            </MenuItem>
          </Menu>
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
            <h3>Areeb</h3>
            <img src={editIcon} alt="" />
          </div>
          <span id="detail">
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </span>
        </InputSec>
      </Drawer>
    </Profile>
  );
};

export default ProfileSec;
