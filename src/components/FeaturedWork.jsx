"use client";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";

const featuredProjects = [
  { name: "Digital Crafters AI", website: "https://digitalcrafters.ai/", platform: "WordPress", category: "Technology", description: "Modern website developed for an AI technology and digital crafting business.", layout: "left", scene: "tech" },
  { name: "Shubak Live", website: "https://shubak.agency/", platform: "WordPress", category: "Digital Agency", description: "Creative agency website showcasing digital services and portfolio.", layout: "right", scene: "agency" },
  { name: "Octa", website: "https://octa.onyxcoatingsa.com/", platform: "WordPress", category: "Business", description: "Corporate platform emphasizing industrial product details and presentation.", layout: "left", scene: "corporate" },
  { name: "INS Digital", website: "https://insdigital.ae/", platform: "WordPress", category: "Digital", description: "Professional digital business website with strong focus on performance and UI.", layout: "right", scene: "agency" },
  { name: "Bay Biosciences", website: "https://baybiosciences.com/", platform: "WordPress", category: "Corporate", description: "Professional website developed for a biosciences company.", layout: "left", scene: "corporate" },
  { name: "Verses of Life", website: "https://versesoflifebook.com/", platform: "Shopify", category: "E-commerce", description: "Shopify website developed for a book brand, with a product focused layout.", layout: "right", scene: "ecommerce" },
  { name: "Logo Grove", website: "https://logogrove.com/", platform: "WordPress", category: "Digital", description: "WordPress website developed for a creative digital business.", layout: "left", scene: "agency" },
  { name: "Comfortably Outdoors", website: "https://comfortably-outdoors-qzc1xfiz.myshopify.com/", platform: "Shopify", category: "E-commerce", description: "Shopify store developed around product presentation.", layout: "right", scene: "ecommerce" }
];

const moreProjects = [
  { name: "Galax PMU", website: "https://galaxpmu.com/", platform: "WordPress", layout: "half", scene: "agency" },
  { name: "AL Basateen", website: "https://albasateenvillage.com/", platform: "WordPress", layout: "half", scene: "corporate" },
  { name: "Systechlogic", website: "https://systechlogic.com/", platform: "WordPress", layout: "full", scene: "tech" },
  { name: "Pearl Live", website: "https://pearl-yarmouk.com/", platform: "WordPress", layout: "half", scene: "corporate" },
  { name: "Chillbox", website: "https://chilbox.shubak.agency/", platform: "WordPress", layout: "half", scene: "agency" },
  { name: "Aminos", website: "https://pureaminos.org/", platform: "WordPress", layout: "third", scene: "ecommerce" },
  { name: "Dr Lips", website: "https://drlips.shubak.agency/", platform: "WordPress", layout: "third", scene: "corporate" },
  { name: "New Galax PMU", website: "https://galaxpmu.com/", platform: "WordPress", layout: "third", scene: "agency" },
  { name: "Arsenal Solar", website: "https://www.arsenalsolar.com/", platform: "Wix", layout: "half", scene: "tech" },
  { name: "Cruze Creative", website: "https://cruze-creative.logogrove.com/", platform: "WordPress", layout: "half", scene: "agency" },
  { name: "KIG Vehicle", website: "https://kigvehicleconcepts.com/", platform: "WordPress", layout: "full", scene: "corporate" },
  { name: "The Oxygen Store", website: "https://theoxygenstore-com.myshopify.com/", platform: "Shopify", layout: "third", scene: "ecommerce" },
  { name: "Ashberi", website: "https://ashberi.com/", platform: "Shopify", layout: "third", scene: "ecommerce" },
  { name: "Kateri The Label", website: "https://www.katerithelabel.com/", platform: "Shopify", layout: "third", scene: "ecommerce" }
];

