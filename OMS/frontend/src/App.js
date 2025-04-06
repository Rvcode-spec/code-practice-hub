import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Component/Nav.js";
import SignUp from "./Component/SignUp.js";
import Login from "./Component/Login.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h2 className="text-center">Welcome To OMS</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
