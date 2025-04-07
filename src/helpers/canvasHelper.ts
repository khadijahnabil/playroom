export const setupCanvasWithImage = (
  canvas: HTMLCanvasElement | null,
  imgSrc: string
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
};
