import './App.css'
import LandingPageImage from "./assets/landing/landingpage.png"
import StartButton from "./assets/landing/start.png"
import SettingsButton from "./assets/landing/settings.png"

function App() {

  return (
    <div>
      <div className='landing-container'>
        <img src={LandingPageImage} alt="Landing Page" className='landing-image' />
        <img src={StartButton} alt="Start Button" className='start-button' />
        <img src={SettingsButton} alt="Settings Button" className='settings-button' />
      </div>
    </div>
  )
}

export default App
