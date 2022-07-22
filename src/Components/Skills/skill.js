import React from "react";
import "./skill.css";
import Card from "../Card/card";

const skill = () => {
  return (
    <div className="skill">
      <div className="s-left">
        <span>My Skills</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          vitae <br /> autem minima quasi, quibusdam doloremque fuga numquam
          necessitatibus <br /> nobis aliquam aperiam! Officiis nam officia
          facilis ex, amet blanditiis
          <br /> temporibus quo!
        </span>
        <button className="button cv-button">Download CV</button>
      </div>
      <div className="cards">
        <Card emoji={"🚇"} heading={"Design"} detail={"Figma, html, css"} />
      </div>
    </div>
  );
};

export default skill;
