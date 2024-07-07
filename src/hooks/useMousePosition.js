import { useEffect, useState } from "react";
const useMousePosition = (card) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    if (card.current) {
      const rect = card.current.getBoundingClientRect();
      const updateMousePosition = (ev) => {
        setMousePosition({
          x: ev.clientX - Math.abs(rect.left),
          y: ev.clientY - rect.top,
        });
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }
  }, [card]);
  return mousePosition;
};
export default useMousePosition;
