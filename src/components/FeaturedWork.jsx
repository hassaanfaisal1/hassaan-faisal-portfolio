"use client";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

const featuredProjects = [
  { name: "I & S", website: "https://insdigital.ae/", platform: "WordPress", category: "Digital", description: "Professional digital business website with strong focus on performance and UI.", layout: "left", scene: "agency", short: "I&S" },
  { name: "Galax PMU", website: "https://galaxpmu.com/", platform: "WordPress", category: "Corporate", description: "Modern website developed for a specialized corporate business.", layout: "right", scene: "corporate", short: "GPMU" },
  { name: "AL Basateen", website: "https://albasateenvillage.com/", platform: "WordPress", category: "Corporate", description: "Corporate platform emphasizing premium presentation and architecture.", layout: "left", scene: "corporate", short: "ALB" },
  { name: "Bay Bio Sciences", website: "https://baybiosciences.com/", platform: "WordPress", category: "Corporate", description: "Professional website developed for a biosciences company.", layout: "right", scene: "corporate", short: "BBS" },
  { name: "Verses of Life", website: "https://versesoflifebook.com/", platform: "Shopify", category: "E-commerce", description: "Shopify website developed for a book brand, with a product focused layout.", layout: "left", scene: "ecommerce", short: "VOL" },
  { name: "Octa", website: "https://octa.onyxcoatingsa.com/", platform: "WordPress", category: "Business", description: "Corporate platform emphasizing industrial product details and presentation.", layout: "right", scene: "tech", short: "OCTA" },
  { name: "Systechlogic", website: "https://systechlogic.com/", platform: "WordPress", category: "Technology", description: "Modern website developed for an IT and technology solutions business.", layout: "left", scene: "tech", short: "STL" },
  { name: "Logo Grove", website: "https://logogrove.com/", platform: "WordPress", category: "Digital", description: "WordPress website developed for a creative digital business.", layout: "right", scene: "agency", short: "LG" }
];

const moreProjects = [
  { name: "Shubak Live", website: "https://shubak.agency/", platform: "WordPress", layout: "half", scene: "agency", short: "SL" },
  { name: "Pearl Live", website: "https://pearl-yarmouk.com/", platform: "WordPress", layout: "half", scene: "corporate", short: "PL" },
  { name: "Chillbox", website: "https://chilbox.shubak.agency/", platform: "WordPress", layout: "full", scene: "agency", short: "CB" },
  { name: "Aminos", website: "https://pureaminos.org/", platform: "WordPress", layout: "third", scene: "ecommerce", short: "PA" },
  { name: "Digital Crafter AI", website: "https://digitalcrafters.ai/", platform: "WordPress", layout: "third", scene: "tech", short: "DCA" },
  { name: "Dr Lips", website: "https://drlips.shubak.agency/", platform: "WordPress", layout: "third", scene: "corporate", short: "DL" },
  { name: "New Galax PMU", website: "https://galaxpmu.com/", platform: "WordPress", layout: "half", scene: "agency", short: "GPMU" },
  { name: "Arsenal Solar", website: "https://www.arsenalsolar.com/", platform: "Wix", layout: "half", scene: "tech", short: "AS" },
  { name: "Cruze Creative", website: "https://cruze-creative.logogrove.com/", platform: "WordPress", layout: "full", scene: "agency", short: "CC" },
  { name: "KIG Vehicle", website: "https://kigvehicleconcepts.com/", platform: "WordPress", layout: "third", scene: "corporate", short: "KIG" },
  { name: "Comfortably Outdoors", website: "https://comfortably-outdoors-qzc1xfiz.myshopify.com/", platform: "Shopify", layout: "third", scene: "ecommerce", short: "CO" },
  { name: "The Oxygen Store", website: "https://theoxygenstore-com.myshopify.com/", platform: "Shopify", layout: "third", scene: "ecommerce", short: "OXY" },
  { name: "Ashberi", website: "https://ashberi.com/", platform: "Shopify", layout: "half", scene: "ecommerce", short: "ASH" },
  { name: "Kateri The Label", website: "https://www.katerithelabel.com/", platform: "Shopify", layout: "half", scene: "ecommerce", short: "KTL" }
];

