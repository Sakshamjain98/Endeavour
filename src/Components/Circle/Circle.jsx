import  { useRef, useEffect } from 'react';
import "./Cursor.css";

const colors = [
  "#000080", // Navy Blue
  "#001f3f", // Dark Blue
  "#00346e", // Deep Blue
  "#00519f", // Royal Blue
  "#0073cf", // Blue
  "#0097ff", // Sky Blue
  "#00bcff", // Light Blue
  "#00e3ff", // Very Light Blue
  "#00ffff", // Cyan
  "#00e3ff", // Very Light Blue
  "#00bcff", // Light Blue
  "#0097ff", // Sky Blue
  "#0073cf", // Blue
  "#00519f", // Royal Blue
  "#00346e", // Deep Blue
  "#001f3f", // Dark Blue
  "#000080"  // Navy Blue
];

const CirclesAnimation = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newCircles = colors.map((color, index) => ({
        id: index,
        left: e.clientX - 12,
        top: e.clientY - 12,
        scale: (colors.length - index) / colors.length
      }));
      circlesRef.current.forEach((circle, index) => {
        circle.style.left = newCircles[index].left + "px";
        circle.style.top = newCircles[index].top + "px";
        circle.style.transform = `scale(${newCircles[index].scale})`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="circles-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="circle"
          ref={el => (circlesRef.current[index] = el)}
          style={{
            backgroundColor: color,
            transitionDelay: `${(index * 2)}ms`
          }}
        />
      ))}
    </div>
  );
};

export default CirclesAnimation;
