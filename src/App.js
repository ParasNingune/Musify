import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './routes/Login'
import { Box } from "@chakra-ui/react"
import Signup from './routes/Signup';
import NavBar1 from './components/navBar1';
import HomePage from './routes/HomePage';
import LandingPage from './routes/LandingPage'
import AlbumPage from './routes/AlbumPage';
import ArtistPage from './routes/ArtistPage';
import ExplorePremium from './routes/ExplorePremium';
import PaymentPage from './routes/Payment';
import Install from './routes/Install';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/album' element={<AlbumPage />} />
          <Route path='/artist' element={<ArtistPage />} />
          <Route path='/premium' element={<ExplorePremium />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/install' element={<Install />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;