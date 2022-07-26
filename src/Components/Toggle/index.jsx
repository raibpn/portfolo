import React, { useContext } from "react";
import "./index.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { ThemeContext } from "../../App";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.isDarkMode;
  const toggle = theme.toggleDarkMode;

  return (
    <div className="toggle" onClick={toggle}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
