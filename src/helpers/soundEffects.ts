import { useRef, useEffect } from "react";
import scissorsCut from "../ui/assets/sounds/scissors.mp3";

export const audioFiles: { [key: string]: string } = {
  "scissors-cut": scissorsCut,
};

type AudioKey = keyof typeof audioFiles;

export default function useAudio(audioKey: AudioKey): () => void {
  const audioFile = audioFiles[audioKey];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioFile);
  }, [audioFile]);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      void audioRef.current.play();
    }
  };

  return playAudio;
}
