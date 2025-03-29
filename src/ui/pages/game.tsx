import { useEffect, useRef, useState } from "react";
import GameBg from "../assets/game/game-bg.png";
import Character1 from "../assets/game/characters/chara1.png";
import { setupCanvasWithImage } from "../../helpers/canvasHelper";
import { PlayIcon, HappinessIcon, LoveIcon } from "../assets/game/interactive/interactive-index";

export default function Game() {
  const characterCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const interactiveIcons = [HappinessIcon, LoveIcon, PlayIcon];

  useEffect(() => {
    setupCanvasWithImage(characterCanvasRef.current, Character1, setIsHovered);
  }, []);

  return (
    <div className="game-container">
      <img src={GameBg} alt="Game Background" className="game-bg-image" />
      <canvas ref={characterCanvasRef} className={`character-canvas ${isHovered ? "hovered" : ""}`} />
      <div className="interactive-icons-container">
        {interactiveIcons.map((icon, index) => (
          <img key={index} src={icon} className="interactive-icon" />
        ))}
      </div>
    </div>
  );
}
