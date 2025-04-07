import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav.js";
import SignUp from "./Component/SignUp.js";
import Login from "./Component/Login.js";
import Home from "./Component/Home.js";
import AddData from './Component/AddData.js';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Nav  />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/adddata' element={<AddData/>}/>
          <Route path="/login" element={<Login  />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
