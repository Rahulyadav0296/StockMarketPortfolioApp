import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_ry.png";

function MainNavigation() {
  return (
    <nav className="navbar">
      <div className="brand-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <button className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/stocks">Stocks</Link>
          </li>
          <li>
            <Link to="/watchlist">WatchList</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavigation;
