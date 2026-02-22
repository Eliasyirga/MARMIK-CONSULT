import React from "react";
import logo from "../assets/logo.webp";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <img
        src={logo}
        alt="Marmik Logo"
        className="w-24 md:w-28 mb-8 animate-fadeIn"
      />

      {/* Company Name */}
      <h2 className="text-[#D4AF37] font-serif text-xl md:text-2xl tracking-widest mb-6">
        MARMIK CONSULT PLC
      </h2>

      {/* Luxury Loading Bar */}
      <div className="w-56 md:w-72 h-[3px] bg-[#D4AF37]/20 rounded-full overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-[#D4AF37] via-[#F5D77A] to-[#D4AF37] animate-loadingBar"></div>
      </div>

      {/* Sub Text */}
      <p className="text-[#D4AF37]/70 text-xs md:text-sm mt-4 tracking-[3px] animate-pulse">
        LOADING EXPERIENCE
      </p>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes loadingBar {
          0% {
            left: -40%;
          }
          100% {
            left: 100%;
          }
        }

        .animate-loadingBar {
          animation: loadingBar 1.5s linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
