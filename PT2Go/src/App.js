import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
          <NavBar />
      <div className="App">
        <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/registration' element={ <Registration /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
