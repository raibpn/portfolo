import React from "react";
import "./card.css";

const card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default card;
