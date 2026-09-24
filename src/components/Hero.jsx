"use client";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const FloatingPill = ({ text, initialPos, delay, mouseX, mouseY }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState(initialPos);
  
  useEffect(() => {
    let raf;
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const pillCenterX = rect.left + rect.width / 2;
        const pillCenterY = rect.top + rect.height / 2;
        
        // Use the raw mouse coordinate values for repulsion
        const dx = mouseX.get() - pillCenterX;
        const dy = mouseY.get() - pillCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          setPosition({
            x: position.x - (dx / distance) * force * 5,
            y: position.y - (dy / distance) * force * 5
          });
        }
      }
      raf = requestAnimationFrame(updatePosition);
    };
    raf = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(raf);
  }, [mouseX, mouseY, position]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        x: position.x, 
        y: position.y,
        y: [position.y - 10, position.y + 10, position.y - 10]
      }}
      transition={{
        opacity: { duration: 1, delay },
        scale: { duration: 1, delay },
        y: { duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" }
      }}
      className="absolute px-4 py-2 bg-white/80 backdrop-blur-md border border-indigo-100/50 rounded-2xl shadow-[0_8px_20px_rgba(99,102,241,0.05)] font-mono text-[10px] md:text-xs text-indigo-700 tracking-widest uppercase cursor-default hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] hover:scale-105 transition-all duration-300 z-20 whitespace-nowrap"
      style={{ left: `${initialPos.left}%`, top: `${initialPos.top}%` }}
    >
      {text}
    </motion.div>
  );
};

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityFade = useTransform(scrollY, [0, 800], [1, 0]);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  
  // Smooth spring for the hero tilt effect
  const smoothX = useSpring(useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-20, 20]), { damping: 30, stiffness: 100 });
  const smoothY = useSpring(useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [-20, 20]), { damping: 30, stiffness: 100 });

  let rafId;
  const handleMouseMove = (e) => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headlineLines = ["Hassaan Faisal", "Frontend Developer."];

  const tags = [
    { text: "WordPress", pos: { left: 10, top: 20, x: 0, y: 0 } },
    { text: "Shopify", pos: { left: 80, top: 15, x: 0, y: 0 } },
    { text: "Wix", pos: { left: 5, top: 50, x: 0, y: 0 } },
    { text: "Angular", pos: { left: 85, top: 40, x: 0, y: 0 } },
    { text: "PHP", pos: { left: 15, top: 75, x: 0, y: 0 } },
    { text: "JavaScript", pos: { left: 75, top: 70, x: 0, y: 0 } },
    { text: "UI/UX", pos: { left: 20, top: 10, x: 0, y: 0 } },
    { text: "AI-Assisted Dev", pos: { left: 65, top: 85, x: 0, y: 0 } },
    { text: "ChatGPT", pos: { left: 5, top: 85, x: 0, y: 0 } },
    { text: "Claude", pos: { left: 30, top: 85, x: 0, y: 0 } },
    { text: "Cursor", pos: { left: 45, top: 10, x: 0, y: 0 } },
    { text: "Antigravity", pos: { left: 85, top: 60, x: 0, y: 0 } },
    { text: "Figma", pos: { left: 70, top: 5, x: 0, y: 0 } },
    { text: "Frontend", pos: { left: 10, top: 65, x: 0, y: 0 } },
    { text: "CMS Development", pos: { left: 80, top: 25, x: 0, y: 0 } },
  ];

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 bg-transparent z-10 perspective-[1000px]">
      
      {/* Interactive Light Atmosphere */}
      <motion.div style={{ x: smoothX, y: smoothY, willChange: "transform" }} className="absolute inset-0 pointer-events-none z-0">
         <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.5, 0.4] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[25%] w-[40vw] h-[40vw] bg-indigo-100/50 rounded-full blur-[80px]" />
         <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[20%] right-[15%] w-[40vw] h-[40vw] bg-purple-100/50 rounded-full blur-[100px]" />
      </motion.div>

      {/* Floating Pills - Hidden on very small mobile to prevent clutter */}
      <div className="absolute inset-0 pointer-events-auto hidden md:block overflow-hidden">
        {tags.map((tag, i) => (
          <FloatingPill key={i} text={tag.text} initialPos={tag.pos} delay={0.5 + i * 0.05} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>

      <motion.div style={{ y: yParallax, opacity: opacityFade, willChange: "transform" }} className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="mb-6 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-gray-500 uppercase font-semibold">Available for new projects</span>
        </motion.div>

        <motion.h1 style={{ x: smoothX, y: smoothY, willChange: "transform" }} className="font-display text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] font-bold tracking-tighter text-[#111] leading-[0.95] flex flex-col gap-2 relative z-30">
          {headlineLines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-4 px-4">
              <motion.span initial={{ y: "100%", rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.1 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }} className="block">
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="mt-8 text-gray-600 text-lg md:text-xl font-medium max-w-2xl leading-relaxed relative z-30">
          Crafting premium digital experiences through modern web development and AI-assisted workflows.
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-16 relative group cursor-pointer z-30" onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>
          <div className="absolute inset-0 bg-indigo-200/50 rounded-full blur-xl scale-150 group-hover:bg-indigo-300/60 transition-all duration-700" />
          <div className="w-16 h-16 rounded-full border border-indigo-100 flex items-center justify-center relative bg-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-indigo-600 transition-colors duration-500 shadow-xl">
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
