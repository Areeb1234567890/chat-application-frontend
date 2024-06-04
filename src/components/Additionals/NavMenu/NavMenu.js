import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "../../../assets/images/Menu.png";
import AddIcon from "../../../assets/images/add.png";
import { Menus, ModalInner } from "./NavMenuStyle";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useContactContext } from "../../../context/contactContext";

const NavMenu = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "33%",
    bgcolor: "#111B21",
    border: "1px solid #dadada76",
    boxShadow: 24,
    borderRadius: "12px",
    padding: "10px 15px",
    textAlign: "center",
  };
  const _token = sessionStorage.getItem("authUser");
  const { userId } = _token ? JSON.parse(_token) : {};
  const value = {
    email: "",
    message: "",
    id: userId,
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const navigate = useNavigate();
  const { Logout } = useAuthContext();
  const { addContact, setOpen } = useContactContext();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemHoverStyle = {
    borderRadius: "10px",
    height: "40px",
    "&:hover": {
      backgroundColor: "#182229",
    },
  };
  const [addData, setAddContact] = useState(value);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAddContact({ ...addData, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addContact({ data: addData });
      handleModalClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menus>
      <div className="imgDiv" onClick={handleOpen}>
        <img
          src={AddIcon}
          alt="Icon"
          style={{ height: "20px", width: "20px" }}
        />
      </div>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalInner onSubmit={(e) => submitHandler(e)}>
            <h3>Add a new contact</h3>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              required
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <input
              type="text"
              name="message"
              placeholder="Enter message"
              required
              onChange={(e) => {
                inputHandler(e);
              }}
            />
            <button>Send</button>
          </ModalInner>
        </Box>
      </Modal>

      <div
        className={`imgDiv ${open ? "hover" : ""}`}
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img
          src={MenuIcon}
          alt="Icon"
          style={{ height: "20px", width: "20px" }}
        />
      </div>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            width: "150px",
            transform: "unset !important",
            backgroundColor: "#233138",
            color: "#dadada",
            borderRadius: "15px",
            padding: "5px",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} sx={menuItemHoverStyle}>
          New Group
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setOpen(true);
          }}
          sx={menuItemHoverStyle}
        >
          Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            Logout({ navigate });
          }}
          sx={menuItemHoverStyle}
        >
          Logout
        </MenuItem>
      </Menu>
    </Menus>
  );
};

export default NavMenu;
