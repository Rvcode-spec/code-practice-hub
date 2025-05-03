import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Footer from './components/Footer';
import Navigat from './components/Navigat';
import Profile from './components/Profile';

function App() {
  return (
    <div className='App'>
      <Navigat/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path= '/profile' element={<Profile/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
