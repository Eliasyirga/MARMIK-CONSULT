import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: <GraduationCap size={28} />,
    title: "PhD in Business Leadership",
    subtitle: "Addis Ababa University School of Commerce",
    description:
      "Doctoral research in organizational leadership and transformation",
  },
  {
    icon: <Award size={28} />,
    title: "Master's Degree",
    subtitle: "Accounting and Finance",
    description: "Faculty of Business and Economics, Addis Ababa University",
  },
  {
    icon: <BookOpen size={28} />,
    title: "Bachelor's Degree",
    subtitle: "Accounting and Finance",
    description: "Faculty of Business and Economics, Addis Ababa University",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-16 px-4 md:px-12 text-[#E6C76A] font-serif overflow-hidden
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/edu.jpg')", // <-- replace with your image path
      }}
    >
      {/* ===== Background Effects ===== */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#E6C76A]/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#E6C76A]/10 blur-[120px] rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto">
        {/* ===== Section Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="uppercase tracking-[3px] text-xs text-[#E6C76A]/60 mb-2">
            Education
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            Academic Credentials
          </h2>

          <div className="w-20 h-[2px] bg-gradient-to-r from-[#E6C76A] to-yellow-400 mt-4 mx-auto" />
        </motion.div>

        {/* ===== Education Cards (Row) ===== */}
        <div className="flex flex-wrap gap-6 justify-center">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-2xl p-6
                         bg-black/70 backdrop-blur-md
                         border border-[#E6C76A]/30
                         shadow-[0_8px_30px_rgba(230,199,106,0.15)]
                         transition-all duration-500
                         w-full sm:w-[45%] md:w-[30%]"
            >
              {/* Hover Glow Border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#E6C76A]/70 transition-all duration-500"></div>

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="bg-[#E6C76A] text-black p-2.5 rounded-full shadow-lg">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-[#E6C76A]/80 text-sm md:text-sm mb-0.5">
                    {item.subtitle}
                  </p>

                  <p className="text-[#E6C76A]/60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
