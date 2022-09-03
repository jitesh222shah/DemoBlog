import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
const Navigation = ({ navData }) => {
  return (
    <div className="navContainer">
      <div className="container">
        {/* <NavLink to={"/"} className="navClass">
          Home
        </NavLink>
        <NavLink to={"/contact"} className="navClass">
          Contact
        </NavLink>
        <NavLink to={"/about-us"} className="navClass">
          About
        </NavLink> */}
        {/* CODE REFACTOR */}
        {navData?.map((each, index) => (
          <NavLink to={each?.path} className="navClass" >
            {each?.lable}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
