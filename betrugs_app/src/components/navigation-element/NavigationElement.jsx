import Checkbox from '@mui/material/Checkbox';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import "./NavigationElement.css";

function NavigationElement({ href, label, checked }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <div className='container'>
            <ListItemText primary={label} />
            <Checkbox checked={checked} disabled className='checkbox'/>
        </div>
      </ListItemButton>
    </ListItem>
  );
}

export default NavigationElement;