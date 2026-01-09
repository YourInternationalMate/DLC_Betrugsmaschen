import { useState, useEffect } from "react";
import { Box, Button, IconButton, Drawer, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import "./Navigation.css";

import NavigationElement from "../navigation-element/NavigationElement";

function Navigation() {
  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { to: "/", label: "Einleitung", checked: false },
    { to: "/phishing", label: "Phishing", checked: false },
    { to: "/socialengineering", label: "Social Engineering", checked: false },
    { to: "/onlineshopping", label: "Online Shopping", checked: false },
    { to: "/kibetrug", label: "KI-Betrug", checked: false },
    { to: "/verhalten", label: "Verhalten", checked: false },
    { to: "/zusammenfassung", label: "Zusammenfassung", checked: false },
  ]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleChecked = (to) => {
    // TODO: muss nach Abschluss getoggled werden (einfach Kapitel ID übergeben "#test")
    setItems((prev) =>
      prev.map((item) => (item.to === to ? { ...item, checked: true } : item))
    );
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
