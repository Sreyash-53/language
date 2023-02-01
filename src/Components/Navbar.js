import React from "react";
import "../style/landing.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar h-nav">
        <div className="rightnav">
          <div className="logo">
            <a href="#home">HEALTH/WEB</a>
          </div>
          <ul className="navlist v-className">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="leftnav">
          <button className="signin">Register</button>
          <button className="signin">Sign In</button>
        </div>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
