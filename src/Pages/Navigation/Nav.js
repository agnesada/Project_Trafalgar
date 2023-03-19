import React from "react";
import "./nav.css";
import Logo from "../../assets/logo.svg"


const Nav = () => {
  return (
    <div>
      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <a className="navbar-brand" href="/index">
            <img alt="i"src={Logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active mr-3">
                <a className="nav-link activeLink" href="/home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/find a doctor">
                  Find a doctor
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/app">
                  Apps
                </a>
              </li>
              <li className="nav-item mr-3">
                <a className="nav-link" href="/testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about us">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
