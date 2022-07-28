import React from "react";
import "./skill.css";
import Card from "../Card/card";
import Resume from "../../images/Resume.pdf";
import resume from "../../images/resume.png";

const skill = () => {
  return (
    <div className="skill">
      <div className="s-left">
        <span>Knowledge</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          vitae <br /> autem minima quasi, quibusdam doloremque fuga numquam
          necessitatibus <br /> nobis aliquam aperiam! Officiis nam officia
          facilis ex, amet blanditiis
          <br /> temporibus quo!
        </span>
        <div
          className="blur s-blur2"
          style={{ background: "var(--blueCard)" }}
        ></div>
        <div className="button-wrap">
          <a href={Resume} download>
            <button className="button cv-button">Download CV</button>
          </a>
        </div>

        <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="resume">
        <img src={resume} alt="resume" />
      </div>
    </div>
  );
};

export default skill;
