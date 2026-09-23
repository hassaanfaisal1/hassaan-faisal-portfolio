"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const moreProjects = [
  { name: "Chillbox", website: "https://chilbox.shubak.agency/", platform: "WordPress", category: "Product" },
  { name: "Pearl Live", website: "https://pearl-yarmouk.com/", platform: "WordPress", category: "Corporate" },
  { name: "Dr Lips", website: "https://drlips.shubak.agency/", platform: "WordPress", category: "Beauty" },
  { name: "KIG Vehicle Concepts", website: "https://kigvehicleconcepts.com/", platform: "WordPress", category: "Automotive" },
  { name: "Ashberi", website: "https://ashberi.com/", platform: "Shopify", category: "E-commerce" },
  { name: "Kateri The Label", website: "https://www.katerithelabel.com/", platform: "Shopify", category: "Fashion" }
];

export default function MoreWork() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden" onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">Archive Index</h3>
          <div className="w-full h-px bg-white/10 mt-8" />
        </div>

        <div className="flex flex-col relative z-10">
          {moreProjects.map((project, i) => (
            <div key={i} className="flex flex-col relative group">
              <motion.a href={project.website} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 transition-colors relative z-10 border-b border-white/5">
                <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto mb-2 md:mb-0 relative z-10">
                   <span className="font-mono text-[10px] text-gray-600 hidden md:block">{(i + 1).toString().padStart(2, '0')}</span>
                   <span className="font-display text-2xl md:text-4xl font-bold text-gray-300 group-hover:text-white transition-all duration-300 md:group-hover:translate-x-4 tracking-tight">
                     {project.name}
                   </span>
                </div>
                
                <div className="flex items-center gap-6 md:gap-12 justify-between md:justify-end w-full md:w-auto relative z-10">
                   <div className="flex items-center gap-3">
                     <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">{project.platform}</span>
                     <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
                     <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest hidden md:block">{project.category}</span>
                   </div>
                   <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white transition-all duration-300 flex-shrink-0">
                     <svg className="w-4 h-4 text-white group-hover:text-black transform group-hover:rotate-45 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19L19 5M19 5v10M19 5H9" /></svg>
                   </div>
                </div>

                <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ease-out z-20 ${hoveredIndex === i ? 'w-full' : 'w-0'}`} />
                {hoveredIndex === i && <motion.div layoutId="archive-bg" className="hidden md:block absolute inset-0 bg-white/[0.02] -mx-8 px-8 z-0 pointer-events-none rounded-sm" />}
              </motion.a>

              <div className="md:hidden w-full overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: hoveredIndex === i ? '200px' : '0px', opacity: hoveredIndex === i ? 1 : 0 }}>
                 <div className="w-full aspect-[21/9] bg-[#0a0a0a] border border-white/10 rounded-sm mb-4 mt-2 flex items-center justify-center flex-col opacity-80 relative overflow-hidden">
                    <div className="absolute top-0 w-full h-4 border-b border-white/10 flex items-center px-2 gap-1 bg-black/80"><div className="w-1 h-1 rounded-full bg-white/20"/><div className="w-1 h-1 rounded-full bg-white/20"/><div className="w-1 h-1 rounded-full bg-white/20"/></div>
                    <span className="font-display font-bold text-lg mt-4 text-white/50">{project.name}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="hidden md:block pointer-events-none fixed top-0 left-0 w-full h-full z-50 overflow-hidden" style={{ display: hoveredIndex !== null ? 'block' : 'none' }}>
         <motion.div animate={{ x: mousePosition.x + 20, y: mousePosition.y + 20, opacity: hoveredIndex !== null ? 1 : 0, scale: hoveredIndex !== null ? 1 : 0.8 }} transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }} className="absolute w-64 aspect-[4/3] bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col items-center justify-center overflow-hidden rounded-sm">
            {hoveredIndex !== null && (
               <div className="flex flex-col items-center w-full h-full relative">
                  <div className="absolute top-0 w-full h-6 border-b border-white/10 flex items-center px-3 gap-1.5 bg-black/80"><div className="w-1.5 h-1.5 rounded-full bg-white/20"/><div className="w-1.5 h-1.5 rounded-full bg-white/20"/><div className="w-1.5 h-1.5 rounded-full bg-white/20"/></div>
                  <div className="flex-1 w-full flex items-center justify-center pt-6 opacity-40"><span className="font-display text-xl font-bold text-center px-4">{moreProjects[hoveredIndex].name}</span></div>
               </div>
            )}
         </motion.div>
      </div>
    </section>
  );
}
