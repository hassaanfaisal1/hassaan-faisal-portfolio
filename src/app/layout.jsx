import "./globals.css";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import GlobalBackground from "@/components/GlobalBackground";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-inter" }); // Map to inter variable to avoid rewriting tailwind config if set
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-syne" }); // Map to syne variable for same reason

export const metadata = {
  title: "Hassaan Faisal | Web Developer",
  description: "Premium Portfolio of Hassaan Faisal, a Web Developer specializing in CMS and Frontend.",
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-[#f8f9fa]">
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-sans bg-[#f8f9fa] text-[#1a1a1a] antialiased overflow-x-hidden`}>
        <CustomCursor />
        <ScrollProgress />
        <GlobalBackground />
        <Navbar />
        <main className="relative z-10 w-full overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
