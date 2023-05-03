import { Button } from "@mui/material";
import { Add, Settings, SportsSoccer, Delete } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
    <Button startIcon={<SportsSoccer />}  variant="text" size="small">Contained</Button>
    <Button startIcon={<Delete />} variant="contained" color="secondary" size="small">Contained</Button>
    <Button startIcon={<Add />} variant="contained" color="success" size="small">Add new post</Button>
    <Button startIcon={<Settings />}  variant="outlined" size="small" >Outlined</Button>
    </div>
  );
}

export default App;
