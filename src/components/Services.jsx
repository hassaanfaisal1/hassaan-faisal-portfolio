"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const PremiumCard = ({ title, items, index }) => {
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
      ref={cardRef} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave}
      className="relative min-h-[400px] perspective-[1000px] group"
    >
      <motion.div
        style={isHovered ? { rotateX, rotateY, scale: 1.02, zIndex: 20, willChange: "transform" } : { rotateX: 0, rotateY: 0, scale: 1, zIndex: 1, willChange: "transform" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-full h-full bg-white rounded-3xl border border-black/5 p-8 flex flex-col justify-between overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.03)] [transform-style:preserve-3d]"
      >
        <motion.div 
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-transform"
          style={{ background: useTransform([smoothX, smoothY], ([x, y]) => `radial-gradient(400px circle at ${x + (cardRef.current?.offsetWidth||0)/2}px ${y + (cardRef.current?.offsetHeight||0)/2}px, rgba(99,102,241,0.08), transparent)`) }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div style={{ transform: "translateZ(30px)" }}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-indigo-500 mb-6 font-semibold border border-indigo-100 bg-indigo-50/50 px-3 py-1.5 rounded-full inline-block">0{index + 1}</div>
          <h3 className="font-display text-4xl font-extrabold text-[#111] mb-8 tracking-tighter">{title}</h3>
        </div>
        
        <ul className="flex flex-col gap-4 relative z-10" style={{ transform: "translateZ(40px)" }}>
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 transition-all duration-300 group-hover/item:scale-150 group-hover/item:bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
              <span className="text-gray-600 font-medium group-hover/item:text-[#111] transition-colors">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const ExpertiseBadge = ({ text, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative px-6 py-4 rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden flex items-center justify-center cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <span className="relative z-10 font-mono text-xs md:text-sm uppercase tracking-widest text-gray-600 font-semibold group-hover:text-indigo-600 transition-colors">{text}</span>
  </motion.div>
);

export default function Services() {
  const primaryServices = [
    { title: "WordPress Development", items: ["Custom Theme & Plugin Development", "Performance Optimization", "Advanced Custom Fields (ACF)", "WooCommerce Integration"] },
    { title: "Frontend Engineering", items: ["Modern React & Next.js Applications", "Interactive WebGL & Canvas", "Complex State Management", "Pixel-Perfect UI Implementation"] },
    { title: "E-Commerce Solutions", items: ["Custom Shopify Storefronts", "Liquid Theme Development", "Payment Gateway Integration", "Conversion Rate Optimization"] },
    { title: "Custom Web Applications", items: ["Full-Stack Architecture", "API Design & Integration", "Database Modeling", "Scalable Cloud Deployment"] },
    { title: "Performance & SEO", items: ["Core Web Vitals Optimization", "Technical SEO Implementation", "Server-Side Rendering", "Asset Delivery Strategies"] }
  ];

  const moreExpertise = ["Angular", "Tailwind CSS", "PHP", "Figma to Code", "Git/Version Control", "GSAP Animations", "Headless CMS", "RESTful APIs", "WebSockets", "Responsive Design"];

  return (
    <section id="services" className="py-24 md:py-48 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-indigo-200" />
              <span className="font-mono text-sm tracking-widest uppercase text-indigo-600 font-semibold">Specialized Capabilities</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-display text-5xl md:text-7xl font-extrabold text-[#111] leading-[1.1] tracking-tighter">
              Services & <br/>Expertise.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {primaryServices.map((service, i) => (
            <PremiumCard key={i} title={service.title} items={service.items} index={i} />
          ))}
        </div>

        <div>
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-extrabold text-[#111] mb-12 text-center tracking-tight">
            More Expertise
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {moreExpertise.map((exp, i) => (
              <ExpertiseBadge key={i} text={exp} index={i} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
