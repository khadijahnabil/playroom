export const setupCanvasWithImage = (
  canvas: HTMLCanvasElement | null,
  imgSrc: string,
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const img = new Image();
  img.src = imgSrc;
  img.crossOrigin = "anonymous";

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };

  img.onerror = () => {
    console.error("Image failed to load:", imgSrc);
  };

  const checkPixel = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    setIsHovered(pixel[3] > 0);
  };

  const handleMouseLeave = () => setIsHovered(false);

  canvas.addEventListener("mousemove", checkPixel);
  canvas.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    canvas.removeEventListener("mousemove", checkPixel);
    canvas.removeEventListener("mouseleave", handleMouseLeave);
  };
};
