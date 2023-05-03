import { Button, Typography, styled } from "@mui/material";
import { Add, Settings, SportsSoccer, Delete } from "@mui/icons-material";

function App() {

const StyledButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 10,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  marginLeft: "2rem",
});


  return (
    <div className="App">
    <Button startIcon={<SportsSoccer />}  variant="text" size="small">Contained</Button>
    <Button startIcon={<Delete />} variant="contained" color="secondary" size="small">Contained</Button>
    <Button startIcon={<Delete />} variant="contained" color="primary" size="small">Contained</Button>
    <Button startIcon={<Add />} variant="contained" color="success" size="small">Add new post</Button>
    <Button startIcon={<Add />} variant="contained" color="otherColor" size="small">Add new post</Button>
    <Button startIcon={<Settings />}  variant="outlined" size="small" >Outlined</Button>

    {
  /* There is already an h1 in the page, let's not duplicate it. */
}
<Typography variant="h1" component="p">
It uses h1 style but it's a p tag
</Typography>

<Button variant="contained" sx={{
  backgroundColor:"#000027",
  color:"#fff",
  margin: "2rem",
  fontFamily: "Helvetica",
  fontSize: "1rem",
  fontWeight: "bold",
  borderRadius: "5px",
  "&:hover": {
    backgroundColor: "#000555",
    color: "#fff",
  },
  "&:active": {
    backgroundColor: "#000555",
    color: "#fff",
  },
  "&:focus": {
    backgroundColor: "#000555",
    color: "#fff",
  },
  }}>
  Custom Button
</Button>

<StyledButton>Styled Button</StyledButton>
<StyledButton>Another Styled Button</StyledButton>
    
    </div>
  )
}

export default App;
