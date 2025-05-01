import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logoimg from '../img/Logo/logo.png';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const results = await response.json();
      console.log("Login Results:", results);

      if (results.user) {
        localStorage.setItem("user", JSON.stringify(results.user));
        localStorage.setItem("token", results.auth || "");
        navigate('/');
        window.location.reload();
      } else {
        alert("Login failed. Please check credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 rounded-5">
      <Container className="bg-light rounded-4 p-4" style={{ width: "80%", height: "60%" }}>
        <Row className="h-100">
          {/* Left Side */}
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center bg-white rounded-start">
            <img src={Logoimg} alt="Logo" className="logo w-50 h-50 mt-0 py-0 px-0" />
            <h1>Welcome <span className="text-primary">CodeSarthi</span></h1>
          </Col>

          {/* Right Side */}
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center bg-light rounded-end">
            <h2>Login</h2>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password" // use password type for security
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button onClick={handleLogin}>Login</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Login;
