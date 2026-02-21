import React from "react";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <div
      id="vision"
      className="relative py-32 px-6 md:px-16 text-center overflow-hidden bg-black font-serif"
    >
      {/* Glow behind heading */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#E6C76A]/10 blur-[160px] rounded-full animate-pulse-slow"></div>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative text-4xl md:text-6xl font-bold mb-8 tracking-wide text-[#D4AF37] z-10"
      >
        Our Vision
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[3px] bg-gradient-to-r from-[#D4AF37] to-yellow-400 mt-4 mx-auto rounded-full"
        />
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed text-[#C5A253]"
      >
        To become a trusted leader in{" "}
        <span className="font-semibold">organizational transformation</span> and
        <span className="font-semibold"> institutional reform</span> — driving
        sustainable growth, strong governance, and inclusive economic
        development across Ethiopia and beyond.
      </motion.p>

      {/* Decorative circles */}
      <div className="absolute top-0 left-1/4 w-24 h-24 bg-[#D4AF37]/5 rounded-full blur-[60px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
      `}</style>
    </div>
  );
};

export default VisionSection;
