import { Button, Typography } from "@mui/material";
import { Add, Settings, SportsSoccer, Delete } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
    <Button startIcon={<SportsSoccer />}  variant="text" size="small">Contained</Button>
    <Button startIcon={<Delete />} variant="contained" color="secondary" size="small">Contained</Button>
    <Button startIcon={<Add />} variant="contained" color="success" size="small">Add new post</Button>
    <Button startIcon={<Settings />}  variant="outlined" size="small" >Outlined</Button>

    {
  /* There is already an h1 in the page, let's not duplicate it. */
}
<Typography variant="h1" component="p">
It uses h1 style but it's a p tag
</Typography>;

    
    </div>
  );
}

export default App;
