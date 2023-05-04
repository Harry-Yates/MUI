import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';


function App() {

  return (
    <Box 
    className="App"
    sx={{
      background:"transparent",
    }}
    >
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
  )
}

export default App;
