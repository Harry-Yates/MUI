import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Container } from '@mui/material';


function App() {

  return (
    <Container 
    className="App"
    sx={{
      background:"#000027"
    }}
    >
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </Container>
  )
}

export default App;
