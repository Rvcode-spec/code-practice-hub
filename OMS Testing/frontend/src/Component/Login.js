import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ✅ Check if already logged in
  useEffect(() => {
    const auth = localStorage.getItem('admin');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);
  

  const handleLogin = async (e) => {
    e.preventDefault();

    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': "application/json",
      }
    });

    result = await result.json();
    console.log(result);

    if (result.auth) {
      localStorage.setItem("admin", JSON.stringify(result.admin));
      localStorage.setItem("token", JSON.stringify(result.auth));
      console.log("Saved admin:", result.admin);
      console.log("Saved token:", result.auth);
      console.log("✅ Redirecting to home");

      navigate("/");
    } else {
      alert("Login failed. Please check credentials.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
