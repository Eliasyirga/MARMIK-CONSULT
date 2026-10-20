import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const bgImages = [
  "/images/photo2.jpg",
  "/images/photo7.jpg",
  "/images/photo9.jpg",
];

const stages = [
  { id: "01", label: "Discover" },
  { id: "02", label: "Align" },
  { id: "03", label: "Deliver" },
  { id: "04", label: "Sustain" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Load display + body typefaces once
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  // Auto-play slideshow every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? bgImages.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % bgImages.length);

  return (
    <section
      id="home"
      className="relative flex items-center w-full min-h-screen overflow-hidden select-none bg-[#0A0E17]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* BACKGROUND SLIDESHOW */}
      {bgImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-in-out ${
            index === currentSlide
              ? "opacity-100 animate-kenburns"
              : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${image}')` }}
        />
      ))}

      {/* TONAL OVERLAY — scrim only where text sits, so the photography reads clearly elsewhere */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Legibility scrim: solid behind the copy, fully clear by ~80% width */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #0A0E17 0%, rgba(10,14,23,0.88) 30%, rgba(10,14,23,0.55) 48%, rgba(10,14,23,0.18) 65%, rgba(10,14,23,0.02) 80%, transparent 100%)",
          }}
        />
        {/* Gentle top/bottom vignette for the nav dots and arrows, not the whole frame */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,14,23,0.5) 0%, transparent 16%), linear-gradient(to bottom, rgba(10,14,23,0.3) 0%, transparent 12%)",
          }}
        />
        {/* Subtle warm grade so the images feel tied to the gold brand, not just tinted dark */}
        <div className="absolute inset-0 bg-[#C9A227] mix-blend-overlay opacity-[0.06]" />
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 grid lg:grid-cols-[1fr_auto] gap-16 items-center">
        {/* LEFT — narrative */}
        <div className="max-w-2xl">
          {/* Eyebrow — quiet, editorial, no bounce */}
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-[#C9A227]" />
            <span className="text-[11px] text-[#9AA3B8] uppercase tracking-[0.32em] font-medium">
              Agile Transformation Consultancy
            </span>
          </div>

          {/* Headline — Fraunces serif carries the authority */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-[#F3F4F8] mb-6 drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Unlocking your organization&apos;s{" "}
            <span className="text-[#E8C97A]">potential</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#C3C9D6] leading-relaxed mb-10 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            We partner with leadership teams to build the speed, clarity, and
            adaptability needed to outpace change — from strategy through to
            lasting delivery.
          </p>

          {/* CTAs — rectangular, restrained, no metallic sheen */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#services">
              <button className="px-8 py-3.5 rounded-md bg-gradient-to-r from-[#E8C97A] to-[#C9A227] text-[#0A0E17] text-sm font-semibold tracking-wide hover:from-[#F0D68F] hover:to-[#D9AF34] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8C97A] focus:ring-offset-2 focus:ring-offset-[#0A0E17]">
                Explore our services
              </button>
            </a>
            <a href="#contact">
              <button className="px-8 py-3.5 rounded-md border border-[#232B3D] text-[#F3F4F8] text-sm font-semibold tracking-wide hover:border-[#C9A227] hover:text-[#E8C97A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8C97A] focus:ring-offset-2 focus:ring-offset-[#0A0E17]">
                Talk to our team
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* NAVIGATION ARROWS — thin outline, no glow */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-[#232B3D] text-[#9AA3B8] hover:border-[#C9A227] hover:text-[#E8C97A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8C97A]"
      >
        <FiChevronLeft size={18} />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-[#232B3D] text-[#9AA3B8] hover:border-[#C9A227] hover:text-[#E8C97A] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8C97A]"
      >
        <FiChevronRight size={18} />
      </button>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {bgImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-500 rounded-full ${
              idx === currentSlide
                ? "w-8 h-1.5 bg-[#C9A227]"
                : "w-1.5 h-1.5 bg-[#3A4256] hover:bg-[#C9A227]/60"
            }`}
            aria-label={`Switch to background slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
