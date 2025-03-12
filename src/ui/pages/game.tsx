import { useEffect, useRef, useState } from "react";
import GameBg from "../assets/game/game-bg.png";
import Character1 from "../assets/game/characters/chara1.png";
import { setupCanvasWithImage } from "../../helpers/canvasHelper";

export default function Game() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    return setupCanvasWithImage(canvasRef.current, Character1, setIsHovered);
  }, []);

  return (
    <div className="game-container">
      <img src={GameBg} alt="Game Background" className="game-bg-image" />
      <canvas ref={canvasRef} className={`character-canvas ${isHovered ? "hovered" : ""}`} />
    </div>
  );
}
