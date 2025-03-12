import LandingPageImage from "../assets/landing/landingpage.png"
import StartButton from "../assets/landing/start.png"
import SettingsButton from "../assets/landing/settings.png"
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-container">
      <img src={LandingPageImage} alt="Landing Page" className="landing-image" />
      <Link to="/game">
        <img src={StartButton} alt="Start Button" className="start-button" />
      </Link>
      <Link to="/settings">
        <img src={SettingsButton} alt="Settings Button" className="settings-button" />
      </Link>
    </div>
  );
};
