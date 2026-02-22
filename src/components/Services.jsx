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
    { x: -420, scale: 0.75, opacity: 0.4, zIndex: 10 },
    { x: -220, scale: 0.9, opacity: 0.7, zIndex: 20 },
    { x: 0, scale: 1.08, opacity: 1, zIndex: 30 },
    { x: 220, scale: 0.9, opacity: 0.7, zIndex: 20 },
    { x: 420, scale: 0.75, opacity: 0.4, zIndex: 10 },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-20 bg-black font-serif overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>

      {/* Title */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F5D77A] to-[#D4AF37] bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
      </div>

      {/* Desktop Premium Carousel */}
      <div className="hidden md:flex relative justify-center items-center h-[550px]">
        {visibleCards.map((service, i) => (
          <motion.div
            key={service.title}
            animate={positions[i]}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -10 }}
            className="absolute w-[300px] h-[420px] p-6 rounded-3xl 
            bg-gradient-to-br from-[#D4AF37]/95 via-[#F5D77A]/95 to-[#D4AF37]/95 
            shadow-[0_15px_50px_rgba(212,175,55,0.35)]
            border border-[#D4AF37]/60
            backdrop-blur-md
            text-black cursor-pointer"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-black text-[#D4AF37] p-2 rounded-full">
                  <GiCheckMark className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-black/80">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Premium Cards */}
      <div className="md:hidden flex flex-col gap-6 px-5 relative z-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden rounded-3xl p-5 
            bg-gradient-to-br from-[#D4AF37] via-[#F5D77A] to-[#D4AF37]
            shadow-lg"
          >
            <div className="flex items-start gap-3">
              <div className="bg-black text-[#D4AF37] p-2 rounded-full">
                <GiCheckMark className="text-lg" />
              </div>
              <h3 className="text-base font-semibold text-black">
                {service.title}
              </h3>
            </div>

            <p className="text-sm mt-3 text-black/80 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
