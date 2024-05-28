import React, { useState } from "react";
import avatar from "../../../assets/images/avatar2.png";
import confirm from "../../../assets/images/tick.png";
import spinner from "../../../assets/images/ProfileLoader.svg";
import tick from "../../../assets/images/confirm.png";
import cancel from "../../../assets/images/cancel.png";
import Drawer from "@mui/material/Drawer";
import arrow from "../../../assets/images/Arrow-back.png";
import cameraIcon from "../../../assets/images/camera.png";
import editIcon from "../../../assets/images/edit.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {
  Profile,
  Top,
  ImageSec,
  InputSec,
  Button,
  ButtonCancel,
} from "./DrawerStyles";
import { useAuthContext } from "../../../context/authContext";

const ProfileSec = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    boxShadow: 0,
    borderRadius: "15px",
    p: 4,
  };
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "55%",
    boxShadow: 0,
    backgroundColor: "#111b21",
    borderRadius: "15px",
    padding: "0 0 20px",
  };
  const removeModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "20%",
    boxShadow: 0,
    backgroundColor: "#111b21",
    borderRadius: "15px",
    padding: "30px 20px 0",
    textAlign: "center",
    color: "#dadada",
  };
  const menuItemHoverStyle = {
    position: "relative",
    "&:hover": {
      backgroundColor: "#182229",
    },
  };
  const value = {
    file: "",
    bio: "",
    name: "",
  };
  const _token = sessionStorage.getItem("authUser");
  const { profilePicture, name, bio } = _token ? JSON.parse(_token) : {};
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const open2 = Boolean(anchorEl);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const [data, setData] = useState(value);
  const [selectedImage, setSelectedImage] = useState();
  const [isLoading, setIsLoading] = useState(Boolean);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { updateUser, deleteProfile } = useAuthContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpen3(true);
  };
  const handleOpen2 = () => {
    setOpen4(true);
  };
  const handleClose2 = () => {
    setOpen3(false);
  };
  const handleClose3 = () => {
    setOpen4(false);
  };
  const removeModalClose = () => {
    setRemoveModal(false);
  };
  const removeModalOpen = () => {
    setRemoveModal(true);
  };
  const inputHandler = (e) => {
    const { name } = e.target;
    if (name === "file") {
      const file = e.target.files[0];
      setData({ ...data, [name]: file });
      const reader = new FileReader();
      reader.onload = function (event) {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
      handleClose();
      handleOpen2();
    } else {
      const value = e.target.value;
      setData({ ...data, [name]: value });
      console.log(data);
    }
  };
  const updateProfile = async () => {
    handleClose3();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("bio", data.bio);
    formData.append("file", data.file);
    await updateUser({ data: formData });
    setIsLoading(false);
    setIsActive(false);
    setIsOpen(false);
  };
  const RemoveProfile = async () => {
    removeModalClose();
    setIsLoading(true);
    await deleteProfile();
    setIsLoading(false);
  };

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
        {isLoading ? (
          <div className="loadingCon">
            <img className="loaderSvg" src={spinner} alt="spinner" />
          </div>
        ) : (
          ""
        )}
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
            <MenuItem sx={menuItemHoverStyle}>
              Upload photo
              <input
                onChange={(e) => {
                  inputHandler(e);
                }}
                style={{
                  opacity: "0.000001",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                }}
                name="file"
                type="file"
              />
            </MenuItem>
            <MenuItem
              sx={menuItemHoverStyle}
              onClick={() => {
                handleClose();
                removeModalOpen();
              }}
            >
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
                  src={profilePicture || avatar}
                  alt="profile"
                />
              </div>
            </Box>
          </Modal>
          <Modal
            open={open4}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style2} className="ModalBody">
              <div
                style={{
                  width: "100%",
                  height: "10%",
                  backgroundColor: "#202c33",
                  textAlign: "center",
                  borderTopRightRadius: "15px",
                  borderTopLeftRadius: "15px",
                }}
              >
                <h3 style={{ color: "#dadada", paddingTop: "5px" }}>
                  Change profile Photo
                </h3>
              </div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "85%",
                  marginTop: "15px",
                }}
              >
                <img
                  className="profileIcon"
                  src={selectedImage}
                  alt="profile"
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
                />
                <img
                  onClick={() => {
                    updateProfile();
                  }}
                  style={{
                    position: "absolute",
                    height: "80px",
                    width: "80px",
                    right: "10px",
                    cursor: "pointer",
                    bottom: "-20px",
                  }}
                  src={confirm}
                  alt="img"
                />
              </div>
            </Box>
          </Modal>
          <Modal
            open={removeModal}
            onClose={removeModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={removeModalStyle} className="ModalBody">
              <h3>Are you sure to remove your Profile picture?</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "20px",
                  gap: "20px",
                  userSelect: "none",
                }}
              >
                <ButtonCancel onClick={() => RemoveProfile()}>Yes</ButtonCancel>
                <Button
                  onClick={() => {
                    removeModalClose();
                  }}
                >
                  No
                </Button>
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

        <InputSec isActive={isActive} isOpen={isOpen}>
          <span>Your name</span>
          <div>
            <div className="nameWrapper">
              <div className="name">
                <h3 className="bio">{name}</h3>
                <img
                  src={editIcon}
                  className="editIcon"
                  onClick={() => setIsOpen(true)}
                  alt="EditIcon"
                />
              </div>
            </div>
            <div className="editWrapper">
              <div className="editCon">
                <input
                  type="text"
                  name="name"
                  autocomplete="off"
                  onChange={(e) => inputHandler(e)}
                  placeholder={name}
                />
                <img
                  src={tick}
                  className="aboutIcons"
                  onClick={() => updateProfile()}
                  alt="confirmIcon"
                />
                <img
                  src={cancel}
                  className="aboutIcons"
                  onClick={() => setIsOpen(false)}
                  alt="canelIcon"
                />
              </div>
            </div>
          </div>
          <span id="detail">
            This is not your username or pin. This name will be visible to your
            Chat contacts.
          </span>
          <br />

          <div style={{ marginTop: "25px" }}>
            <span>About</span>
            <div className="about">
              <div className="edit">
                <input
                  type="text"
                  name="bio"
                  autocomplete="off"
                  onChange={(e) => inputHandler(e)}
                  placeholder={bio}
                />
                <img
                  src={tick}
                  className="aboutIcons"
                  onClick={() => updateProfile()}
                  alt="confirmIcon"
                />
                <img
                  src={cancel}
                  className="aboutIcons"
                  onClick={() => setIsActive(false)}
                  alt="canelIcon"
                />
              </div>
              <h3 className="bio">{bio}</h3>
              <img
                src={editIcon}
                className="editIcon"
                alt="editIcon"
                onClick={() => setIsActive(true)}
              />
            </div>
          </div>
        </InputSec>
      </Drawer>
    </Profile>
  );
};

export default ProfileSec;