const HighFidelityMockups = {
  Ecommerce: ({ smoothX, smoothY, isHovered, title }) => (
    <div className="w-full h-full p-4 md:p-8 flex items-center justify-center relative perspective-[2000px]">
      <motion.div style={{ rotateX: useTransform(smoothY, [-300, 300], [5, -5]), rotateY: useTransform(smoothX, [-300, 300], [-5, 5]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5 }} className="w-full h-full bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col overflow-hidden [transform-style:preserve-3d]">
        <div className="h-6 bg-gray-50 border-b border-black/5 flex items-center px-3 gap-1.5"><div className="w-2 h-2 rounded-full bg-red-400"/><div className="w-2 h-2 rounded-full bg-amber-400"/><div className="w-2 h-2 rounded-full bg-green-400"/></div>
        <div className="h-10 bg-white border-b border-black/5 flex items-center justify-between px-4">
          <div className="font-display font-bold text-[#111] text-xs uppercase tracking-widest">{title}</div>
          <div className="flex gap-3"><div className="w-8 h-2 bg-gray-200 rounded-full"/><div className="w-8 h-2 bg-gray-200 rounded-full"/></div>
        </div>
        <div className="flex-1 bg-gray-50 p-4 flex flex-col gap-4 relative">
          <motion.div style={{ translateZ: 20 }} className="w-full h-1/2 bg-gradient-to-r from-indigo-100 to-indigo-50 rounded-lg border border-black/5 flex items-center p-6">
            <div className="flex flex-col gap-2 w-1/2">
              <div className="w-3/4 h-4 bg-indigo-900/20 rounded-sm"/>
              <div className="w-1/2 h-2 bg-indigo-900/10 rounded-sm"/>
              <div className="w-16 h-6 bg-indigo-600 rounded mt-2"/>
            </div>
          </motion.div>
          <div className="flex-1 grid grid-cols-3 gap-3">
             {[1,2,3].map(i => (
               <motion.div key={i} style={{ translateZ: 30 + i*5 }} className="bg-white rounded-md border border-black/5 p-2 flex flex-col gap-2 shadow-sm">
                 <div className="w-full aspect-square bg-gray-100 rounded"/>
                 <div className="w-full h-1.5 bg-gray-200 rounded-full"/>
                 <div className="w-1/2 h-1.5 bg-gray-200 rounded-full"/>
               </motion.div>
             ))}
          </div>
        </div>
      </motion.div>
    </div>
  ),
  Agency: ({ smoothX, smoothY, isHovered, title }) => (
    <div className="w-full h-full p-4 md:p-8 flex items-center justify-center relative perspective-[2000px]">
      <motion.div style={{ rotateX: useTransform(smoothY, [-300, 300], [5, -5]), rotateY: useTransform(smoothX, [-300, 300], [-5, 5]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5 }} className="w-full h-full bg-[#111] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/10 flex flex-col overflow-hidden [transform-style:preserve-3d]">
        <div className="h-6 bg-black flex items-center px-3 gap-1.5"><div className="w-2 h-2 rounded-full bg-white/20"/><div className="w-2 h-2 rounded-full bg-white/20"/></div>
        <div className="flex-1 relative overflow-hidden flex flex-col items-center justify-center p-8">
          <motion.div style={{ translateZ: 10 }} className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-transparent"/>
          <motion.div style={{ translateZ: 40 }} className="font-display text-2xl md:text-4xl text-white font-bold tracking-tighter text-center mb-4">{title}</motion.div>
          <motion.div style={{ translateZ: 30 }} className="flex gap-2"><div className="w-12 h-1 bg-indigo-500"/><div className="w-12 h-1 bg-white/20"/></motion.div>
          <motion.div style={{ translateZ: 50 }} className="mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="h-16 bg-white/5 rounded-lg border border-white/10 backdrop-blur"/>
            <div className="h-16 bg-white/5 rounded-lg border border-white/10 backdrop-blur"/>
          </motion.div>
        </div>
      </motion.div>
    </div>
  ),
  Corporate: ({ smoothX, smoothY, isHovered, title }) => (
    <div className="w-full h-full p-4 md:p-8 flex items-center justify-center relative perspective-[2000px]">
      <motion.div style={{ rotateX: useTransform(smoothY, [-300, 300], [5, -5]), rotateY: useTransform(smoothX, [-300, 300], [-5, 5]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5 }} className="w-full h-full bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col overflow-hidden [transform-style:preserve-3d]">
        <div className="h-12 bg-white border-b border-black/5 flex items-center justify-between px-6">
          <div className="font-display font-bold text-[#111]">{title}</div>
          <div className="flex gap-4"><div className="w-4 h-1 bg-gray-300"/><div className="w-4 h-1 bg-gray-300"/><div className="w-12 h-4 bg-indigo-600 rounded"/></div>
        </div>
        <div className="flex-1 flex">
          <div className="w-1/2 h-full bg-gray-50 p-6 flex flex-col justify-center gap-4 relative">
            <motion.div style={{ translateZ: 20 }} className="w-3/4 h-6 bg-gray-800 rounded"/>
            <motion.div style={{ translateZ: 20 }} className="w-full h-2 bg-gray-300 rounded"/>
            <motion.div style={{ translateZ: 20 }} className="w-5/6 h-2 bg-gray-300 rounded"/>
            <motion.div style={{ translateZ: 20 }} className="w-24 h-8 bg-[#111] rounded mt-2"/>
          </div>
          <motion.div style={{ translateZ: 30 }} className="w-1/2 h-full bg-indigo-100/50 border-l border-black/5 relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0,transparent_100%)]"/>
             <div className="w-1/2 aspect-square bg-white rounded-full shadow-lg border border-black/5"/>
          </motion.div>
        </div>
      </motion.div>
    </div>
  ),
  Tech: ({ smoothX, smoothY, isHovered, title }) => (
    <div className="w-full h-full p-4 md:p-8 flex items-center justify-center relative perspective-[2000px]">
      <motion.div style={{ rotateX: useTransform(smoothY, [-300, 300], [5, -5]), rotateY: useTransform(smoothX, [-300, 300], [-5, 5]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5 }} className="w-full h-full bg-gray-50 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-black/5 flex flex-col overflow-hidden [transform-style:preserve-3d]">
        <div className="h-6 border-b border-black/5 flex items-center px-3 gap-1.5 bg-gray-200"><div className="w-2 h-2 rounded-full bg-white"/></div>
        <div className="flex-1 p-4 flex flex-col gap-4">
          <motion.div style={{ translateZ: 20 }} className="w-full h-32 bg-white rounded-lg border border-black/5 shadow-sm p-4 flex flex-col justify-between">
            <div className="font-mono text-xs text-indigo-600 font-bold uppercase">{title} Platform</div>
            <div className="w-full h-12 bg-gray-50 rounded border border-black/5 flex items-center px-4"><div className="w-1/3 h-2 bg-gray-300 rounded"/></div>
          </motion.div>
          <div className="flex-1 flex gap-4">
            <motion.div style={{ translateZ: 30 }} className="w-1/3 bg-white rounded-lg border border-black/5 shadow-sm p-3 flex flex-col gap-2">
              <div className="w-full h-4 bg-gray-100 rounded"/>
              <div className="w-full h-4 bg-gray-100 rounded"/>
            </motion.div>
            <motion.div style={{ translateZ: 40 }} className="flex-1 bg-white rounded-lg border border-black/5 shadow-sm p-4">
              <div className="flex gap-2 mb-2"><div className="w-8 h-8 rounded-full bg-indigo-50"/><div className="w-8 h-8 rounded-full bg-indigo-50"/></div>
              <div className="w-full h-2 bg-gray-100 mt-4 rounded"/><div className="w-3/4 h-2 bg-gray-100 mt-2 rounded"/>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
};

const Atmospheres = {
  0: () => <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-[200%] bg-gradient-to-r from-transparent via-indigo-50/50 to-transparent -skew-x-12 pointer-events-none will-change-transform" />,
  1: ({ smoothX, smoothY }) => <motion.div style={{ x: smoothX, y: smoothY, willChange: "transform" }} className="absolute inset-0 w-[300px] h-[300px] -ml-[150px] -mt-[150px] bg-purple-50/50 rounded-full blur-[40px] pointer-events-none" />,
  2: () => <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50"><motion.div animate={{ y: ["120%", "-20%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute bg-indigo-100 rounded-full blur-[1px] will-change-transform w-1 h-1 left-[20%]" /></div>,
  3: () => <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20"><motion.rect x="0" y="0" width="100%" height="100%" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="300" animate={{ strokeDashoffset: [300, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="will-change-transform" /></svg>,
  4: () => <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent pointer-events-none will-change-transform" />
};

const UnifiedProjectContainer = ({ project, index }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const sceneCapitalized = project.scene.charAt(0).toUpperCase() + project.scene.slice(1);
  const Scene = HighFidelityMockups[sceneCapitalized] || HighFidelityMockups.Tech;
  const Atmosphere = Atmospheres[index % 5];

  let rafId;
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.1);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.1);
    });
  };
  const handleMouseLeave = () => {
    cancelAnimationFrame(rafId);
    setIsHovered(false);
    mouseX.set(0); mouseY.set(0);
  };

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full rounded-[2rem] border border-black/5 bg-white overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.08)] transition-all duration-500"
      onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave}
    >
      <Atmosphere smoothX={smoothX} smoothY={smoothY} />
      
      <div className={`relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${project.layout === 'right' ? 'lg:flex-row-reverse' : ''}`}>
        
        <div className={`flex flex-col justify-center p-8 md:p-12 ${project.layout === 'right' ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-5'}`}>
          <div className="flex flex-col gap-1 mb-6">
            <motion.h3 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#111]">
              {project.name}
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-mono text-[9px] md:text-[10px] tracking-widest text-gray-400 uppercase font-bold mt-2">
              DESIGNED & DEVELOPED BY HASSAAN
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap items-center gap-2 mb-6">
            <span className="font-mono text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full uppercase tracking-widest font-bold shadow-sm">{project.platform}</span>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest px-2 font-semibold">{project.category}</span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-600 text-sm md:text-base leading-relaxed font-medium mb-8">
            {project.description}
          </motion.p>
          
          <motion.a 
            href={project.website} target="_blank" rel="noopener noreferrer" data-interactive="true"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="group/btn flex items-center gap-3 bg-[#111] text-white px-8 py-4 rounded-full font-mono text-xs tracking-widest uppercase font-bold hover:bg-indigo-600 transition-all duration-300 w-fit shadow-md hover:shadow-lg"
          >
            VIEW LIVE SITE
            <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" />
            </svg>
          </motion.a>
        </div>

        <div className={`w-full min-h-[400px] relative bg-gray-50/50 border-l border-black/5 ${project.layout === 'right' ? 'lg:col-start-1 lg:col-span-6 border-r border-l-0' : 'lg:col-span-7'}`}>
          <a href={project.website} target="_blank" rel="noopener noreferrer" data-interactive="true" data-cursor-text="Visit" className="block w-full h-full relative cursor-none">
            <Scene smoothX={smoothX} smoothY={smoothY} isHovered={isHovered} title={project.short} />
          </a>
        </div>
        
      </div>
    </motion.div>
  );
};

const IntegratedProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const sceneCapitalized = project.scene.charAt(0).toUpperCase() + project.scene.slice(1);
  const Scene = HighFidelityMockups[sceneCapitalized] || HighFidelityMockups.Tech;

  let rafId;
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.05);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.05);
    });
  };
  const handleMouseLeave = () => {
    cancelAnimationFrame(rafId);
    setIsHovered(false);
    mouseX.set(0); mouseY.set(0);
  };

  const colSpanClass = project.layout === "full" ? "md:col-span-12 aspect-[21/9]" : project.layout === "half" ? "md:col-span-6 aspect-[4/3] md:aspect-square" : "md:col-span-4 aspect-[4/5]";
  
  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`${colSpanClass} relative rounded-3xl border border-black/5 bg-gray-50 overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500`}
      onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave}
    >
       <a href={project.website} target="_blank" rel="noopener noreferrer" data-interactive="true" data-cursor-text="Visit" className="absolute inset-0 flex flex-col cursor-none">
         
         <div className="absolute inset-0 z-0 bg-transparent">
            <Scene smoothX={smoothX} smoothY={smoothY} isHovered={isHovered} title={project.short} />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none transition-opacity duration-300" />
         </div>
         
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-end">
               <div>
                 <h3 className="font-display text-2xl md:text-3xl font-bold text-[#111] tracking-tight group-hover:text-indigo-600 transition-colors drop-shadow-sm">{project.name}</h3>
                 <p className="font-mono text-[9px] tracking-widest text-gray-500 uppercase font-bold mt-1 drop-shadow-sm">DESIGNED & DEVELOPED BY HASSAAN</p>
               </div>
               <span className="font-mono text-[9px] text-indigo-700 bg-white border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold shadow-sm hidden sm:block">
                 {project.platform}
               </span>
            </div>
            
            <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs uppercase tracking-widest font-bold mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/80 backdrop-blur px-4 py-2 rounded-full w-fit">
               View Live Site
               <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" /></svg>
            </div>
         </div>
       </a>
    </motion.div>
  );
};

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20 md:py-24 bg-[#f8f9fa] relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12 md:mb-16 flex flex-col items-start md:items-center md:text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#111] mb-4">
            Selected Work
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full" />
        </motion.div>
        
        <div className="flex flex-col gap-12 md:gap-16 mb-16 md:mb-24">
          {featuredProjects.map((project, i) => (
            <UnifiedProjectContainer key={i} project={project} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-indigo-200" />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#111] tracking-tight">Complete Portfolio</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
           {moreProjects.map((project, i) => (
             <IntegratedProjectCard key={i} project={project} index={i} />
           ))}
        </div>

      </div>
    </section>
  );
}
