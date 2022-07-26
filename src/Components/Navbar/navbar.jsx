import React from "react";
import Toggle from "../Toggle";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <Toggle />
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
