import React from "react";
import heroBg from "../assets/bg5.jpg"; // Make sure this path is correct

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center w-full h-screen font-serif overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay & Radial Gold Highlights */}
      <div className="absolute inset-0 z-0">
        {/* Luxury radial highlights */}
        <div className="absolute w-2/5 h-2/5 bg-gradient-radial from-yellow-400/20 to-transparent top-1/4 left-1/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute w-1/3 h-1/3 bg-gradient-radial from-yellow-300/15 to-transparent bottom-1/5 right-1/4 rounded-full animate-pulse-slow delay-200"></div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-3xl flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#F5D77A] to-[#C5A253] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(212,175,55,0.9)] mb-6 transition-transform duration-500 hover:scale-105">
          Unlocking Our Client’s Potential
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-[#E6C76A] mb-10 leading-relaxed drop-shadow-md">
          Through Agile Transformation
        </p>
        <a href="#services">
          <button className="bg-gradient-to-r from-[#D4AF37] to-[#F5D77A] text-black px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]">
            Explore Our Services
          </button>
        </a>
      </div>

      {/* Optional animated floating gold particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
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

export default Hero;
