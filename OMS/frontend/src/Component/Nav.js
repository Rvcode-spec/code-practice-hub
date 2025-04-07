import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('admin');
  const admin = auth && auth !== 'undefined' ? JSON.parse(auth) : null;

  const logout = () => {
    localStorage.removeItem('admin');
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" to="/">OMS WebApp</Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-4" to="/data">Data List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active ms-4" to="/adddata">Add Data</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            {admin ? (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">Welcome, {admin.name}</span>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="btn btn-danger btn-sm ms-3 mt-1">Log Out</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn btn-primary btn-sm me-2" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-primary btn-sm" to="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
