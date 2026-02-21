import React from "react";
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
  return (
    <section className="relative py-20 px-4 md:px-10 bg-black font-serif overflow-hidden">
      {/* Gold Glow Behind Section */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl tracking-wide leading-tight text-[#D4AF37]"
          >
            Our{" "}
            <span className="border-b-2 border-[#D4AF37] pb-2">Mission</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 28 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)] mt-4 mx-auto rounded-full"
          />
        </div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative border border-[#D4AF37]/30 rounded-2xl p-8 md:p-12 mb-12 bg-black shadow-[0_0_60px_rgba(212,175,55,0.08)] transition duration-500 hover:shadow-[0_0_80px_rgba(212,175,55,0.2)]"
        >
          <div className="absolute inset-2 border border-[#D4AF37]/20 rounded-xl pointer-events-none" />
          <p className="text-lg md:text-xl leading-relaxed font-light tracking-wide text-[#C5A253]">
            To unlock the{" "}
            <span className="font-semibold text-[#D4AF37]">full potential</span>{" "}
            of organizations by delivering{" "}
            <span className="font-semibold text-[#D4AF37]">
              rigorous diagnostics
            </span>
            ,{" "}
            <span className="font-semibold text-[#D4AF37]">
              strategic clarity
            </span>
            , and{" "}
            <span className="font-semibold text-[#D4AF37]">
              practical transformation solutions
            </span>{" "}
            that strengthen governance, enhance performance, and ensure
            long-term sustainability.
          </p>
        </motion.div>

        {/* Strategic Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {missionPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-6 md:p-8 bg-black border border-[#D4AF37]/30 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition duration-500" />
              <h3 className="text-xl md:text-2xl font-serif mb-3 relative z-10 text-[#D4AF37] tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-sm relative z-10 text-[#C5A253]">
                {pillar.desc}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
