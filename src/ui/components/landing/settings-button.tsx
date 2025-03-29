import { useNavigate } from 'react-router-dom';
import { useAnimation } from '../../../helpers/animation';
import useAudio from '../../../helpers/soundEffects';

import { SettingsButton1, SettingsButton2, SettingsButton3, SettingsButton4, SettingsButton5, SettingsButton6, SettingsButton7 } from '../../assets/landing/settings-animation/settings-button-index';


export const SettingsButtonComponent = () => {
  const navigate = useNavigate();
  const playScissorsSound = useAudio("scissors-cut");

  const frames = [
    { image: SettingsButton1, delay: 0 },
    { image: SettingsButton2, delay: 200 },
    { image: SettingsButton3, delay: 300 },
    { image: SettingsButton4, delay: 500 },
    { image: SettingsButton5, delay: 600 },
    { image: SettingsButton6, delay: 800 },
    { image: SettingsButton7, delay: 1000 }
  ];

  const { currentImage, playAnimation, isAnimating } = useAnimation(frames, {
    onComplete: () => navigate('/settings'),
    resetDelay: 500
  });

  const handleClick = (e: React.MouseEvent) => {
    playScissorsSound();
    playAnimation(e);
  };

  return (
    <button onClick={handleClick} className="start-button-wrapper">
      <img src={currentImage} alt="Settings Button" className={`settings-button ${isAnimating ? 'animate' : ''}`} />
    </button>
  );
};