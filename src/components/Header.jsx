import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp"; // Update to "/images/logo.webp" if serving from public/
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdBuild, MdContactMail, MdCollections } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", icon: <AiFillHome />, href: "#home" },
    { name: "About", icon: <BsPersonFill />, href: "#about" },
    { name: "Services", icon: <MdBuild />, href: "#services" },
    { name: "Gallery", icon: <MdCollections />, href: "#gallery" },
  ];

  // Load the display face used for the wordmark, matching the hero
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Handle header transformation and scroll spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll Spy: Determine active section
      const scrollPosition = window.scrollY + 120;
      for (const link of links) {
        const sectionId = link.href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "py-3"
          : "py-5 bg-gradient-to-b from-[#0A0E17]/90 via-[#0A0E17]/50 to-transparent"
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0E17]/85 backdrop-blur-xl border border-white/[0.06] rounded-2xl md:rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] rounded-lg p-1"
          >
            <img
              src={logo}
              alt="MarmIK Consult logo"
              className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className="text-lg md:text-xl tracking-[0.08em] text-[#F3F4F8]"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
              >
                MARMIK CONSULT
              </span>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#C9A227]/70 font-semibold -mt-0.5 hidden sm:block">
                Agile Transformation
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative flex items-center gap-2 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200 group"
                >
                  <span
                    className={`text-sm ${
                      isActive ? "text-[#C9A227]" : "text-[#5A6478]"
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={
                      isActive
                        ? "text-[#F3F4F8]"
                        : "text-[#9AA3B8] group-hover:text-[#F3F4F8]"
                    }
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-[#C9A227] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              );
            })}

            {/* Primary CTA — matches the hero button */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-md bg-gradient-to-r from-[#E8C97A] to-[#C9A227] text-[#0A0E17] text-xs font-bold uppercase tracking-widest hover:from-[#F0D68F] hover:to-[#D9AF34] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8C97A] focus:ring-offset-2 focus:ring-offset-[#0A0E17]"
            >
              Consult now
            </a>
          </nav>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-xl text-[#C9A227] bg-[#0A0E17]/60 border border-white/[0.08] backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          >
            {menuOpen ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[#0A0E17]/95 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.55)] overflow-hidden z-50">
          <div className="flex flex-col p-5 gap-1.5">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between text-sm font-medium px-4 py-3.5 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-[#F3F4F8] bg-white/[0.04]"
                      : "text-[#9AA3B8] hover:bg-white/[0.03] hover:text-[#F3F4F8]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`text-lg ${
                        isActive ? "text-[#C9A227]" : "text-[#5A6478]"
                      }`}
                    >
                      {link.icon}
                    </span>
                    <span className="uppercase tracking-wider">
                      {link.name}
                    </span>
                  </div>
                  <span className="text-xs text-[#C9A227]/60">→</span>
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block text-center py-3.5 rounded-md bg-gradient-to-r from-[#E8C97A] to-[#C9A227] text-[#0A0E17] font-bold text-xs uppercase tracking-widest active:scale-[0.98] transition-transform"
              >
                Consult now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
