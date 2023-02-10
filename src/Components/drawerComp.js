import React, { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemText,
  List,
  ListItemIcon,
  Button,
  Box,
} from "@mui/material";
const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((link, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}

          <Box>
            <Button variant="contained">signin</Button>
          </Box>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <ListIcon
          sx={{ color: "black", paddingLeft: "10px", paddingRight: "10px" }}
        />
      </IconButton>
    </>
  );
};

export default DrawerComp;
