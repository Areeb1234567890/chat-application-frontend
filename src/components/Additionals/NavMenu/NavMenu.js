import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "../../../assets/images/Menu.png";
import AddIcon from "../../../assets/images/add.png";
import { Menus } from "./NavMenuStyle";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const NavMenu = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    border: "0px",
    boxShadow: 24,
    p: 4,
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const { Logout } = useAuthContext();
  const menuItemHoverStyle = {
    "&:hover": {
      backgroundColor: "#182229",
    },
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
          <h3>this ois the moda;</h3>
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
            backgroundColor: "#222E35",
            color: "#dadada",
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
        <MenuItem onClick={handleClose} sx={menuItemHoverStyle}>
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
