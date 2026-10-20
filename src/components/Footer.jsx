import React, { useEffect } from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { motion } from "framer-motion";

const Footer = () => {
  // Same display + body typefaces used across the site
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <footer
      className="relative overflow-hidden bg-[#0A0E17] text-[#C3C9D6] pt-20 pb-10 px-6 md:px-16"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background — single restrained glow, static */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0E17] via-[#0D1220] to-[#0A0E17]" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C9A227]/[0.06] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#C9A227]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2
            className="text-2xl md:text-3xl tracking-wide text-[#F3F4F8]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
          >
            MARMIK CONSULT PLC
          </h2>

          <div className="w-14 h-px bg-[#C9A227]" />

          <p className="text-sm md:text-base text-[#9AA3B8]">
            Strategy • Governance • Transformation
          </p>

          <div className="flex flex-col text-sm text-[#9AA3B8] mt-3 gap-3">
            <div className="flex items-center gap-3 hover:text-[#E8C97A] transition-colors duration-200">
              <FiMail className="text-[#C9A227]" /> info@marmikconsultplc.com
            </div>
            <div className="flex items-center gap-3 hover:text-[#E8C97A] transition-colors duration-200">
              <FiPhone className="text-[#C9A227]" /> +251 911 690 032
            </div>
            <div className="flex items-center gap-3 hover:text-[#E8C97A] transition-colors duration-200">
              <FiMapPin className="text-[#C9A227]" /> Addis Ababa, Ethiopia
            </div>
          </div>
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <h3
            className="text-lg text-[#F3F4F8]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Company
          </h3>

          <a
            href="#about"
            className="text-[#9AA3B8] hover:text-[#E8C97A] transition-colors duration-200 w-fit"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-[#9AA3B8] hover:text-[#E8C97A] transition-colors duration-200 w-fit"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-[#9AA3B8] hover:text-[#E8C97A] transition-colors duration-200 w-fit"
          >
            Contact
          </a>

          <h3
            className="text-lg text-[#F3F4F8] mt-6"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Resources
          </h3>

          <a
            href="#vision"
            className="text-[#9AA3B8] hover:text-[#E8C97A] transition-colors duration-200 w-fit"
          >
            Vision & Mission
          </a>
          <a
            href="#values"
            className="text-[#9AA3B8] hover:text-[#E8C97A] transition-colors duration-200 w-fit"
          >
            Core Values
          </a>
          <a
            href="#founder"
            className="text-[#9AA3B8] hover:text-[#E8C97A] transition-colors duration-200 w-fit"
          >
            Founder
          </a>
        </motion.div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h3
            className="text-lg text-[#F3F4F8]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Connect With Us
          </h3>

          <p className="text-sm text-[#9AA3B8]">
            Stay updated with insights and transformation stories.
          </p>

          <div className="flex gap-3 mt-4">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/[0.1]
                         text-[#9AA3B8] hover:text-[#C9A227] hover:border-[#C9A227]/50
                         transition-colors duration-300"
            >
              <FiFacebook size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/[0.1]
                         text-[#9AA3B8] hover:text-[#C9A227] hover:border-[#C9A227]/50
                         transition-colors duration-300"
            >
              <FiLinkedin size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/[0.1]
                         text-[#9AA3B8] hover:text-[#C9A227] hover:border-[#C9A227]/50
                         transition-colors duration-300"
            >
              <FiTwitter size={18} />
            </motion.a>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 rounded-md text-center
                       bg-gradient-to-r from-[#E8C97A] to-[#C9A227]
                       text-[#0A0E17] font-semibold tracking-wide text-sm
                       hover:from-[#F0D68F] hover:to-[#D9AF34]
                       transition-all duration-300"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-16 border-t border-white/[0.08] pt-6 text-center text-sm text-[#5A6478]">
        © {new Date().getFullYear()} MARMIK CONSULT PLC — Unlocking Potential
        Through Agile Transformation
      </div>
    </footer>
  );
};

export default Footer;
