import Checkbox from '@mui/material/Checkbox';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavigationElement.css";

function NavigationElement({ to, label, checked }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} to={to} sx={{ justifyContent: "center" }}>
        <div className="navigation-element-container">
            <ListItemText primary={label} />
            <Checkbox checked={checked} disabled className="checkbox" />
        </div>
      </ListItemButton>
    </ListItem>
  );
}

export default NavigationElement;
