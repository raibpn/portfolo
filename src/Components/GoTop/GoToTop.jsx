import React from "react";
import "./GoToTop.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="top-btn" onClick={goTop}>
      <div className="icon">
        <FaArrowUp size={40} className="top-btn-icon" />
      </div>
      <div className="text">Top</div>
    </div>
  );
};

export default GoToTop;
