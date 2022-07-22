import React from "react";
import "./skill.css";
import Card from "../Card/card";
import Resume from "../../images/Resume.pdf";

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
        <a href={Resume} download>
          <button className="button cv-button">Download CV</button>
        </a>
        <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div style={{ left: "1rem" }}>
          <Card emoji={"🚇"} heading={"Design"} detail={"Figma, html, css"} />
        </div>
        <div style={{ top: "12rem", left: "-8rem" }}>
          <Card
            emoji={"🚇"}
            heading={"Developer"}
            detail={"Figma, html, css"}
          />
        </div>
        <div style={{ top: "12rem", left: "8rem" }}>
          <Card
            emoji={"🚇"}
            heading={"UI/UX"}
            detail=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          vitae <br /> autem minima"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default skill;
