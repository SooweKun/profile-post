import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue } from "motion/react";

function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const cursorColor = useMotionValue("white");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 4.5);
      cursorY.set(e.clientY - 4.5);
    };

    const handleMouseDown = () => cursorColor.set("gray");
    const handleMouseUp = () => cursorColor.set("white");

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorColor, cursorX, cursorY]);

  return createPortal(
    <motion.div
      className="cursor"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        backgroundColor: cursorColor,
      }}
    />,
    document.body
  );
}

export default CustomCursor;
