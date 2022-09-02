import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navContainer">
      <div className="container">
        <NavLink to={"/"} className="navClass">
          Home
        </NavLink>
        <NavLink to={"/contact"} className="navClass">
          Contact
        </NavLink>
        <NavLink to={"/about-us"} className="navClass">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
