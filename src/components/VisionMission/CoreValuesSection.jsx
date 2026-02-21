import React from "react";
import { motion } from "framer-motion";

const CoreValuesSection = ({ values }) => {
  return (
    <section
      id="values"
      className="py-16 px-4 md:px-10 bg-black font-serif overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl text-[#D4AF37] mb-12 text-center tracking-wide">
        Core Values
      </h2>

      {/* Grid Layout: 2 rows x 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {values.map((value, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative p-6 md:p-8 text-[#D4AF37] bg-black border border-[#D4AF37]/50 rounded-full shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl md:text-2xl mb-3">{value.title}</h3>
            <p className="text-sm md:text-base leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;
