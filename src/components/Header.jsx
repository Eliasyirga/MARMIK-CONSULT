import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { MdBuild, MdContactMail } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", icon: <AiFillHome />, href: "#home" },
    { name: "About", icon: <BsPersonFill />, href: "#about" },
    { name: "Services", icon: <MdBuild />, href: "#services" },
    { name: "Contact", icon: <MdContactMail />, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 font-serif transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="MarmIK Consult Logo" className="h-14 md:h-16" />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F5D77A] to-[#C5A253] bg-clip-text text-transparent">
            MARMIK CONSULT
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-[#E6C76A] font-semibold hover:text-[#FFD700] transition"
            >
              <span className="text-xl">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-[#E6C76A] text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-black/90 backdrop-blur-md rounded-b-3xl shadow-lg w-full max-w-7xl mx-auto overflow-hidden animate-dropdown">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 text-[#E6C76A] text-lg font-semibold px-6 py-4 hover:bg-[#FFD700]/10 hover:text-[#FFD700] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon} {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Dropdown Animation */}
      <style jsx>{`
        @keyframes dropdown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-dropdown {
          animation: dropdown 0.25s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;
