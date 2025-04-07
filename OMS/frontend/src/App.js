import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav.js";
import SignUp from "./Component/SignUp.js";
import Login from "./Component/Login.js";
import { useState } from "react";

function App() {
  const [admin, setAdmin] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav admin={admin} setAdmin={setAdmin} />
        <Routes>
          <Route path="/" element={<h2 className="text-center">Welcome To OMS</h2>} />
          <Route path="/login" element={<Login setAdmin ={setAdmin} />} />
          <Route path="/signup" element={<SignUp setAdmin = {setAdmin}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
