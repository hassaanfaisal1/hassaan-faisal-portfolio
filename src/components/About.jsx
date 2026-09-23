"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-48 relative bg-transparent z-10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-5 relative group perspective-[1000px]">
             <motion.div whileHover={{ rotateY: 5, rotateX: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden relative shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-black/5 p-8 flex flex-col justify-between transform-style-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent pointer-events-none" />
                <div className="flex justify-between items-start">
                   <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100">
                      <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
                   </div>
                   <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">EST. 2021</span>
                </div>
                <div>
                   <h3 className="font-display text-4xl font-bold text-[#111] mb-2">Based in<br/>Pakistan.</h3>
                   <p className="font-mono text-xs text-gray-500 tracking-widest uppercase">Global Reach</p>
                </div>
             </motion.div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
              <span className="w-12 h-px bg-indigo-200" />
              <span className="font-mono text-sm tracking-widest uppercase text-indigo-600 font-semibold">About Me</span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111] leading-[1.1] tracking-tighter">
              I blend technical precision with creative vision to build digital products that perform.
            </h2>
            
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
              With extensive experience spanning WordPress, Shopify, and modern JavaScript frameworks, I approach every project not just as a coder, but as a digital architect.
            </motion.p>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 gap-8 mt-4 pt-8 border-t border-black/5">
              <div>
                <h4 className="font-display text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">3+</h4>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">Years Experience</p>
              </div>
              <div>
                <h4 className="font-display text-4xl md:text-5xl font-extrabold text-indigo-600 mb-2">40+</h4>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest font-semibold">Projects Delivered</p>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
