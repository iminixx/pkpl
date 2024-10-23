import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/product-crud">
              Product Management
            </Link>
          </li>
        </ul>
        <div className="buttons">
          <button className="btn logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
