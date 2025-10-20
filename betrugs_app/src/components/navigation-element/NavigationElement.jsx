import Checkbox from '@mui/material/Checkbox';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { HashLink } from 'react-router-hash-link';
import "./NavigationElement.css";

function NavigationElement({ to, label, checked }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component={HashLink} smooth to={to}>
        <div className='container'>
            <ListItemText primary={label} />
            <Checkbox checked={checked} disabled className='checkbox'/>
        </div>
      </ListItemButton>
    </ListItem>
  );
}

export default NavigationElement;