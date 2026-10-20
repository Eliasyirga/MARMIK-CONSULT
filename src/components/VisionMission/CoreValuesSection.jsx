import React, { useEffect } from "react";
import { motion } from "framer-motion";

const CoreValuesSection = ({ values }) => {
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
    <section
      id="values"
      className="relative py-20 md:py-28 px-4 md:px-10 bg-[#0A0E17] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Single restrained glow, static */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A227]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#C9A227]" />
          </div>
          <h2
            className="text-4xl md:text-5xl text-[#F3F4F8] tracking-wide"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Core <span className="text-[#E8C97A]">Values</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative p-7 md:p-9 bg-[#10151F] border border-white/[0.08] rounded-2xl transition-colors duration-300 hover:border-[#C9A227]/40 text-center flex flex-col items-center"
            >
              <span className="w-10 h-px bg-[#C9A227] mb-5 opacity-70" />
              <h3
                className="text-xl md:text-2xl mb-3 text-[#F3F4F8] tracking-wide"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
              >
                {value.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#9AA3B8]">
                {value.description}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[#C9A227] group-hover:w-1/3 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
