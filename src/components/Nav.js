import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav(props) {
  const location = useLocation();
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/PortfolioPage"
          className={
            location.pathname === "/PortfolioPage"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Portolio Page
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/About"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            location.pathname === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
}

export default Nav;