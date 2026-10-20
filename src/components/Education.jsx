import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    icon: <GraduationCap size={26} />,
    title: "PhD in Business Leadership",
    subtitle: "Addis Ababa University School of Commerce",
    description:
      "Doctoral research in organizational leadership and transformation",
  },
  {
    icon: <Award size={26} />,
    title: "Master's Degree",
    subtitle: "Accounting and Finance",
    description: "Faculty of Business and Economics, Addis Ababa University",
  },
  {
    icon: <BookOpen size={26} />,
    title: "Bachelor's Degree",
    subtitle: "Accounting and Finance",
    description: "Faculty of Business and Economics, Addis Ababa University",
  },
];

const Education = () => {
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
      id="education"
      className="relative py-20 md:py-28 px-4 md:px-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/edu.jpg')", // <-- replace with your image path
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Light navy scrim — keeps the photo visible, cards carry their own backdrop for text legibility */}
      <div className="absolute inset-0 bg-[#0A0E17]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/60 via-transparent to-[#0A0E17]/70" />

      {/* Single restrained glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#C9A227]/[0.07] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-[#C9A227]/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 md:mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#C9A227]" />
            <p className="uppercase tracking-[0.32em] text-[11px] text-[#9AA3B8] font-medium">
              Education
            </p>
            <span className="h-px w-10 bg-[#C9A227]" />
          </div>

          <h2
            className="text-3xl md:text-5xl text-[#F3F4F8] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Academic <span className="text-[#E8C97A]">Credentials</span>
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-6 md:p-7 bg-[#10151F]/85 backdrop-blur-md
                         border border-white/[0.08] hover:border-[#C9A227]/40
                         shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                         transition-colors duration-300
                         w-full sm:w-[45%] md:w-[30%]"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-11 h-11 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-lg flex items-center justify-center text-[#C9A227]">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-[#F3F4F8] mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-[#C9A227] text-sm mb-1">{item.subtitle}</p>

                  <p className="text-[#9AA3B8] text-sm leading-relaxed">
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
