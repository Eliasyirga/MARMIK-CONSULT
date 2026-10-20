import React, { useEffect } from "react";
import { motion } from "framer-motion";

const missionPillars = [
  {
    title: "Rigorous Diagnostics",
    desc: "Deep-dive assessments to identify systemic gaps and opportunities.",
  },
  {
    title: "Strategic Clarity",
    desc: "Clear roadmaps and actionable strategies for transformation.",
  },
  {
    title: "Practical Solutions",
    desc: "Implementable frameworks that deliver measurable results.",
  },
];

const MissionSection = () => {
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
      className="relative py-20 md:py-28 px-4 md:px-10 bg-[#0A0E17] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Single restrained glow, static */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A227]/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl tracking-wide leading-tight text-[#F3F4F8]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Our <span className="text-[#E8C97A]">Mission</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-[#C9A227] mt-5 mx-auto"
          />
        </div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative border border-white/[0.08] rounded-2xl p-8 md:p-12 mb-12 bg-[#10151F] shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-colors duration-500 hover:border-[#C9A227]/30"
        >
          <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide text-[#C3C9D6]">
            To unlock the{" "}
            <span className="font-semibold text-[#E8C97A]">full potential</span>{" "}
            of organizations by delivering{" "}
            <span className="font-semibold text-[#E8C97A]">
              rigorous diagnostics
            </span>
            ,{" "}
            <span className="font-semibold text-[#E8C97A]">
              strategic clarity
            </span>
            , and{" "}
            <span className="font-semibold text-[#E8C97A]">
              practical transformation solutions
            </span>{" "}
            that strengthen governance, enhance performance, and ensure
            long-term sustainability.
          </p>
        </motion.div>

        {/* Strategic Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {missionPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="group relative p-6 md:p-8 bg-[#10151F] border border-white/[0.08] rounded-2xl transition-colors duration-300 hover:border-[#C9A227]/40"
            >
              <h3
                className="text-xl md:text-2xl mb-3 relative z-10 text-[#F3F4F8] tracking-wide"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm relative z-10 text-[#9AA3B8] leading-relaxed">
                {pillar.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A227] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
