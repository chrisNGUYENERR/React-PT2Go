import './App.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useSelector } from 'react-redux'; //hook 
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import Exercises from './components/Exercises';
import UserDashboard from './components/UserDashboard';
import HEPEditor from './components/HEPEditor';

function App() {
  return (
    <BrowserRouter>
          <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/registration' element={ <Registration /> } />
          <Route path='/exercises' element={ <Exercises /> } />
          <Route path='/dashboard' element={<UserDashboard />} />
          <Route path='/hepeditor' element={ <HEPEditor /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
