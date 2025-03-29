import { useRef, useState, useEffect } from "react";

// Define types for our frame sequence
interface AnimationFrame {
  image: string;
  delay: number;
}

interface AnimationOptions {
  onComplete?: () => void;
  resetDelay?: number;
}

export const useAnimation = (
  frames: AnimationFrame[],
  options?: AnimationOptions
) => {
  const [currentImage, setCurrentImage] = useState<string>(frames[0].image);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const timeoutRefs = useRef<number[]>([]);

  const animationDuration =
    frames.length > 0
      ? frames[frames.length - 1].delay + (options?.resetDelay || 200)
      : 500;

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeout: number) => clearTimeout(timeout));
      timeoutRefs.current = [];
    };
  }, []);

  const playAnimation = (e?: React.MouseEvent): void => {
    if (e) e.preventDefault();

    if (isAnimating) return;

    setIsAnimating(true);

    timeoutRefs.current.forEach((timeout: number) => clearTimeout(timeout));
    timeoutRefs.current = [];

    frames.forEach((frame: AnimationFrame) => {
      const timeoutId: number = window.setTimeout(() => {
        setCurrentImage(frame.image);
      }, frame.delay);

      timeoutRefs.current.push(timeoutId);
    });

    const navigationTimeout: number = window.setTimeout(() => {
      setIsAnimating(false);
      setCurrentImage(frames[0].image);

      if (options?.onComplete) {
        options.onComplete();
      }
    }, animationDuration);

    timeoutRefs.current.push(navigationTimeout);
  };

  return {
    currentImage,
    isAnimating,
    playAnimation,
  };
};
