import React from "react";
import "./experience.css";
import { motion } from "framer-motion";

const experience = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <motion.div
      initial={{ x: "30rem" }}
      whileInView={{ x: "0.5rem" }}
      transition={transition}
      className="experience"
    >
      <div className="achievement">
        <div className="circle">2</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span>completed</span>
        <span>projects</span>
      </div>
      <div className="achievement">
        <div className="circle">2</div>
        <span>companies</span>
        <span>Experience</span>
      </div>
    </motion.div>
  );
};

export default experience;
