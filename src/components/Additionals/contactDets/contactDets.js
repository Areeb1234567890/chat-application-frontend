import React from "react";
import { Container } from "./DrawerStyles";
import avatar from "../../../assets/images/avatar2.png";
import Drawer from "@mui/material/Drawer";

const ContactDets = () => {
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

  return (
    <Container>
      <img src={avatar} alt="Image" onClick={toggleDrawer(anchor, true)} />
      <span>Faizan Uni</span>

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
      ></Drawer>
    </Container>
  );
};

export default ContactDets;
