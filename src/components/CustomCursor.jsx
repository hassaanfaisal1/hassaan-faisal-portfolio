"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isMobile) return;

    let rafId;
    const moveCursor = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };
    
    const handleMouseOver = (e) => {
      const interactiveEl = e.target.closest('[data-interactive="true"], a, button');
      if (interactiveEl) {
        setIsHovering(true);
        const text = interactiveEl.getAttribute('data-cursor-text');
        setCursorText(text || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}
      className={`fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center rounded-full ${isHovering ? "bg-indigo-600/90 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]" : "border border-indigo-600 bg-transparent"} transition-all duration-300 ease-out hidden md:flex`}
      animate={{ width: isHovering ? (cursorText ? 80 : 48) : 16, height: isHovering ? (cursorText ? 80 : 48) : 16 }}
    >
      <span className={`font-mono text-[9px] uppercase tracking-widest font-bold whitespace-nowrap transition-opacity duration-300 ${isHovering && cursorText ? "opacity-100" : "opacity-0 hidden"}`}>
        {cursorText}
      </span>
    </motion.div>
  );
}
