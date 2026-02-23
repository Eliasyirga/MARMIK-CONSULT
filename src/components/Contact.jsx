import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact" // <-- Add this line to connect with header link
      className="relative text-[#E6C76A] py-20 px-4 md:px-12 overflow-hidden
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/partner.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 pointer-events-none" />

      {/* Subtle Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(230,199,106,0.08),_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-6xl font-serif mb-4 animate-fadeIn">
          Partner With Us
        </h2>

        <div className="w-20 h-[2px] bg-gradient-to-r from-[#E6C76A] to-yellow-400 mx-auto mb-6" />

        <p className="text-lg md:text-xl mb-12 animate-fadeIn delay-200">
          Let's unlock your organization's full potential together
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Mail size={24} />,
              title: "Contact Us",
              desc: "info@marmikconsult.com",
            },
            {
              icon: <Phone size={24} />,
              title: "Call Us",
              desc: "+251 911 690 032",
            },
            {
              icon: <MapPin size={24} />,
              title: "Visit Us",
              desc: "Addis Ababa, Ethiopia",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative border border-[#E6C76A]/30 
                         rounded-3xl p-6 bg-black/50 backdrop-blur-sm
                         hover:shadow-[0_0_40px_rgba(230,199,106,0.5)]
                         transform hover:-translate-y-1 transition-all duration-500"
            >
              <div className="flex justify-center mb-3 text-[#E6C76A]">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-[#E6C76A]/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Gold Banner */}
        <div className="mt-12 border border-[#E6C76A]/30 rounded-3xl py-4 px-4 bg-[#E6C76A]/20 backdrop-blur-sm">
          <p className="text-base md:text-lg font-serif">
            MARMIK CONSULT LTD — Unlocking our Client’s Potential Through Agile
            Transformation
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          transform: translateY(12px);
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
