import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import NavMenu from './Components/NavMenu';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
