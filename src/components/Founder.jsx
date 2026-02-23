import React from "react";
import { motion } from "framer-motion";

import { MdWork } from "react-icons/md";
import { GiLaurelsTrophy } from "react-icons/gi";

const Founder = () => {
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
      className="relative w-full px-6 md:px-12 py-16 md:py-24 font-serif overflow-hidden bg-black"
    >
      {/* Gold Glow Background Elements */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl animate-pulse-slow hidden md:block"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-2xl animate-pulse-slow hidden md:block"></div>

      <h1 className="text-3xl md:text-5xl font-bold text-[#E6C76A] text-center mb-10">
        Our Founder
      </h1>

      {/* Founder Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-[0_10px_30px_rgba(230,199,106,0.5)]"
      >
        {/* Left Golden Panel */}
        <div className="w-full md:w-1/4 bg-[#E6C76A] flex items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#E6C76A]/20 blur-xl rounded-l-xl"></div>

          <img
            src="/images/founder.jpg"
            alt="Dr. Emebet Melese Zeleke"
            className="relative z-10 w-full h-full object-cover rounded-l-xl shadow-2xl"
          />
        </div>

        {/* Right Black Panel */}
        <div className="w-full md:w-3/4 bg-black p-6 md:p-12 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#E6C76A]">
            Dr. Emebet Melese Zeleke (PhD)
          </h2>
          <p className="text-[#E6C76A] text-base md:text-lg leading-relaxed">
            A distinguished Ethiopian banking executive with more than 23 years
            of progressive leadership experience across public commercial
            banking, private commercial banking, and national development
            finance institutions.
          </p>
        </div>
      </motion.div>

      {/* Executive Roles */}
      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-[#E6C76A] text-center mb-8">
          Executive Roles
        </h2>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
          {executiveRoles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex items-center gap-4 p-4 md:p-6 bg-black rounded-xl shadow-[0_6px_20px_rgba(230,199,106,0.4)]"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#E6C76A]/20 rounded flex items-center justify-center">
                <MdWork className="text-[#E6C76A] text-xl md:text-2xl" />
              </div>
              <div className="flex-1">
                <span className="text-[#E6C76A] font-semibold text-sm md:text-lg">
                  {role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Career Summary Paragraph - Animated & Stylish */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:mt-12 max-w-3xl mx-auto relative text-center md:text-left p-6 md:p-8 rounded-xl bg-black/50 border border-[#E6C76A]/40 shadow-[0_10px_30px_rgba(230,199,106,0.5)] overflow-hidden"
        >
          {/* Subtle animated golden glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#E6C76A]/20 to-transparent rounded-xl animate-pulse-slow pointer-events-none"></div>

          <p className="text-[#E6C76A] text-base md:text-lg leading-relaxed font-semibold tracking-wide relative z-10">
            Throughout her career, Dr. Emebet has been closely associated with
            institutional reform, developmental finance, and initiatives aimed
            at promoting inclusive economic growth. She is widely recognized for
            her strategic vision, transformational leadership, and longstanding
            contribution to strengthening Ethiopia’s financial sector.
          </p>
        </motion.div>
      </div>
      {/* Major Achievements */}
      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-4xl font-bold text-[#E6C76A] text-center mb-8">
          Major Achievements
        </h2>
        <div className="relative flex flex-col gap-8 max-w-xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#E6C76A]/50 rounded-full hidden md:block"></div>

          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex flex-col md:flex-row gap-4 md:gap-6"
            >
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E6C76A] flex items-center justify-center shadow-lg z-10 mx-auto md:mx-0">
                <GiLaurelsTrophy className="text-black text-xl md:text-2xl" />
              </div>
              <div className="flex-1 bg-black p-4 md:p-6 rounded-xl shadow-[0_8px_20px_rgba(230,199,106,0.5)] relative overflow-hidden">
                <span className="text-[#E6C76A] text-sm md:text-lg font-semibold">
                  {achievement}
                </span>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#E6C76A]/10 to-transparent rounded-xl animate-pulse-slow"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;
