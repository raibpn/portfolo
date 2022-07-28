import React from "react";
import "./intro.css";
import Github from "../../images/github.png";
import Insta from "../../images/insta.jpg";
import Linkedin from "../../images/linkedin.png";
import Bipin from "../../images/bipin.jpg";
import FloatingDiv from "../FloatingDiv/floating";

const intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>About</span>
          <span>Me</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit . Delectus,
            vitae autem minima quasi, quibusdam doloremque
            <br /> fuga numquam necessitatibus nobis aliquam aperiam! Officiis
            nam officia <br />
            facilis ex, amet blanditiis temporibus quo!
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a
            href="https://github.com/raibpn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Github}
              style={{ maxWidth: "2rem", maxHeight: "5rem" }}
              alt="github"
            />
          </a>

          <a
            href="https://www.instagram.com/raebpn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Insta}
              style={{ maxWidth: "2rem", maxHeight: "5rem" }}
              alt="insta"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bipin-rai-b7011296/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkedin}
              style={{ maxWidth: "2rem", maxHeight: "5rem" }}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-floating-div">
          <div className="web">
            <FloatingDiv txt1="Web" txt2="Developer" />
          </div>
          <div className="designer">
            <FloatingDiv txt1="Designer" />
          </div>
        </div>
        {/*blur divs*/}
        <div className="i-image">
          <img className="img-bipin" src={Bipin} alt="bipin" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default intro;
