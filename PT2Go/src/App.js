import './App.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import LandingPage from './components/LandingPage';
import Exercises from './components/Exercises';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
