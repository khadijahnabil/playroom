import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/game";
import Landing from "./pages/landing";
import Settings from "./pages/settings";
import './App.css';
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log("Key pressed:", event.key);
      if ((event.metaKey || event.ctrlKey) && (event.key === "=" || event.key === "-")) {
        console.log("Zooming is disabled");
        event.preventDefault();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if ((event.metaKey || event.ctrlKey)) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
