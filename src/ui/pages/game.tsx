import { useEffect, useRef, useState } from "react";
import GameBg from "../assets/game/game-bg.png";
import EmptyDoll from "../assets/game/empty-doll.png";
import Bars from "../assets/game/interactive/bars/bars.png";
import Eyes from "../assets/game/characters/body-parts/eyes.png";
// import Mouth from "../assets/game/characters/body-parts/mouth.png";
import HairLips from "../assets/game/characters/body-parts/hair.png";
// import Clothes from "../assets/game/characters/body-parts/clothes.png";
// import Accessories from "../assets/game/characters/body-parts/accessories.png";
import { PlayIcon, HappinessIcon, LoveIcon } from "../assets/game/interactive/interactive-index";
import { setupCanvasWithImage } from "../../helpers/canvasHelper";

// const bodyParts = ["eyes", "mouth", "hairLips", "clothes", "accessories"] as const;
const bodyParts = ["eyes", "hairLips"] as const;
type BodyPart = typeof bodyParts[number];

const imageMap: Record<BodyPart, string> = {
  eyes: Eyes,
  // mouth: Mouth,
  hairLips: HairLips,
  // clothes: Clothes,
  // accessories: Accessories,
};

export default function Game() {
  const canvasRefs = useRef<Record<BodyPart, HTMLCanvasElement | null>>({} as Record<BodyPart, HTMLCanvasElement | null>);
  const [visibleBodyParts, setVisibleBodyParts] = useState<BodyPart[]>([]);
  const [hoverStates, setHoverStates] = useState<Record<BodyPart, boolean>>({} as Record<"eyes" | "mouth" | "hairLips" | "clothes" | "accessories", boolean>);
  const interactiveIcons = [HappinessIcon, LoveIcon, PlayIcon];

  // Reveal body parts one by one for demo
  useEffect(() => {
    // const revealOrder: BodyPart[] = ["eyes", "hairLips", "mouth", "clothes", "accessories"];
    const revealOrder: BodyPart[] = ["eyes", "hairLips"];
    revealOrder.forEach((part, i) => {
      setTimeout(() => {
        setVisibleBodyParts((prev) => [...prev, part]);
      }, i * 1000);
    });
  }, []);

  // Set up canvas when parts are added
  useEffect(() => {
    visibleBodyParts.forEach((part) => {
      const canvas = canvasRefs.current[part];
      if (canvas) {
        setupCanvasWithImage(canvas, imageMap[part]);
      }
    });
  }, [visibleBodyParts]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const updatedStates: Record<BodyPart, boolean> = { ...hoverStates };

    visibleBodyParts.forEach((part) => {
      const canvas = canvasRefs.current[part];
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const pixel = ctx.getImageData(x, y, 1, 1).data;
      updatedStates[part] = pixel[3] > 0;
    });

    setHoverStates(updatedStates);
  };

  return (
    <div className="game-container" onMouseMove={handleMouseMove}>
      <img src={GameBg} alt="Game Background" className="game-bg-image" />
      <img src={EmptyDoll} alt="Empty Doll" className="character" />
      <img src={Bars} alt="Bars" className="bars" />

      {visibleBodyParts.map((part) => (
        <canvas
          key={part}
          ref={(el) => {
            canvasRefs.current[part] = el;
            return;
          }} className={`body-part ${hoverStates[part] ? "hovered" : ""}`}
        />
      ))}

      <div className="interactive-icons-container">
        {interactiveIcons.map((icon, index) => (
          <img key={index} src={icon} className="interactive-icon" />
        ))}
      </div>
    </div>
  );
}
