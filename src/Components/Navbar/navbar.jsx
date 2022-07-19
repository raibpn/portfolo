import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Bipin</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
          </ul>
        </div>
      </div>
      <button className="button n-button">contact me</button>
    </div>
  );
};

export default navbar;
