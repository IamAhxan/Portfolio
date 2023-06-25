import React from "react";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="row align-items-center m-0 justify-content-between">
          <div className="left col-lg-4 logo text-center">
            <h1>Ahsan's Portfolio</h1>
          </div>
          <div className="right col-lg-6">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
