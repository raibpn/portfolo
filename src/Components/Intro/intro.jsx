import React from "react";
import "./intro.css";
import Github from "../../images/github.png";
// import Github1 from "../../images/github1.png";
import Insta from "../../images/insta.jpg";
import Linkedin from "../../images/linkedin.png";
import Bipin from "../../images/bipin.jpg";
import FloatingDiv from "../FloatingDiv/floating";
// import ScrollMotion from "../ScrollMotion/index";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Intro = () => {
  // Transition
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
        left: "-25%",
        transition: { transition },
      });
    }
    if (inView) {
      animation2.start({
        left: "3%",
        transition: { transition },
      });
    }
    if (!inView) {
      animation.start({
        top: "-4%",
        right: "64%",
        transition: { transition },
      });
    }
    if (!inView) {
      animation2.start({
        top: "-4%",
        left: "12rem",
      });
    }
  }, [inView]);

  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>About</span>
          <span>Me</span>
          <span>
            I am a Developer and passionate about what I do. I recently
            graduated as a Bachelors Degree in Software Developer from the
            institute KEA, Copenhagen, Denmark. I have been living in Copenhagen
            for 4 years. I have knowledge on few of the modern web-dev tools and
            libraries i.e. React, Angular, Gatsby and other JS frameworks. I am
            also familiar with stack tech such as MEAN and MERN stack and has
            used them in my various College's and personal projects. In my
            leisure time I like to get together with my friends and go out have
            fun or just stay at home and have cozy time playing fifa and
            grabbing some snacks. Playing football, basketball and ping-pong are
            the sports activities that I'd like to indulge once in a while
            whenever I get the chance.
          </span>
        </div>
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
          <motion.div
            initial={{ top: "-4%", right: "64%" }}
            whileInView={{ left: "-25%" }}
            transition={transition}
            // animate={animation}
            className="web"
          >
            <FloatingDiv txt1="Web" txt2="Developer" />
          </motion.div>
          <motion.div
            initial={{ top: "-4%", left: "10rem" }}
            whileInView={{ left: "2%" }}
            // animate={animation2}
            transition={transition}
            className="designer"
          >
            <FloatingDiv txt1="Designer" />
          </motion.div>
        </div>
        {/*blur divs*/}
        <div className="i-image">
          <img className="img-bipin" src={Bipin} alt="bipin" />
        </div>
        <div className="blur" style={{ background: "rgb(225 210 240)" }}></div>
        <div className="blur s-blur2" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
};

export default Intro;
