import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom" 
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header>
        <nav
          className="navbar is-transparent is-light has-background-white has-shadow"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                <img src={logo} alt="logo" className="logo" />
              </Link>
              <button
                className={"navbar-burger" + (showMenu ? " is-active" : "")}
                onClick={() => setShowMenu(!showMenu)}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div
              className={"navbar-menu" + (showMenu ? " is-active" : "")}
              id="navMenu"
            >
              <div className="navbar-start">
                <Link className="navbar-item has-text-weight-medium" to="/why-williams">
                  Why Williams?
                </Link>
                <Link className="navbar-item has-text-weight-medium" to="/features">
                  Features
                </Link>
                <Link className="navbar-item has-text-weight-medium" to="/pricing">
                  Pricing
                </Link>
                <Link className="navbar-item has-text-weight-medium" to="/contact">
                  Contact Sales
                </Link>
              </div>
              <div className="navbar-end">
                <Link className="navbar-item has-text-weight-medium" to="/language">
                  <i class="fa-solid fa-globe"></i>
                </Link>
                <Link className="navbar-item has-text-weight-medium" to="/login">
                  Login
                </Link>
                <div className="navbar-item">
                  <Link className="button has-text-weight-medium" to="/signup">
                    Try For Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
