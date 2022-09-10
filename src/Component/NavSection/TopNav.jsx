import React from "react";
import ButtonWithIcon from "../../Shared/ButtonWithIcon";
import "./TopNav.css";
import { FiSearch } from "react-icons/fi";
import InputField from "../../Shared/InputField/InputField";
const TopNav = () => {
  return (
    <div className="top-nav-container">
      <div className="top-main-container">
        <div className="logoContainer">
          <h2 className="logoText">My Logo</h2>
        </div>
        <div className="search-container">
          <div className="input-search">
            <InputField inputType={"text"} setPlaceholder={"Search..."} />
          </div>
          <div className="search-btn">
            <ButtonWithIcon
              icon={<FiSearch fontSize={"large"} color="white" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
