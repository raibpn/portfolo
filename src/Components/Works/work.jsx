import React from "react";
import "./work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faJsSquare,
  faNodeJs,
  faReact,
  faAngular,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const work = () => {
  return (
    <div className="works">
      <div className="s-left">
        <span>My Skills</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          vitae <br /> autem minima quasi, quibusdam doloremque fuga numquam
          necessitatibus <br /> nobis aliquam aperiam! Officiis nam officia
          facilis ex, amet blanditiis
          <br /> temporibus quo!
        </span>
        <button className="button cv-button">Hire Me</button>
        <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon
              icon={faAngular}
              color="#DD0031"
              style={{ transform: "scale(2.5)" }}
            />
          </div>
          <div className="face2">
            <FontAwesomeIcon
              icon={faGithub}
              color="black"
              style={{ transform: "scale(2.5)" }}
            />
          </div>
          <div className="face3">
            <FontAwesomeIcon
              icon={faCss3}
              color="#28A4D9"
              style={{ transform: "scale(2.5)" }}
            />
          </div>
          <div className="face4">
            <FontAwesomeIcon
              icon={faReact}
              color="#5ED4F4"
              style={{ transform: "scale(2.5)" }}
            />
          </div>
          <div className="face5">
            <FontAwesomeIcon
              icon={faNodeJs}
              color="#EFD81D"
              style={{ transform: "scale(2.5)" }}
            />
          </div>
          <div className="face6">
            <FontAwesomeIcon
              icon={faJsSquare}
              color="#EC4"
              style={{ transform: "scale(2.5)" }}
            />
          </div>
        </div>
        <div
          className="blur s-blur1"
          style={{ background: "var(--skyBlue)" }}
        ></div>
      </div>
    </div>
  );
};

export default work;
