import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "../../../assets/images/Menu.png";
import AddIcon from "../../../assets/images/add.png";
import { Menus } from "./NavMenuStyle";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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
      <div className="imgDiv">
        <img
          src={AddIcon}
          alt="Icon"
          style={{ height: "20px", width: "20px" }}
        />
      </div>

      <div
        className="imgDiv"
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
