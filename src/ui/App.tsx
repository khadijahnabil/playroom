import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./pages/game"
import Landing from "./pages/landing"
import Settings from "./pages/settings"
import './App.css'

const App: React.FC = () => {
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
