"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Web Developer",
    company: "Systechlogics",
    date: "Jun 2024 – Present",
    location: "Karachi, Pakistan",
    description: [
      "Delivered custom WordPress plugin development and API integrations across WooCommerce, Shopify, and custom PHP backends.",
      "Achieved 50+ successful client deployments with 99.2% uptime.",
      "Improved website performance across CMS platforms resulting in a 35% reduction in page load time.",
      "Built seamless third-party integrations across payment gateways and shipping providers."
    ],
    tags: ["WordPress", "Shopify", "PHP", "APIs", "Performance"]
  },
  {
    title: "Web Developer",
    company: "Skyfit International",
    date: "2023 – 2024",
    location: "Karachi, Pakistan",
    description: [
      "Converted PSD/Figma designs to WordPress themes, launching 8 custom sites with pixel-perfect responsive layouts.",
      "Optimized e-commerce platforms, achieving a 28% improvement in checkout completion rates.",
      "Hardened website security with zero breaches across active client sites.",
      "Drove a 19% increase in organic traffic by analyzing Google Analytics patterns and refining UX."
    ],
    tags: ["Frontend", "WooCommerce", "Security", "Analytics"]
  },
  {
    title: "Property Assistant",
    company: "Falaknas Group",
    date: "2021 – 2023",
    location: "Karachi, Pakistan",
    description: [
      "Developed strong client relationship management and analytical skills.",
      "Built foundational experience in process-oriented workflows, attention to detail, and communication."
    ],
    tags: ["Client Relations", "Analytics", "Workflows"]
  },
  {
    title: "Online Mobile Sales Executive",
    company: "Self-Employed",
    date: "2020 – 2021",
    location: "Karachi, Pakistan",
    description: [
      "Managed end-to-end online sales of mobile phones and accessories via social media and e-commerce.",
      "Built lasting customer relationships by providing personalized product recommendations.",
      "Handled inventory tracking, order fulfillment, and logistics coordination."
    ],
    tags: ["E-Commerce", "Sales", "Logistics"]
  }
];

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:grid md:grid-cols-12 md:gap-8 items-start group">
        
        {/* Timeline Marker (Desktop) */}
        <div className="hidden md:flex col-span-3 flex-col items-end pt-2 relative">
          <div className="font-mono text-sm tracking-widest text-indigo-500 font-bold">{exp.date}</div>
          <div className="text-gray-400 text-xs mt-1 uppercase tracking-widest">{exp.location}</div>
          {/* Node */}
          <div className="absolute -right-[21px] top-3 w-4 h-4 rounded-full bg-white border-4 border-indigo-100 group-hover:border-indigo-500 transition-colors duration-300 z-10" />
        </div>

        {/* Mobile Marker */}
        <div className="md:hidden absolute left-0 top-2 w-3 h-3 rounded-full bg-white border-2 border-indigo-500 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

        {/* Content Card */}
        <div className="md:col-span-9 bg-white border border-black/5 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full blur-3xl group-hover:bg-indigo-100/50 transition-colors pointer-events-none" />
          
          <div className="md:hidden mb-4">
            <div className="font-mono text-xs tracking-widest text-indigo-500 font-bold mb-1">{exp.date}</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-widest">{exp.location}</div>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#111] mb-1">{exp.title}</h3>
          <h4 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-6 font-semibold">{exp.company}</h4>
          
          <ul className="flex flex-col gap-3 mb-8">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 mt-2 shrink-0 group-hover:bg-indigo-500 transition-colors" />
                <span className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tags.map((tag, i) => (
              <span key={i} className="font-mono text-[10px] text-gray-500 bg-gray-50 border border-black/5 px-3 py-1.5 rounded-full uppercase tracking-widest font-semibold group-hover:bg-indigo-50 group-hover:text-indigo-700 group-hover:border-indigo-100 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-transparent z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 md:mb-24 flex flex-col md:items-center md:text-center">
          <div className="flex items-center gap-4 mb-6 md:justify-center">
            <span className="w-12 h-px bg-indigo-200" />
            <span className="font-mono text-sm tracking-widest uppercase text-indigo-600 font-semibold">Professional Journey</span>
            <span className="w-12 h-px bg-indigo-200 hidden md:block" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-[#111]">
            Experience.
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto relative" ref={containerRef}>
          {/* Center Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-black/5 -ml-px">
            <motion.div style={{ scaleY, transformOrigin: "top" }} className="w-full h-full bg-gradient-to-b from-indigo-500 to-purple-500" />
          </div>
          
          {/* Left Timeline Line (Mobile) */}
          <div className="md:hidden absolute left-1.5 top-0 bottom-0 w-px bg-black/5">
            <motion.div style={{ scaleY, transformOrigin: "top" }} className="w-full h-full bg-gradient-to-b from-indigo-500 to-purple-500" />
          </div>

          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
