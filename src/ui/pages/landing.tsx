import LandingPageImage from "../assets/landing/landingpage.png"
import StartButton from "../assets/landing/start.png"
import SettingsButton from "../assets/landing/settings.png"
import { Link } from "react-router-dom";
import useAudio from "../../helpers/soundEffects";

export default function Landing() {
  const playScissorsCut = useAudio("scissors-cut");

  return (
    <div className="landing-container">
      <img src={LandingPageImage} alt="Landing Page" className="landing-image" />
      <Link to="/game" onClick={() => playScissorsCut()}>
        <img src={StartButton} alt="Start Button" className="start-button" />
      </Link>
      <Link to="/settings" onClick={() => playScissorsCut()}>
        <img src={SettingsButton} alt="Settings Button" className="settings-button" />
      </Link>
    </div>
  );
};
