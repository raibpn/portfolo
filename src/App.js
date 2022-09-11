import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Experience from "./Components/Experience/experience";
import Work from "./Components/Works/work";
import Contact from "./Components/Contact/index";
import { useState } from "react";
import { motion, useScroll } from "framer-motion";

export const ThemeContext = React.createContext();

function App() {
  const { scrollYProgress } = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div
        className="App"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
          <Navbar />
          <Intro />
          <Work />
          <Experience />
          <Skill />
          <Contact />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
