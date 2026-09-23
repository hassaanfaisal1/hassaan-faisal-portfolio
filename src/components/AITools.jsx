"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const tools = [
  { name: "Claude", desc: "Advanced reasoning, code generation & analysis", category: "AI Tool" },
  { name: "ChatGPT", desc: "Rapid prototyping, logic debugging & ideation", category: "AI Tool" },
  { name: "Cursor", desc: "AI-first code editor for seamless workflow integration", category: "AI Editor" },
  { name: "Antigravity", desc: "Advanced agentic coding & autonomous workspace", category: "AI Agent" },
  { name: "GitHub", desc: "Version control, collaboration & CI/CD workflows", category: "DevOps" },
  { name: "Figma", desc: "UI/UX design, prototyping & developer handoff", category: "Design" },
  { name: "WordPress", desc: "Custom theme development & content management", category: "CMS" },
  { name: "Shopify", desc: "E-commerce solutions & custom storefronts", category: "E-Commerce" },
  { name: "Angular", desc: "Component-based architecture & enterprise web apps", category: "Framework" },
  { name: "JavaScript", desc: "Core interactive web development logic", category: "Language" },
  { name: "PHP", desc: "Server-side logic & custom backend integrations", category: "Language" },
  { name: "HTML / CSS", desc: "Semantic structure & responsive styling", category: "Core Web" }
];

const ToolCard = ({ tool, index }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });
  const rotateX = useTransform(smoothY, [-100, 100], [10, -10]);
  const rotateY = useTransform(smoothX, [-100, 100], [-10, 10]);

  let rafId;
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    });
  };

  const handleMouseLeave = () => {
    cancelAnimationFrame(rafId);
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave}
      className="relative h-40 md:h-48 group perspective-[1000px]"
    >
      <motion.div
        style={isHovered ? { rotateX, rotateY, scale: 1.05, zIndex: 20, willChange: "transform" } : { rotateX: 0, rotateY: 0, scale: 1, zIndex: 1, willChange: "transform" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full border border-black/5 bg-white rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] [transform-style:preserve-3d]"
      >
        <motion.div 
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-transform"
          style={{ background: useTransform([smoothX, smoothY], ([x, y]) => `radial-gradient(200px circle at ${x + (cardRef.current?.offsetWidth||0)/2}px ${y + (cardRef.current?.offsetHeight||0)/2}px, rgba(99,102,241,0.05), transparent)`) }}
        />

        <div className="flex justify-between items-start" style={{ transform: "translateZ(20px)" }}>
          <div className="w-10 h-10 rounded-full border border-indigo-100 bg-indigo-50/50 flex items-center justify-center transition-colors group-hover:bg-indigo-100 group-hover:border-indigo-200">
            <div className="w-2 h-2 rounded-full bg-indigo-300 group-hover:bg-indigo-600 transition-colors" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-indigo-500 font-bold bg-indigo-50 px-2 py-1 rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
            {tool.category}
          </span>
        </div>

        <div style={{ transform: "translateZ(30px)" }}>
          <h4 className="font-display text-xl md:text-2xl font-extrabold text-[#111] mb-2">{tool.name}</h4>
          <p className="text-xs md:text-sm text-gray-500 font-medium line-clamp-2 transition-colors group-hover:text-gray-700">
            {tool.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function AITools() {
  return (
    <section id="workflow" className="py-24 md:py-40 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-indigo-200" />
            <span className="font-mono text-sm tracking-widest uppercase text-indigo-600 font-semibold">Workflow Evolution</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#111] mb-8 tracking-tighter leading-[1.1]">
            <span className="block overflow-hidden">
              <motion.span initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="block">Modern Tools.</motion.span>
            </span>
            <span className="block overflow-hidden text-gray-400">
              <motion.span initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block">Smarter Workflow.</motion.span>
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl"
          >
            Combining hands-on web development with modern AI-assisted tools to research, prototype, debug and build faster while keeping development quality and control in my hands.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <ToolCard key={i} tool={tool} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
