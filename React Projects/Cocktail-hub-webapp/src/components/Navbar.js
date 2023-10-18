import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h3>The Cocktail Hub</h3>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
