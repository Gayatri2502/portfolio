"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handlePointer = () => {
      const hovered = document.querySelectorAll(
        "button,a,.cursor-hover"
      );

      hovered.forEach((item) => {
        item.addEventListener("mouseenter", () =>
          setIsPointer(true)
        );

        item.addEventListener("mouseleave", () =>
          setIsPointer(false)
        );
      });
    };

    window.addEventListener("mousemove", moveCursor);

    handlePointer();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[999]
          h-10
          w-10
          rounded-full
          bg-cyan-400/10
          border
          border-cyan-400/40
          blur-sm
        "
      />

      {/* Dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 600,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[1000]
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_20px_#22d3ee]
        "
      />
    </>
  );
}