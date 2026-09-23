"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Systechlogics",
    role: "Web Developer",
    date: "Jun 2024 - Present",
    description: "Develop and manage websites across WordPress, WooCommerce, Shopify, Wix and Squarespace. Work on custom WordPress functionality, plugins, WooCommerce features, APIs, payment integrations, referral and affiliate workflows, performance improvements and website troubleshooting.",
  },
  {
    company: "Skyfit International",
    role: "Web Developer",
    date: "2023 - 2024",
    description: "Developed responsive WordPress websites, customized themes and plugins, converted designs into responsive websites and worked on e-commerce, payment integrations, website security, speed and SEO improvements.",
  },
  {
    company: "Falaknas Group",
    role: "Property Assistant",
    date: "2021 - 2023",
    description: "Worked with clients, handled communication, product information and relationship management.",
  },
  {
    company: "Online Mobile Sales",
    role: "Sales Representative",
    date: "2020 - 2021",
    description: "Worked in online mobile sales, handling customer inquiries, product information, pricing, order coordination and communication with customers.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 bg-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 md:flex items-end justify-between border-b border-white/10 pb-12">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white">
            Experience
          </h2>
          <p className="text-gray-400 max-w-sm mt-6 md:mt-0 font-light font-display text-lg">
            My professional journey in web development and related roles over the years.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-8 md:pl-16 ml-2 md:ml-0 space-y-24">
          <div className="absolute top-0 bottom-0 left-[-1px] w-[2px] bg-gradient-to-b from-white via-white/10 to-transparent scale-y-0 origin-top" />
          
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group"
            >
              {/* Dot indicator */}
              <div className="absolute w-4 h-4 bg-[#0a0a0a] border-2 border-white/30 rounded-full -left-[2.5rem] md:-left-[4.5rem] top-2 transition-all duration-500 group-hover:scale-125 group-hover:bg-white group-hover:border-white" />
              
              <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
                <div className="md:col-span-4 flex flex-col mt-1">
                  <span className="font-display text-5xl md:text-6xl font-bold text-white/20 group-hover:text-white transition-colors duration-500 tracking-tighter mb-2">
                    {exp.date.split('-')[0].trim()}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500">{exp.date}</span>
                </div>
                
                <div className="md:col-span-8">
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-3 tracking-tight">{exp.company}</h3>
                  <h4 className="text-xl text-gray-300 mb-6 font-medium font-display">{exp.role}</h4>
                  <p className="text-gray-400 leading-relaxed font-light text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
