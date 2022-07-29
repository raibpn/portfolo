import React from "react";
import Toggle from "../Toggle";
import "./navbar.css";
import { Link } from "react-scroll";
// import Intro from "../Intro/intro";
// import Skills from "../Skills/skill";
// import Work from "../Works/work";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Portfolio</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Experience"
                spy={true}
                smooth={true}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Knowledge"
                spy={true}
                smooth={true}
              >
                Knowledge
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
