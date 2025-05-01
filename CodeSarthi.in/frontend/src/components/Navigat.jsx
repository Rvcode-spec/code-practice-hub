import { Container, Dropdown, Button } from "react-bootstrap";
import Logoimg from "./img/Logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Card from "react-bootstrap/Card";

const Navigat = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth && auth !== "undefined") {
      setUser(JSON.parse(auth));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/"); // Redirect to login page after logout
  };

  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };


 


  return (
    <>
      <Container
        fluid
        className="d-flex body align-items-center justify-content-between px-4 py-2"
      >
        {/* Left Side: Logo */}
        <img src={Logoimg} alt="Logo" className="logo" />

        <ul className="navbar-nav d-flex flex-row gap-4 text-white ms-4 w-50 fs-4 justify-content-between align-items-center mb-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Coding">
              Coding
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/UPSC">
              UPSC
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/JEE">
              JEE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/NEET">
              NEET
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Books">
              Books
            </Link>
          </li>
        </ul>

        {user ? (
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="light"
              className="d-flex align-items-center"
            >
              <div
                className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-2"
                style={{ width: "40px", height: "40px", fontWeight: "bold" }}
              >
                {getInitials(user.name)}
              </div>
              {user.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <div className="d-flex gap-2 align-items-center">
            <Button className="Button fs-5" as={Link} to="/login">
              Login
            </Button>
            <Button className="Button fs-5" as={Link} to="/register">
              Register
            </Button>
          </div>
        )}
      </Container>

      {/* // All Student Details  */}

     
    </>
  );
};

export default Navigat;
