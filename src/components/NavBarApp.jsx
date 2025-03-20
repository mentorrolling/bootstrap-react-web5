import React from "react";
import logo from "../assets/logo.png";

const NavBarApp = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand d-flex gap-1" href="#">
          <img src={logo} alt="logo de Rolling" width={30} />
          <span>RollingCode Conf</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Speakers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tickets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarApp;
