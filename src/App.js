import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <Sidebar />

      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}
