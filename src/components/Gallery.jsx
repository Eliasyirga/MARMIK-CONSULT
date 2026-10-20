import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Update paths to your actual images
const images = [
  // Top 4 "Recent" Featured Images
  {
    id: 1,
    src: "/images/photo1.jpg",
    span: "md:col-span-2 md:row-span-2 h-[26rem] md:h-[32rem]",
  },
  {
    id: 2,
    src: "/images/photo2.jpg",
    span: "md:col-span-1 md:row-span-1 h-[15rem]",
  },
  {
    id: 3,
    src: "/images/photo3.jpg",
    span: "md:col-span-1 md:row-span-1 h-[15rem]",
  },
  {
    id: 4,
    src: "/images/photo4.jpg",
    span: "md:col-span-2 md:row-span-1 h-[15rem]",
  },
  // Additional Images
  {
    id: 5,
    src: "/images/photo5.jpg",
    span: "md:col-span-1 md:row-span-1 h-[18rem]",
  },
  {
    id: 6,
    src: "/images/photo6.jpg",
    span: "md:col-span-1 md:row-span-1 h-[18rem]",
  },
  {
    id: 7,
    src: "/images/photo7.jpg",
    span: "md:col-span-1 md:row-span-1 h-[18rem]",
  },
  {
    id: 8,
    src: "/images/photo8.jpg",
    span: "md:col-span-2 md:row-span-1 h-[18rem]",
  },
  {
    id: 9,
    src: "/images/photo9.jpg",
    span: "md:col-span-1 md:row-span-1 h-[18rem]",
  },
  {
    id: 10,
    src: "/images/photo10.jpg",
    span: "md:col-span-1 md:row-span-1 h-[18rem]",
  },
  {
    id: 11,
    src: "/images/photo11.jpg",
    span: "md:col-span-1 md:row-span-1 h-[18rem]",
  },
  {
    id: 12,
    src: "/images/founder.jpg",
    span: "md:col-span-1 md:row-span-1 h-[18rem]",
  },
];

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const visibleImages = isExpanded ? images : images.slice(0, 4);

  return (
    <section
      id="gallery"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#0A0E17] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Gold Ambient Glows */}
      <div className="absolute w-[36rem] h-[36rem] bg-[#C9A227]/[0.05] blur-[150px] rounded-full top-1/4 -left-20 pointer-events-none" />
      <div className="absolute w-[36rem] h-[36rem] bg-[#C9A227]/[0.05] blur-[150px] rounded-full bottom-10 -right-20 pointer-events-none" />

      {/* Grid Pattern Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#F3F4F8 1px, transparent 1px), linear-gradient(90deg, #F3F4F8 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Bar */}
        <motion.div
          className="flex items-center justify-between mb-10 border-b border-white/[0.08] pb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C9A227] animate-pulse" />
            <span
              className="text-2xl md:text-3xl text-[#F3F4F8]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Recent Highlights
            </span>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-medium">
            {isExpanded ? "All 12 Photos" : "Featured (4)"}
          </span>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setActiveImage(img.src)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group bg-[#121824] border border-white/[0.06] hover:border-[#C9A227]/50 transition-all duration-500 shadow-lg ${img.span}`}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Light Recent Tag for First Image */}
                {img.id === 1 && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0A0E17]/80 backdrop-blur-md border border-[#C9A227]/40 rounded-full text-[10px] uppercase tracking-widest text-[#E8C97A]">
                    Latest
                  </div>
                )}

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#0A0E17]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Golden Expanding Icon on Hover */}
                <div className="absolute inset-0 border border-[#C9A227]/0 group-hover:border-[#C9A227]/60 rounded-2xl transition-colors duration-500 pointer-events-none flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#0A0E17]/80 backdrop-blur-md border border-[#C9A227]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-[0_0_20px_rgba(201,162,39,0.3)]">
                    <svg
                      className="w-5 h-5 text-[#E8C97A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C9A227]/40 bg-[#121824] text-[#F3F4F8] hover:text-[#0A0E17] hover:bg-[#C9A227] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-semibold">
              {isExpanded ? "Show Less" : "Show More"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#0A0E17]/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.05] text-[#F3F4F8] hover:text-[#E8C97A] border border-white/10 hover:border-[#C9A227] transition-all duration-300"
            >
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full rounded-2xl overflow-hidden border border-[#C9A227]/40 shadow-[0_30px_90px_rgba(0,0,0,0.9)] bg-[#0A0E17]"
            >
              <img
                src={activeImage}
                alt=""
                className="w-full h-full object-contain max-h-[85vh] mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
