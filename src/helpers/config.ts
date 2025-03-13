export function preventZoom() {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      (event.metaKey || event.ctrlKey) &&
      (event.key === "=" || event.key === "-")
    ) {
      event.preventDefault();
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (event.metaKey || event.ctrlKey) {
      event.preventDefault();
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("wheel", handleWheel, { passive: false });

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("wheel", handleWheel);
  };
}
