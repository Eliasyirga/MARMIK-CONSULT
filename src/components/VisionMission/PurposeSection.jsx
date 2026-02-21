import React from "react";
import { motion } from "framer-motion";

const PurposeSection = () => {
  return (
    <div className="grid md:grid-cols-2 min-h-[420px] relative font-serif bg-black overflow-hidden">
      {/* Left Side */}
      <div className="bg-black p-8 md:p-12 border-r border-[#D4AF37]/30 flex flex-col justify-center relative z-10">
        {/* Glow behind content */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.h3
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-bold mb-6 relative text-[#D4AF37]"
        >
          Our Purpose
          <span className="absolute -left-5 top-1 h-8 w-[3px] bg-[#D4AF37]" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[3px] bg-gradient-to-r from-[#D4AF37] to-yellow-400 mt-3 rounded-full"
          />
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base md:text-lg leading-relaxed mb-4 text-[#C5A253]"
        >
          We unlock our clients’ potential through{" "}
          <span className="font-semibold">agile transformation</span>,
          identifying root organizational constraints and delivering{" "}
          <span className="font-semibold">practical, measurable solutions</span>
          .
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-base md:text-lg leading-relaxed text-[#C5A253]/80"
        >
          Transformation begins with deep systems understanding, strengthened
          governance structures, and empowered leadership.
        </motion.p>
      </div>

      {/* Right Side */}
      <div className="relative overflow-hidden bg-black min-h-[420px] group">
        <motion.img
          src="images/purpose.webp"
          alt="Purpose"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#D4AF37]/20 via-transparent to-transparent" />
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
};

export default PurposeSection;
