import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const collectDate = async () =>{
    console.log(email, password);
    
      let result = await fetch("http://localhost:5000/login",{
        method:"POST",
        body: JSON.stringify({email , password}),
        headers:{
          'Content-Type': "application/json",
        }
      })
      result = await result.json()
      console.log(result);
      if(result && result._id){
        // setAdmin(result);
        navigate('/')
      }else{
        alert("Login failed");
      }
      

  }

  


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form>
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

          <button type="submit" className="btn btn-primary w-100" onClick={collectDate}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
