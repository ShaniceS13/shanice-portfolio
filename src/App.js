import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <Sidebar />

      <main className="main">
        <Home />
        <About />
        <Resume />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
