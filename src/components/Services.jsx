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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = Array.from({ length: 5 }).map((_, i) => {
    return services[(startIndex + i) % services.length];
  });

  const positions = [
    { x: -480, scale: 0.7, zIndex: 10, rotate: -6 },
    { x: -240, scale: 0.9, zIndex: 20, rotate: -3 },
    { x: 0, scale: 1.05, zIndex: 30, rotate: 0 },
    { x: 240, scale: 0.9, zIndex: 20, rotate: 3 },
    { x: 480, scale: 0.7, zIndex: 10, rotate: 6 },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-16 md:py-20 bg-black font-serif overflow-hidden"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#F5D77A] to-[#D4AF37] bg-clip-text text-transparent">
          Our Services
        </h2>
      </div>

      {/* Desktop Carousel */}
      <div className="hidden md:flex relative justify-center items-center h-[550px]">
        {visibleCards.map((service, i) => (
          <motion.div
            key={service.title}
            animate={positions[i]}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="absolute w-[280px] h-[400px] p-5 rounded-3xl bg-gradient-to-br from-[#D4AF37]/90 via-[#F5D77A]/90 to-[#D4AF37]/90 shadow-[0_8px_35px_rgba(212,175,55,0.35)] border border-[#D4AF37]/50 flex flex-col justify-start text-black cursor-pointer"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <GiCheckMark className="text-black text-3xl mt-1" />
                <h3 className="text-lg font-semibold leading-snug">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed mt-1">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Scrollable Cards with Margin */}
      <div className="md:hidden flex flex-col gap-6 px-4">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-gradient-to-br from-[#D4AF37]/90 via-[#F5D77A]/90 to-[#D4AF37]/90 p-4 rounded-3xl shadow-md flex flex-col gap-2 text-black mx-2"
          >
            <div className="flex items-start gap-2">
              <GiCheckMark className="text-black text-2xl mt-1" />
              <h3 className="text-base font-semibold">{service.title}</h3>
            </div>
            <p className="text-xs leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
