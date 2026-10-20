import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  // Same display + body typefaces used across the site
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const items = [
    {
      icon: <Mail size={22} />,
      title: "Contact Us",
      desc: "info@marmikconsult.com",
    },
    {
      icon: <Phone size={22} />,
      title: "Call Us",
      desc: "+251 911 690 032",
    },
    {
      icon: <MapPin size={22} />,
      title: "Visit Us",
      desc: "Addis Ababa, Ethiopia",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 px-4 md:px-12 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/partner.jpg')",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Light navy scrim — keeps the photo visible instead of washing it out */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/70 via-[#0A0E17]/35 to-[#0A0E17]/75 pointer-events-none" />

      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(201,162,39,0.1),_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-4xl md:text-6xl mb-5 text-[#F3F4F8] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            Partner With <span className="text-[#E8C97A]">Us</span>
          </h2>
          <div className="h-px w-16 bg-[#C9A227] mx-auto mb-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-xl mb-14 text-[#C3C9D6] drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]"
        >
          Let's unlock your organization's full potential together
        </motion.p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -4 }}
              className="relative border border-white/[0.1] rounded-2xl p-7
                         bg-[#0A0E17]/70 backdrop-blur-md
                         hover:border-[#C9A227]/40
                         transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-11 h-11 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-lg flex items-center justify-center text-[#C9A227]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-[11px] uppercase tracking-[0.28em] text-[#9AA3B8] font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[#F3F4F8] text-base font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#C9A227]/25 rounded-2xl py-5 px-6 bg-[#0A0E17]/70 backdrop-blur-md"
        >
          <p
            className="text-base md:text-lg text-[#F3F4F8]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 500 }}
          >
            <span className="text-[#E8C97A]">MARMIK CONSULT PLC</span> —
            Unlocking our Client’s Potential Through Agile Transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
