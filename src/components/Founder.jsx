import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { MdWork } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";

const Founder = () => {
  // Same display + body typefaces used across the site
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const executiveRoles = [
    "President, Development Bank of Ethiopia",
    "Chief Executive Officer, Nib International Bank",
    "Vice President, Commercial Bank of Ethiopia",
  ];

  const achievements = [
    "Development and implementation of a Service Excellence Model at the Commercial Bank of Ethiopia.",
    "Leadership in large-scale institutional transformation initiatives.",
    "Strategic turnaround support during critical transition periods in private banking.",
    "Completion of institutional diagnostics and strategy formulation at national development finance level.",
    "Rapid development of over 200 governance, policy, and procedural frameworks to strengthen institutional systems.",
  ];

  return (
    <section
      id="founder"
      className="relative w-full px-6 md:px-12 py-20 md:py-28 overflow-hidden bg-[#0A0E17]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Single restrained glow — depth without the double pulsing blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C9A227]/[0.06] rounded-full blur-[120px] hidden md:block pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#C9A227]/[0.04] rounded-full blur-[120px] hidden md:block pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-20 bg-[#C9A227]" />
        </div>
        <h1
          className="text-3xl md:text-5xl text-[#F3F4F8] text-center mb-14 md:mb-16"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
        >
          Our <span className="text-[#E8C97A]">Founder</span>
        </h1>

        {/* Founder Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Left — portrait */}
          <div className="w-full md:w-1/3 relative overflow-hidden">
            <img
              src="/images/founder.jpg"
              alt="Dr. Emebet Melese Zeleke"
              className="w-full h-72 md:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0E17]/60 via-transparent to-transparent" />
          </div>

          {/* Right — bio */}
          <div className="w-full md:w-2/3 bg-[#10151F] p-8 md:p-12 flex flex-col justify-center gap-4 md:gap-6 text-center md:text-left border-t md:border-t-0 md:border-l border-white/[0.06]">
            <h2
              className="text-2xl md:text-3xl text-[#F3F4F8]"
              style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
            >
              Dr. Emebet Melese Zeleke (PhD)
            </h2>
            <p className="text-[#C3C9D6] text-base md:text-lg leading-relaxed">
              A distinguished Ethiopian banking executive with more than 23
              years of progressive leadership experience across public
              commercial banking, private commercial banking, and national
              development finance institutions.
            </p>
          </div>
        </motion.div>

        {/* Executive Roles */}
        <div className="mt-16 md:mt-20">
          <h2
            className="text-2xl md:text-3xl text-[#F3F4F8] text-center mb-10"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Executive Roles
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-5">
            {executiveRoles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-center gap-4 p-5 md:p-6 bg-[#10151F] border border-white/[0.06] rounded-xl hover:border-[#C9A227]/40 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-lg flex items-center justify-center">
                  <MdWork className="text-[#C9A227] text-xl md:text-2xl" />
                </div>
                <div className="flex-1">
                  <span className="text-[#F3F4F8] font-medium text-sm md:text-base leading-snug">
                    {role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Career Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 md:mt-12 max-w-3xl mx-auto text-center md:text-left p-7 md:p-9 rounded-xl bg-[#10151F] border border-[#C9A227]/25"
          >
            <p className="text-[#E8C97A] text-base md:text-lg leading-relaxed font-medium">
              Throughout her career, Dr. Emebet has been closely associated with
              institutional reform, developmental finance, and initiatives aimed
              at promoting inclusive economic growth. She is widely recognized
              for her strategic vision, transformational leadership, and
              longstanding contribution to strengthening Ethiopia’s financial
              sector.
            </p>
          </motion.div>
        </div>

        {/* Major Achievements */}
        <div className="mt-16 md:mt-20">
          <h2
            className="text-2xl md:text-3xl text-[#F3F4F8] text-center mb-10"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Major Achievements
          </h2>
          <div className="relative flex flex-col gap-6 max-w-xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#C9A227]/60 via-[#C9A227]/25 to-transparent hidden md:block" />

            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-4 md:gap-6"
              >
                <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#E8C97A] to-[#C9A227] flex items-center justify-center z-10 mx-auto md:mx-0">
                  <GiLaurelsTrophy className="text-[#0A0E17] text-xl md:text-2xl" />
                </div>
                <div className="flex-1 bg-[#10151F] border border-white/[0.06] p-5 md:p-6 rounded-xl">
                  <span className="text-[#C3C9D6] text-sm md:text-base leading-relaxed">
                    {achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
