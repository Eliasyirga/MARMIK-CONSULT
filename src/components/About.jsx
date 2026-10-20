import React, { useEffect } from "react";
import { motion } from "framer-motion"; // npm install framer-motion
import aboutImage from "/images/photo3.jpg"; // Make sure this path is correct

const About = () => {
  // Load the same display + body typefaces used across the site
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
      id="about"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#0A0E17] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Single restrained glow, static — depth without the busy pulsing blobs */}
      <div className="absolute w-[32rem] h-[32rem] bg-[#C9A227]/[0.07] blur-[120px] rounded-full top-1/2 -translate-y-1/2 right-0 pointer-events-none" />

      {/* Faint hairline grid for texture, quiet enough not to compete with content */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#F3F4F8 1px, transparent 1px), linear-gradient(90deg, #F3F4F8 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
            <span className="h-px w-14 bg-[#C9A227]" />
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#F3F4F8] mb-8 leading-[1.1]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Who We <span className="text-[#E8C97A]">Are</span>
          </h2>

          <p className="text-base md:text-lg text-[#C3C9D6] mb-6 leading-relaxed max-w-3xl">
            MC PLC is a strategy and organizational transformation firm founded
            to strengthen institutions and drive sustainable performance.
            Established and led by Dr. Emebet Melese Zeleke (PhD), the firm is
            built on deep executive experience, institutional reform expertise,
            and a strong commitment to long-term organizational sustainability.
          </p>

          <p className="text-base md:text-lg text-[#C3C9D6] leading-relaxed max-w-3xl">
            We partner with institutions to diagnose systemic challenges, design
            strategic solutions, and implement transformative initiatives that
            deliver measurable and lasting results.
          </p>
        </motion.div>

        {/* Right: Framed Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-lg">
            {/* Offset gold frame — reads as an intentional design detail, not a filter */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#C9A227]/40 rounded-2xl hidden sm:block" />
            <img
              src={aboutImage}
              alt="About Illustration"
              className="relative w-full h-96 md:h-[30rem] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.06]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
