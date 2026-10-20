import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";

const services = [
  {
    title: "Organizational Diagnostics & Strategy Formulation",
    description:
      "We conduct deep-dive assessments to identify systemic gaps and develop strategic road-maps that unlock productivity and sustainable growth.",
  },
  {
    title: "Implementation Support",
    description:
      "We develop robust implementation plans with clear accountability frameworks and measurable milestones.",
  },
  {
    title: "Professional & Capacity Development",
    description:
      "We deliver customized, competency-based training programs to strengthen institutional capability.",
  },
  {
    title: "Financial Modeling",
    description:
      "We provide data-driven financial modeling aligned with global, regional, and local economic realities and client strategies.",
  },
  {
    title: "Project Management Support",
    description:
      "Our multidisciplinary expertise enables us to provide tailored project management solutions.",
  },
  {
    title: "System Support",
    description:
      "We support automation of internal processes through in-house developed solutions to enhance efficiency and control.",
  },
  {
    title: "Organizational Design",
    description:
      "We design comprehensive organizational structures and detailed job descriptions to optimize human capital productivity.",
  },
  {
    title: "Up scaling Startup Potential",
    description:
      "We provide capacity-building programs and strategic partnership support to help startups scale sustainably.",
  },
];

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Same display + body typefaces used across the site
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % services.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = Array.from({ length: 5 }).map((_, i) => {
    return services[(startIndex + i) % services.length];
  });

  const positions = [
    { x: -420, scale: 0.75, opacity: 0.35, zIndex: 10 },
    { x: -220, scale: 0.9, opacity: 0.65, zIndex: 20 },
    { x: 0, scale: 1.08, opacity: 1, zIndex: 30 },
    { x: 220, scale: 0.9, opacity: 0.65, zIndex: 20 },
    { x: 420, scale: 0.75, opacity: 0.35, zIndex: 10 },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-28 bg-[#0A0E17] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Single restrained glow, static */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C9A227]/[0.06] blur-[140px] rounded-full pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-14 md:mb-16 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-10 bg-[#C9A227]" />
        </div>
        <h2
          className="text-3xl md:text-5xl text-[#F3F4F8] tracking-wide"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
        >
          Our <span className="text-[#E8C97A]">Services</span>
        </h2>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex relative justify-center items-center h-[550px]">
        {visibleCards.map((service, i) => (
          <motion.div
            key={service.title}
            animate={positions[i]}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -10 }}
            className="absolute w-[300px] h-[420px] p-7 rounded-2xl
            bg-gradient-to-br from-[#E8C97A] via-[#F0D68F] to-[#C9A227]
            border border-[#C9A227]/50
            shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            text-[#0A0E17] cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-[#0A0E17] rounded-full flex items-center justify-center">
                  <GiCheckMark className="text-lg text-[#E8C97A]" />
                </div>
                <h3
                  className="text-lg leading-snug pt-1 text-[#0A0E17]"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#0A0E17]/75">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-5 px-5 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-2xl p-5
            bg-[#10151F] border border-white/[0.08]"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-9 h-9 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-lg flex items-center justify-center">
                <GiCheckMark className="text-base text-[#C9A227]" />
              </div>
              <h3
                className="text-base leading-snug text-[#F3F4F8] pt-1"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
              >
                {service.title}
              </h3>
            </div>

            <p className="text-sm mt-3 text-[#9AA3B8] leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
