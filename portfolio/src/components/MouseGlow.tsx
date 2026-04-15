import { useEffect, useState } from "react";

const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveGlow);

    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        className="absolute h-56 w-56 rounded-full bg-primary/20 blur-3xl transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 112}px, ${position.y - 112}px)`,
        }}
      />
    </div>
  );
};

export default MouseGlow;
