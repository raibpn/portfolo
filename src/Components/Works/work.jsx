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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Work = () => {
  const transition = {
    duration: 2,
    type: "spring",
    stiffness: 70,
    damping: 50,
  };
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    console.log("use effect hook, inView: ", inView);
    if (inView) {
      animation.start({
        x: "0.5px",
        transition: { transition },
      });
    }
    if (inView) {
      animation2.start({
        x: "0.5px",
        transition: { transition },
      });
    }
    if (!inView) {
      animation.start({
        x: "-12rem",
        transition: { transition },
      });
    }
    if (!inView) {
      animation2.start({
        x: "12rem",
      });
    }
  }, [inView]);

  return (
    <div className="works" id="Skills" ref={ref}>
      <motion.div animate={animation} className="s-left" ref={ref}>
        <span>My Skills</span>
        <span>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          vitae <br /> autem minima quasi, quibusdam doloremque fuga numquam
          necessitatibus <br /> nobis aliquam aperiam! Officiis nam officia
          facilis ex, amet blanditiis
          <br /> temporibus quo! */}
          I have worked as a Student Test Engineer Assistant while I was doing
          my Bachelor's Degree using .Net framework <br /> and also have worked
          as a Front-end developer for a startup Company using React and React
          Native as a main tech stack.
        </span>
        <button
          className="button cv-button"
          onClick={() => (window.location = "mailto:saayan.rai@gmail.com")}
        >
          Hire Me
        </button>
        {/* <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div> */}
      </motion.div>
      <motion.div animate={animation2} className="stage-cube-cont" ref={ref}>
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
        {/* <div
          className="blur s-blur1"
          style={{ background: "var(--skyBlue)" }}
        ></div> */}
      </motion.div>
    </div>
  );
};

export default Work;
