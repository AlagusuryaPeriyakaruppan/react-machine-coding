// Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import components from "../constants";
import logo from "../assets/react-logo.svg";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <img src={logo} alt="react-logo" className="react-logo" />
      <ul className="navbar-list">
        {Object.keys(components).map((qn) => (
          <li key={qn} className="navbar-item">
            <Link
              to={`/${qn}`}
              className={`nav-link ${
                location.pathname === `${qn}` ? "active-link" : ""
              }`}
            >
              {qn}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
