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
    { to: "#einfuehrung", label: "Einführung", checked: true },
    { to: "#test", label: "Test", checked: false },
  ]); // TODO: richtige Kapitel einsetzen und checked als False setzen

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
    <div className="container">
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
          <List sx={{ flexGrow: 1, width: 200 }}>
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
