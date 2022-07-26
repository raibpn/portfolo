import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Experience from "./Components/Experience/experience";
import Work from "./Components/Works/work";
import Contact from "./Components/Contact/index";
import { useContext, useState } from "react";

export const ThemeContext = React.createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div
      className="App"
      style={{
        background: isDarkMode ? "black" : "",
        color: isDarkMode ? "white" : "",
      }}
    >
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
        <Navbar />
        <Intro />
        <Skill />
        <Experience />
        <Work />
        <Contact />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
