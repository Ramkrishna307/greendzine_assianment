import React from "react";
import maptro from "../../Assect/maptro-logo.png";
import "./style.css";
const Logo = ({ value }) => {
  return (
    <div className="logo-container">
      <div className="img-container">
        <img src={maptro} alt="My Image" />
        <div className="counter" style={{ color: "white" }}>
          {value}
        </div>
      </div>
    </div>
  );
};

export default Logo;
