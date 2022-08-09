import React from "react";
import "./skill.css";
import Resume from "../../images/Resume.pdf";
import resume from "../../images/resume.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Skill = () => {
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
    <div className="skill" id="Knowledge">
      <motion.div animate={animation} className="s-left" ref={ref}>
        <span>Knowledge</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          vitae <br /> autem minima quasi, quibusdam doloremque fuga numquam
          necessitatibus <br /> nobis aliquam aperiam! Officiis nam officia
          facilis ex, amet blanditiis
          <br /> temporibus quo!
        </span>
        {/* <div
          className="blur s-blur2"
          style={{ background: "var(--blueCard)" }}
        ></div> */}
        <div className="button-wrap">
          <a href={Resume} download>
            <button className="button cv-button">Download CV</button>
          </a>
        </div>

        {/* <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div> */}
      </motion.div>
      <div className="resume">
        <motion.img animate={animation2} src={resume} alt="resume" ref={ref} />
      </div>
    </div>
  );
};

export default Skill;
