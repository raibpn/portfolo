import React from "react";
import "./experience.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Experience = () => {
  const transition = { duration: 2, type: "spring", stiffness: 500 };
  const { ref, inView } = useInView({ threshold: 0.4 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    // console.log("use effect hook, inView: ", inView);
    if (inView) {
      animation.start({
        x: "0.5rem",
        transition: { transition },
      });
      animation2.start({
        x: "0.5rem",
        transition: { transition },
      });
    }
    if (!inView) {
      animation.start({
        x: "-6rem",
        transition: { transition },
      });
      animation2.start({
        x: "6rem",
        transition: { transition },
      });
    }
  }, [inView]);

  return (
    <div className="experience" id="Experience" ref={ref}>
      <motion.div animate={animation} ref={ref} className="achievement">
        <div className="circle">2</div>
        <span>years</span>
        <span>Experience</span>
      </motion.div>
      <motion.div animate={animation} ref={ref} className="achievement">
        <div className="circle">5+</div>
        <span>completed</span>
        <span>projects</span>
      </motion.div>

      <motion.div animate={animation2} ref={ref} className="achievement">
        <div className="circle">2</div>
        <span>companies</span>
        <span>Experience</span>
      </motion.div>
    </div>
  );
};

export default Experience;
