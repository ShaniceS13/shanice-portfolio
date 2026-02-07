import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Sidebar />

      <main className="main">
        <Home />
      </main>
    </div>
  );
}
