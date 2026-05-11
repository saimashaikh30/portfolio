
import './App.css';
import Home from './Components/home';
import Navbar from './Components/Navbar';
import About from './Components/about';
import Skills from "./Components/skills";
import Projects from "./Components/projects";
import Experience from './Components/experience';



function App() {
  return (
  <>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Experience />
  </>
  );
}

export default App;
