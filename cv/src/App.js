import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Skills/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
