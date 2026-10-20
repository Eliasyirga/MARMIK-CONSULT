import React, { useEffect } from "react";
import { motion } from "framer-motion";

const PurposeSection = () => {
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
    <div
      className="grid md:grid-cols-2 min-h-[420px] relative bg-[#0A0E17] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Left Side */}
      <div className="bg-[#0A0E17] p-8 md:p-12 lg:p-16 border-r border-white/[0.08] flex flex-col justify-center relative z-10">
        {/* Single restrained glow, static */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#C9A227]/[0.06] blur-[120px] rounded-full pointer-events-none" />

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 mb-7"
        >
          <span className="absolute -left-5 top-1 h-7 w-px bg-[#C9A227]" />
          <span
            className="block text-2xl md:text-3xl text-[#F3F4F8]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Our <span className="text-[#E8C97A]">Purpose</span>
          </span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-[#C9A227] mt-4"
          />
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-base md:text-lg leading-relaxed mb-4 text-[#C3C9D6]"
        >
          We unlock our clients’ potential through{" "}
          <span className="text-[#E8C97A] font-semibold">
            agile transformation
          </span>
          , identifying root organizational constraints and delivering{" "}
          <span className="text-[#E8C97A] font-semibold">
            practical, measurable solutions
          </span>
          .
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-base md:text-lg leading-relaxed text-[#9AA3B8]"
        >
          Transformation begins with deep systems understanding, strengthened
          governance structures, and empowered leadership.
        </motion.p>
      </div>

      {/* Right Side */}
      <div className="relative overflow-hidden bg-[#0A0E17] min-h-[420px] group">
        <motion.img
          src="images/photo5.jpg"
          alt="Purpose"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Light scrim — keeps the photo visible, just enough for edge cohesion */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E17]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#0A0E17]/15" />
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#C9A227]/[0.06] blur-[120px] rounded-full pointer-events-none" />
      </div>
    </div>
  );
};

export default PurposeSection;
