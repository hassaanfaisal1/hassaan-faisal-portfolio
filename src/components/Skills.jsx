"use client";
export default function Skills() {
  const row1 = ["WORDPRESS", "SHOPIFY", "WOOCOMMERCE", "WIX", "SQUARESPACE"];
  const row2 = ["PHP", "JAVASCRIPT", "HTML", "CSS", "CUSTOM PLUGINS"];
  const row3 = ["API INTEGRATION", "SEO", "PERFORMANCE", "FIGMA", "SECURITY"];

  const renderMarquee = (items, reverse = false, className = "") => (
    <div className={`flex whitespace-nowrap overflow-hidden ${className}`}>
      <div className={`flex gap-12 items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items].map((skill, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter text-outline hover:text-white transition-colors duration-300 cursor-default">
              {skill}
            </span>
            <span className="text-xl md:text-3xl text-white/20">•</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-32 overflow-hidden bg-black relative">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="relative z-10 space-y-8 md:space-y-12">
        {renderMarquee(row1)}
        {renderMarquee(row2, true, "ml-[-10vw]")}
        {renderMarquee(row3)}
      </div>
    </section>
  );
}
