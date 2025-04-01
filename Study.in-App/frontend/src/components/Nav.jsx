import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const auth = localStorage.getItem("user");
  // console.log("Stored user in localStorage:", auth);
  const user = auth && auth !== "undefined" ? JSON.parse(auth) : null;

  const navigate = useNavigate();

  const logout = () => {
    navigate("/signup");
    localStorage.clear();
    console.log("Logout");
  };
  return (
    <div className="navbar">
      <div className="logoName">Study.in</div>
      <li>
        <Link to="/">Home</Link>
      </li>
      {auth ? (
        <ul>
          <li><Link to="/testseries">test series</Link></li>
          <li><Link to="/ncert">Ncert</Link></li>
          <li><Link to="/gk">Gk & GS</Link></li>
          <li><Link to="/attemptedtests">attempted-tests</Link></li>
          <li><Link to="/books">books</Link></li>
          <button
            onClick={logout}
            style={{
              width: "auto",
              padding: "5px 10px",
              background: "rgb(155, 33, 231)",
              border: "none",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "10px", // Space between icon and text
            }}
          >
            <i className="fa-solid fa-user"></i>
            {user?.name || "Guest"}
          </button>
        </ul>
      ) : (
        <ul className="nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
