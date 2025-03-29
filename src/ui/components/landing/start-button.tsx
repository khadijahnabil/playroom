import { useNavigate } from 'react-router-dom';
import { useAnimation } from '../../../helpers/animation';
import useAudio from '../../../helpers/soundEffects';

import { StartButton1, StartButton2, StartButton3, StartButton4, StartButton5, StartButton6, StartButton7 } from '../../assets/landing/start-animation/start-button-index';

export const StartButtonComponent = () => {
  const navigate = useNavigate();
  const playScissorsSound = useAudio("scissors-cut");

  const frames = [
    { image: StartButton1, delay: 0 },
    { image: StartButton2, delay: 200 },
    { image: StartButton3, delay: 300 },
    { image: StartButton4, delay: 500 },
    { image: StartButton5, delay: 600 },
    { image: StartButton6, delay: 800 },
    { image: StartButton7, delay: 1000 }
  ];

  const { currentImage, playAnimation, isAnimating } = useAnimation(frames, {
    onComplete: () => navigate('/game'),
    resetDelay: 500
  });

  const handleClick = (e: React.MouseEvent) => {
    playScissorsSound();
    playAnimation(e);
  };

  return (
    <button onClick={handleClick} className="start-button-wrapper">
      <img src={currentImage} alt="Start Button" className={`start-button ${isAnimating ? 'animate' : ''}`} />
    </button>
  );
};