const AbstractScenes = {
  Tech: ({ smoothX, smoothY, isHovered }) => (
    <div className="w-full h-full relative flex items-center justify-center p-4 md:p-8 perspective-[2000px]">
      <motion.div style={{ rotateX: useTransform(smoothY, [-300, 300], [5, -5]), rotateY: useTransform(smoothX, [-300, 300], [-5, 5]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full h-full bg-white border border-black/5 shadow-lg rounded-xl relative [transform-style:preserve-3d] flex flex-col overflow-hidden">
        <div className="h-6 border-b border-black/5 flex items-center px-3 gap-1.5 bg-gray-50 shrink-0"><div className="w-2 h-2 rounded-full bg-black/10" /><div className="w-2 h-2 rounded-full bg-black/10" /><div className="w-2 h-2 rounded-full bg-black/10" /></div>
        <div className="flex-1 flex gap-3 p-3 [transform-style:preserve-3d]">
          <motion.div style={{ translateZ: 10, x: useTransform(smoothX, [-300, 300], [-5, 5]), willChange: "transform" }} className="flex-1 bg-indigo-50/50 rounded-md relative overflow-hidden" />
          <motion.div style={{ translateZ: 20, x: useTransform(smoothX, [-300, 300], [5, -5]), willChange: "transform" }} className="w-1/3 bg-gradient-to-br from-indigo-50 to-transparent border border-black/5 rounded-md" />
        </div>
      </motion.div>
    </div>
  ),
  Agency: ({ smoothX, smoothY, isHovered }) => (
    <div className="w-full h-full relative flex items-center justify-center p-4 md:p-8 perspective-[2000px]">
      <motion.div style={{ x: useTransform(smoothX, [-300, 300], [-10, 10]), y: useTransform(smoothY, [-300, 300], [-10, 10]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-3/4 h-3/4 border border-black/5 bg-gray-50/50 rounded-full flex items-center justify-center relative [transform-style:preserve-3d]">
        <motion.div style={{ translateZ: 20, rotate: useTransform(smoothX, [-300, 300], [-2, 2]), willChange: "transform" }} className="w-full h-1/2 bg-white border border-black/5 rounded-xl shadow-lg absolute z-20 flex flex-col p-3 gap-2 overflow-hidden">
          <div className="w-1/2 h-3 bg-gray-100 rounded-sm" />
          <div className="flex-1 bg-gradient-to-r from-indigo-50/50 to-transparent rounded-sm" />
        </motion.div>
      </motion.div>
    </div>
  ),
  Corporate: ({ smoothX, smoothY, isHovered }) => (
    <div className="w-full h-full relative flex items-center justify-center p-4 md:p-8 perspective-[2000px]">
      <motion.div style={{ rotateX: useTransform(smoothY, [-300, 300], [8, -8]), rotateZ: useTransform(smoothX, [-300, 300], [-2, 2]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full h-full bg-gradient-to-b from-gray-50 to-white border border-black/5 rounded-xl shadow-md [transform-style:preserve-3d] flex flex-col p-4 gap-3">
        <motion.div style={{ translateZ: 20, willChange: "transform" }} className="w-full h-1/2 bg-indigo-50/30 rounded-lg border border-black/5 flex items-center justify-center overflow-hidden" />
        <div className="flex gap-3 h-1/3">
           {[1,2,3].map(i => <motion.div key={i} style={{ translateZ: 10 * i, willChange: "transform" }} className="flex-1 bg-gray-50 rounded-md border border-black/5" />)}
        </div>
      </motion.div>
    </div>
  ),
  Ecommerce: ({ smoothX, smoothY, isHovered }) => (
    <div className="w-full h-full relative flex items-center justify-center p-4 md:p-8 perspective-[2000px]">
      <motion.div style={{ rotateX: useTransform(smoothY, [-300, 300], [6, -6]), rotateY: useTransform(smoothX, [-300, 300], [-6, 6]), scale: isHovered ? 1.02 : 1, willChange: "transform" }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-full h-full bg-white border border-black/5 shadow-lg rounded-xl relative [transform-style:preserve-3d] flex flex-col overflow-hidden">
        <div className="h-8 border-b border-black/5 flex items-center justify-between px-4 bg-gray-50 shrink-0">
           <div className="w-12 h-2 bg-gray-200 rounded-sm" />
           <div className="flex gap-1.5"><div className="w-4 h-4 rounded-full bg-gray-200" /><div className="w-4 h-4 rounded-full bg-gray-200" /></div>
        </div>
        <div className="flex-1 p-4 flex flex-col gap-4 [transform-style:preserve-3d]">
          <motion.div style={{ translateZ: 15, willChange: "transform" }} className="w-full h-1/3 bg-gradient-to-r from-indigo-50 to-transparent rounded-md border border-black/5" />
          <div className="flex-1 grid grid-cols-2 gap-3">
            <motion.div style={{ translateZ: 25, willChange: "transform" }} className="bg-gray-50 rounded-md border border-black/5 flex flex-col p-2 gap-1.5">
               <div className="flex-1 bg-gray-100 rounded-sm" /><div className="w-3/4 h-1.5 bg-gray-200 rounded-sm" />
            </motion.div>
            <motion.div style={{ translateZ: 30, willChange: "transform" }} className="bg-gray-50 rounded-md border border-black/5 flex flex-col p-2 gap-1.5">
               <div className="flex-1 bg-gray-100 rounded-sm" /><div className="w-3/4 h-1.5 bg-gray-200 rounded-sm" />
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

// Compact Featured Project Container
const UnifiedProjectContainer = ({ project, index }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const sceneCapitalized = project.scene.charAt(0).toUpperCase() + project.scene.slice(1);
  const Scene = AbstractScenes[sceneCapitalized] || AbstractScenes.Tech;
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
      
      <div className={`relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 md:p-10 ${project.layout === 'right' ? 'lg:flex-row-reverse' : ''}`}>
        
        <div className={`flex flex-col gap-4 ${project.layout === 'right' ? 'lg:col-start-7 lg:col-span-6' : 'lg:col-span-6'}`}>
          <div className="flex flex-col gap-1">
            <motion.h3 initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="font-display text-3xl md:text-5xl font-bold tracking-tight text-[#111]">
              {project.name}
            </motion.h3>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="font-mono text-[9px] md:text-[10px] tracking-widest text-gray-400 uppercase font-bold">
              DESIGNED & DEVELOPED BY HASSAAN
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold shadow-sm">{project.platform}</span>
            <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest px-2 font-semibold">{project.category}</span>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md font-medium">
            {project.description}
          </motion.p>
          
          <motion.a 
            href={project.website} target="_blank" rel="noopener noreferrer" data-interactive="true"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
            className="group flex items-center gap-3 mt-1 text-[#111] font-mono text-xs md:text-sm tracking-widest uppercase font-bold hover:text-indigo-600 transition-colors w-fit"
          >
            VIEW LIVE SITE
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7-7H3" />
            </svg>
          </motion.a>
        </div>

        <div className={`w-full aspect-video md:aspect-[4/3] relative rounded-2xl overflow-hidden bg-gray-50/50 border border-black/5 ${project.layout === 'right' ? 'lg:col-start-1 lg:col-span-6' : 'lg:col-span-6'}`}>
          <a href={project.website} target="_blank" rel="noopener noreferrer" data-interactive="true" data-cursor-text="Visit" className="block w-full h-full relative cursor-none">
            <Scene smoothX={smoothX} smoothY={smoothY} isHovered={isHovered} />
          </a>
        </div>
        
      </div>
    </motion.div>
  );
};

// Intelligently integrated project card for internal grid
const IntegratedProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const sceneCapitalized = project.scene.charAt(0).toUpperCase() + project.scene.slice(1);
  const Scene = AbstractScenes[sceneCapitalized] || AbstractScenes.Tech;

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

  const colSpanClass = project.layout === "full" ? "md:col-span-12 aspect-[21/9]" : project.layout === "half" ? "md:col-span-6 aspect-square" : "md:col-span-4 aspect-[4/5]";
  
  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={`${colSpanClass} relative rounded-3xl border border-black/5 bg-white overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500`}
      onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={handleMouseLeave}
    >
       <a href={project.website} target="_blank" rel="noopener noreferrer" data-interactive="true" data-cursor-text="Visit" className="absolute inset-0 flex flex-col cursor-none">
         
         {/* Background Scene */}
         <div className="absolute inset-0 z-0 bg-gray-50/50">
            <Scene smoothX={smoothX} smoothY={smoothY} isHovered={isHovered} />
            {/* Subtle overlay gradient so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent pointer-events-none transition-opacity duration-300" />
         </div>
         
         {/* Integrated Info at Bottom */}
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex justify-between items-end">
               <div>
                 <h3 className="font-display text-2xl md:text-3xl font-bold text-[#111] tracking-tight group-hover:text-indigo-600 transition-colors drop-shadow-sm">{project.name}</h3>
                 <p className="font-mono text-[9px] tracking-widest text-gray-500 uppercase font-bold mt-1 drop-shadow-sm">DESIGNED & DEVELOPED BY HASSAAN</p>
               </div>
               <span className="font-mono text-[9px] text-indigo-700 bg-white/90 backdrop-blur-md border border-indigo-100 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold shadow-sm hidden sm:block">
                 {project.platform}
               </span>
            </div>
            
            {/* Animated CTA Reveal */}
            <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs uppercase tracking-widest font-bold mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
    <section id="work" className="py-20 md:py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12 md:mb-16 flex flex-col items-start md:items-center md:text-center">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#111] mb-4">
            Selected Work
          </h2>
          <div className="w-16 h-1 bg-indigo-600 rounded-full" />
        </motion.div>
        
        {/* COMPACT FEATURED PROJECTS */}
        <div className="flex flex-col gap-8 md:gap-12 mb-16 md:mb-24">
          {featuredProjects.map((project, i) => (
            <UnifiedProjectContainer key={i} project={project} index={i} />
          ))}
        </div>

        {/* MORE PROJECTS GRID - Highly Integrated & Dense */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8 flex items-center gap-4">
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
