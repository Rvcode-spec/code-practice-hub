import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Link, useNavigate } from 'react-router-dom';

const App = ({admin, setAdmin}) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const navigate = useNavigate()
  


    const logout = () => {
        setAdmin(null);
        navigate('/login')
        // localStorage.clear();
        console.log("Logout");
    
      }

    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand">OMS WebApp</h1>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active ms-5" to="/home" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link active ms-5' to="/data">Data List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active ms-5" to="/adddata">Add Data</Link>
                            </li>
                            <li>
                                <button onClick={logout}>Log Out ({admin?.name})</button></li>
                        </ul>
                    </div>
                    <div className="d-flex gap-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                setShowLogin(true);
                                setShowSignUp(false);
                            }}
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                setShowSignUp(true);
                                setShowLogin(false);
                            }}
                        >
                            SignUp
                        </button>
                    </div>
                </div>
            </nav>
            {/* Conditionally render forms */}
            <div className="container mt-4">
                {showLogin && <Login />}
                {showSignUp && <SignUp />}
            </div>
        </>
    );
};

export default App;
