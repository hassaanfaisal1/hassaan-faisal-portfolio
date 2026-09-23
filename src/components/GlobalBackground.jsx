"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import CanvasParticles from "./CanvasParticles";
import { useEffect, useState } from "react";

export default function GlobalBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -600]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 600]);
  const y3 = useTransform(scrollY, [0, 5000], [0, -400]);

  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#f8f9fa]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      
      {!isMobile && <CanvasParticles />}

      {/* Optimized Light Mode Soft Pastel Orbs - Removed heavy mix-blend for smooth scrolling */}
      <motion.div style={{ y: y1, willChange: "transform" }} className="absolute top-[5%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/20 rounded-full blur-[80px] md:blur-[100px]" />
      <motion.div style={{ y: y2, willChange: "transform" }} className="absolute top-[40%] right-[5%] w-[40vw] h-[40vw] bg-blue-100/30 rounded-full blur-[100px] md:blur-[120px]" />
      <motion.div style={{ y: y3, willChange: "transform" }} className="absolute top-[70%] left-[20%] w-[30vw] h-[30vw] bg-purple-100/20 rounded-full blur-[80px] md:blur-[100px]" />
      
      <div className="absolute left-4 md:left-12 top-0 h-full w-px bg-black/[0.03]">
        <motion.div 
          animate={{ y: ["-100%", "1000%"] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="w-full h-40 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"
        />
      </div>
    </div>
  );
}
