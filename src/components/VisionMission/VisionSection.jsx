import React, { useEffect } from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
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
      id="vision"
      className="relative py-28 md:py-36 px-6 md:px-16 text-center overflow-hidden bg-[#0A0E17]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Single restrained glow, static — no pulsing */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#C9A227]/[0.06] blur-[160px] rounded-full" />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-10 bg-[#C9A227]" />
        </div>

        <h2
          className="text-4xl md:text-6xl mb-8 tracking-wide text-[#F3F4F8]"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
        >
          Our <span className="text-[#E8C97A]">Vision</span>
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-px bg-[#C9A227] mx-auto -mt-4 mb-8"
        />
      </motion.div>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-[#C3C9D6]"
      >
        To become a trusted leader in{" "}
        <span className="text-[#E8C97A] font-semibold">
          organizational transformation
        </span>{" "}
        and
        <span className="text-[#E8C97A] font-semibold">
          {" "}
          institutional reform
        </span>{" "}
        — driving sustainable growth, strong governance, and inclusive economic
        development across Ethiopia and beyond.
      </motion.p>

      {/* Decorative accents — quieter than before */}
      <div className="absolute top-0 left-1/4 w-24 h-24 bg-[#C9A227]/[0.04] rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-[#C9A227]/[0.04] rounded-full blur-[80px] pointer-events-none" />
    </div>
  );
};

export default VisionSection;
