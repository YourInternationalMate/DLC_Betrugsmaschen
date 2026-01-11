import { useState, useEffect } from "react";
import { Box, Button, IconButton, Drawer, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import "./Navigation.css";

import NavigationElement from "../navigation-element/NavigationElement";

function Navigation({ items }) {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navigation-container">
      <IconButton edge="start" onClick={() => setOpen(true)} aria-label="Menu">
        <MenuIcon className="menuicon" />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{ paper: { className: "drawerPaper" } }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          onClick={() => setOpen(false)}
        >
          <List sx={{ flexGrow: 1, width: 350 }}>
            {items.map((item) => (
              <NavigationElement key={item.to} {...item} />
            ))}
          </List>
          <Box sx={{ p: 2 }}>
            <Button
              fullWidth
              className="togglebutton"
              variant="contained"
              onClick={toggleTheme}
            >
              <BrightnessMediumIcon className="themeicon" />
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navigation;
