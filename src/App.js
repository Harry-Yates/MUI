import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

function App() {
  return (
    <div className="App">
    <Button startIcon={<SportsSoccerIcon />}  variant="text" size="small">Contained</Button>
    <Button startIcon={<DeleteIcon />} variant="contained" color="secondary" size="small">Contained</Button>
    <Button startIcon={<SettingsIcon />}  variant="outlined" size="small" >Outlined</Button>
    </div>
  );
}

export default App;
