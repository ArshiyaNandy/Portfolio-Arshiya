import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Portfolio />
      <Experience />
      <Contact />
      
      <SocialLinks />
    </div>
  );
}

export default App;
