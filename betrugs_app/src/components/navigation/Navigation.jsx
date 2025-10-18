import { useState, useEffect } from "react";
import {
  AppBar, Toolbar, IconButton, Typography,
  Drawer, List, ListItemButton, ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navigation.css";

function Navigation() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="container">
      <IconButton edge="start" onClick={() => setOpen(true)} aria-label="Menu" >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { className: "drawerPaper" } }}>
        <List sx={{ width: 280 }} onClick={() => setOpen(false)}>
          <ListItemButton component="a" href="#"><ListItemText primary="Einführung" /></ListItemButton>
          <ListItemButton component="a" href="#"><ListItemText primary="Test" /></ListItemButton>
          <ListItemButton component="a" href="#"><ListItemText primary="Test" /></ListItemButton>
          <ListItemButton onClick={toggleTheme}><ListItemText primary="Theme" /></ListItemButton>
        </List>
      </Drawer>
    </div>
  );
}

export default Navigation;
 