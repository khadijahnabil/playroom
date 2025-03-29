import LandingPageImage from "../assets/landing/landingpage.png"
import { SettingsButtonComponent } from "../components/landing/settings-button";
import { StartButtonComponent } from "../components/landing/start-button";

export default function Landing() {

  return (
    <div className="landing-container">
      <img src={LandingPageImage} alt="Landing Page" className="landing-image" />
      <StartButtonComponent />
      <SettingsButtonComponent />
    </div>
  );
};
