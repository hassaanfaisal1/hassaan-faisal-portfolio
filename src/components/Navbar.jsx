"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Workflow", href: "#workflow" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm py-4" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-display text-xl md:text-2xl font-bold text-[#111] tracking-tighter" data-interactive="true">HF<span className="text-indigo-500">.</span></a>
          <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-8 py-3 rounded-full border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="font-mono text-xs uppercase tracking-widest text-gray-500 hover:text-indigo-600 transition-colors" data-interactive="true">
                {link.name}
              </a>
            ))}
          </div>
          <button className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`w-6 h-px bg-[#111] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-px bg-[#111] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-px bg-[#111] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex items-center justify-center">
            <div className="flex flex-col gap-8 text-center">
              {links.map((link, i) => (
                <motion.a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="font-display text-4xl text-[#111] font-bold">
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
