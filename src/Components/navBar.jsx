import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/Movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Customers">
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Rentals">
              Rentals
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/Register">
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
