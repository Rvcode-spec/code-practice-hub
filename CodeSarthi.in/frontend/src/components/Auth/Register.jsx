import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logoimg from "../img/Logo/logo.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async () => {
    if (!name || !email || !password) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:9000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const results = await response.json();
      console.log("Register Results:", results);

      if (results && results.id) {
        localStorage.setItem("user", JSON.stringify(results));
        localStorage.setItem("token", results.token); 
        navigate('/');
        window.location.reload();
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during Register:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 rounded-5">
      <Container
        className="bg-light shadow rounded-4 p-4"
        style={{ width: "80%", height: "60%" }}
      >
        <Row className="h-100">
          {/* Left Side */}
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center bg-white rounded-start"
          >
            <img
              src={Logoimg}
              alt="Logo"
              className="logo w-50 h-50 mt-0 py-0 px-0"
            />
            <h1>
              Welcome <span className="text-primary">CodeSarthi</span>
            </h1>
          </Col>

          {/* Right Side */}
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-center bg-light rounded-end"
          >
            <h2>Register</h2>
            <div className="mb-3 mt-4">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

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
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button onClick={collectData}>Register</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Register;
