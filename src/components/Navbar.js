import React from "react";
const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-md
     navbar-dark space-evenly sticky-top"
      id="nav"
    >
      <div className="container-fluid">
        <div className="active">
          <a className="navbar-brand" href="#">
            <strong>
              <span id="first-name">Arjun</span> Bhandal
            </strong>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navLinks"
          aria-controls="navLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1MhtObsBwhtgDRiLEmRWuSa17M9dhxyPE/view?usp=sharing"
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
