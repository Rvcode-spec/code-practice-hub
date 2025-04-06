import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"; 

const SignUp = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    // Login logic yaha add karo
  };

  const collectDate = async () =>{
    console.log(name, email, password);

    let result = await fetch("http://localhost:5000/signup",{
      method:'POST',
      body: JSON.stringify({ name, email, password }),
      headers:{
        'Content-Type': "application/json",
      }
    });
    result = await result.json();
    console.log(result);
    if (result && result._id) {
      navigate('/');
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

          </div>
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

          <button type="submit"  className="btn btn-primary w-100" onClick={collectDate}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
