import React, { useState } from "react";
import "./menu.css";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import Box from "@mui/material/Box";

const Menu = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 300,
        border: "2px solid aqua",
        backgroundColor: "black",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List></List>
      <Divider />
      <List></List>
    </Box>
  );

  return (
    <div className="menu">
      <div className="menuItems">
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon
                className="menuIcon"
                onClick={toggleDrawer(anchor, true)}
              />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                className="drawer"
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
