import React from "react";
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
  return (
    <footer className="relative overflow-hidden bg-black text-[#E6C76A] font-serif pt-20 pb-10 px-6 md:px-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#111] to-black" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#E6C76A]/10 blur-[140px] rounded-full animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#E6C76A]/10 blur-[140px] rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            MARMIK CONSULT LTD
          </h2>

          <div className="w-16 h-[2px] bg-gradient-to-r from-[#E6C76A] to-yellow-400" />

          <p className="text-sm md:text-base text-[#E6C76A]/70">
            Strategy • Governance • Transformation
          </p>

          <div className="flex flex-col text-sm text-[#E6C76A]/70 mt-3 gap-3">
            <div className="flex items-center gap-3 hover:text-[#E6C76A] transition">
              <FiMail /> info@marmikconsult.com
            </div>
            <div className="flex items-center gap-3 hover:text-[#E6C76A] transition">
              <FiPhone /> +251 911 690 032
            </div>
            <div className="flex items-center gap-3 hover:text-[#E6C76A] transition">
              <FiMapPin /> Addis Ababa, Ethiopia
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
          <h3 className="font-semibold text-xl">Company</h3>

          <a
            href="#about"
            className="hover:text-yellow-400 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-yellow-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>

          <h3 className="font-semibold text-xl mt-6">Resources</h3>

          <a
            href="#vision"
            className="hover:text-yellow-400 transition duration-300"
          >
            Vision & Mission
          </a>
          <a
            href="#values"
            className="hover:text-yellow-400 transition duration-300"
          >
            Core Values
          </a>
          <a
            href="#founder"
            className="hover:text-yellow-400 transition duration-300"
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
          <h3 className="font-semibold text-xl">Connect With Us</h3>

          <p className="text-sm text-[#E6C76A]/70">
            Stay updated with insights and transformation stories.
          </p>

          <div className="flex gap-4 mt-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#E6C76A]/30 
                         hover:border-[#E6C76A] 
                         hover:shadow-[0_0_20px_rgba(230,199,106,0.6)]
                         transition-all duration-300"
            >
              <FiFacebook size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#E6C76A]/30 
                         hover:border-[#E6C76A] 
                         hover:shadow-[0_0_20px_rgba(230,199,106,0.6)]
                         transition-all duration-300"
            >
              <FiLinkedin size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#E6C76A]/30 
                         hover:border-[#E6C76A] 
                         hover:shadow-[0_0_20px_rgba(230,199,106,0.6)]
                         transition-all duration-300"
            >
              <FiTwitter size={20} />
            </motion.a>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 rounded-full
                       bg-gradient-to-r from-[#E6C76A] via-yellow-400 to-[#E6C76A]
                       text-black font-semibold tracking-wide
                       shadow-[0_10px_25px_rgba(230,199,106,0.4)]
                       hover:scale-105 transition-all duration-300"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative mt-16 border-t border-[#E6C76A]/20 pt-6 text-center text-sm text-[#E6C76A]/60">
        © {new Date().getFullYear()} MARMIK CONSULT LTD — Unlocking Potential
        Through Agile Transformation
      </div>
    </footer>
  );
};

export default Footer;
