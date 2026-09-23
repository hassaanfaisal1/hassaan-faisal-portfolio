"use client";
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const btnRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 15, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // UI Demonstration: Simulate a network request delay
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 md:py-48 relative overflow-hidden bg-[#f8f9fa] z-10 border-t border-black/5">
      
      {/* Cinematic Conclusion Gradient */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-indigo-100 rounded-full blur-[150px] pointer-events-none mix-blend-multiply will-change-transform" 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="w-px h-24 bg-gradient-to-b from-transparent to-indigo-200 mb-12 origin-top" />
          
          <h2 className="font-display text-6xl md:text-8xl lg:text-[8rem] font-extrabold text-[#111] tracking-tighter leading-none mb-8">
            <span className="block overflow-hidden pb-4">
              <motion.span initial={{ y: "100%", rotate: 5 }} whileInView={{ y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="block">Let&apos;s Build</motion.span>
            </span>
            <span className="block overflow-hidden text-gray-300">
              <motion.span initial={{ y: "100%", rotate: -5 }} whileInView={{ y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="block">The Future.</motion.span>
            </span>
          </h2>
          
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl">
            Currently accepting new projects and opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 flex flex-col gap-12">
            <div className="group">
              <h3 className="font-mono text-sm tracking-widest text-indigo-500 font-semibold uppercase mb-4">Email</h3>
              <a href="mailto:hassaanfaisal82@gmail.com" className="font-display text-2xl md:text-3xl font-bold text-[#111] hover:text-indigo-600 transition-colors inline-block relative">
                hassaanfaisal82@gmail.com
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
            <div className="group">
              <h3 className="font-mono text-sm tracking-widest text-indigo-500 font-semibold uppercase mb-4">Phone</h3>
              <a href="tel:+923320827091" className="font-display text-2xl md:text-3xl font-bold text-[#111] hover:text-indigo-600 transition-colors inline-block relative">
                +92 332 0827091
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-indigo-600 transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
            <div>
              <h3 className="font-mono text-sm tracking-widest text-indigo-500 font-semibold uppercase mb-6">Socials</h3>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/hassaan-faisal-80ba192a7/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-gray-600 font-bold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all hover:scale-110">IN</a>
                <a href="mailto:hassaanfaisal82@gmail.com" className="w-14 h-14 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7 bg-white border border-black/5 rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] pointer-events-none" />
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-mono text-xs tracking-widest text-indigo-500 font-semibold uppercase">Your Name</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-[#111] font-medium text-lg focus:outline-none focus:border-indigo-600 transition-colors placeholder:text-gray-300" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-mono text-xs tracking-widest text-indigo-500 font-semibold uppercase">Your Email</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-[#111] font-medium text-lg focus:outline-none focus:border-indigo-600 transition-colors placeholder:text-gray-300" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-xs tracking-widest text-indigo-500 font-semibold uppercase">Your Message</label>
                <textarea id="message" name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full bg-transparent border-b border-black/10 pb-4 pt-2 text-[#111] font-medium text-lg focus:outline-none focus:border-indigo-600 transition-colors resize-none placeholder:text-gray-300" placeholder="Tell me about your project..."></textarea>
              </div>

              <motion.button 
                ref={btnRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ x: smoothX, y: smoothY }}
                type="submit" disabled={isSubmitting} 
                className="mt-8 bg-[#111] text-white px-12 py-5 rounded-full font-mono text-sm tracking-widest uppercase font-bold hover:bg-indigo-600 transition-colors self-start shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center min-w-[200px]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              
              {submitStatus === "success" && <p className="text-green-600 font-mono font-bold text-sm mt-4 tracking-wide">Message sent successfully! I&apos;ll be in touch soon.</p>}
              {submitStatus === "error" && <p className="text-red-500 font-mono font-bold text-sm mt-4 tracking-wide">Oops! There was a problem sending your message.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
