import React from "react";
import { motion } from "framer-motion"; // npm install framer-motion
import aboutImage from "../assets/about.webp"; // Make sure this path is correct

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 md:px-12 bg-black overflow-hidden font-serif"
    >
      {/* Decorative Gold Glow */}
      <div className="absolute w-2/5 h-2/5 bg-gradient-radial from-yellow-400/20 to-transparent top-10 left-1/4 rounded-full animate-pulse-slow"></div>
      <div className="absolute w-1/3 h-1/3 bg-gradient-radial from-yellow-300/15 to-transparent bottom-10 right-1/4 rounded-full animate-pulse-slow delay-200"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#F5D77A] to-[#C5A253] bg-clip-text text-transparent mb-8 transition-transform duration-500 hover:scale-105">
            Who We Are
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-[#E6C76A] mb-6 leading-relaxed max-w-3xl">
            MC PLC is a strategy and organizational transformation firm founded
            to strengthen institutions and drive sustainable performance.
            Established and led by Dr. Emebet Melese Zeleke (PhD), the firm is
            built on deep executive experience, institutional reform expertise,
            and a strong commitment to long-term organizational sustainability.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-[#E6C76A] leading-relaxed max-w-3xl">
            We partner with institutions to diagnose systemic challenges, design
            strategic solutions, and implement transformative initiatives that
            deliver measurable and lasting results.
          </p>
        </motion.div>

        {/* Right: Plain Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage}
            alt="About Illustration"
            className="w-full max-w-lg h-96 md:h-[30rem] object-cover"
          />
        </motion.div>
      </div>

      {/* Floating gold particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default About;
