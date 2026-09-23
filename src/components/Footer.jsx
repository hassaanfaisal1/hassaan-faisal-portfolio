export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 md:py-12 border-t border-black/5 bg-[#f8f9fa] relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-gray-400 text-center md:text-left">
          &copy; {currentYear} Hassaan Faisal.<br className="md:hidden" /> All rights reserved.
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          <a href="https://www.linkedin.com/in/hassaan-faisal-80ba192a7/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors block">LinkedIn</a>
          <a href="mailto:hassaanfaisal82@gmail.com" className="hover:text-indigo-600 transition-colors block">Email</a>
          <a href="tel:+923320827091" className="hover:text-indigo-600 transition-colors block">+92 332 0827091</a>
        </div>
      </div>
    </footer>
  );
}
