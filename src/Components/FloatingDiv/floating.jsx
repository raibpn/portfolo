import React from "react";
import "./floating.css";

const floating = ({ txt1, txt2 }) => {
  return (
    <div className="floatingDiv">
      <span>
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

export default floating;
