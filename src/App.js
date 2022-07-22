import "./App.css";

import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Experience from "./Components/Experience/experience";
import Work from "./Components/Works/work";
import Contact from "./Components/Contact/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
