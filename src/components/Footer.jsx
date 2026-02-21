import React from "react";
import {
  FiFacebook,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#D4AF37]/90 via-[#F5D77A]/90 to-[#FFD700]/90 text-black font-serif py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-bold">Marmik Consult PLC</h2>
          <p className="text-sm md:text-base text-black/80">
            Strategy • Governance • Transformation
          </p>
          <div className="flex flex-col text-sm text-black/70 mt-2 gap-1">
            <div className="flex items-center gap-2">
              <FiMail /> info@marmikconsult.com
            </div>
            <div className="flex items-center gap-2">
              <FiPhone /> +251 911 690 032
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin /> Addis Ababa, Ethiopia
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Company</h3>
          <a href="#about" className="hover:text-black/90 transition">
            About Us
          </a>
          <a href="#services" className="hover:text-black/90 transition">
            Services
          </a>
          <a href="#contact" className="hover:text-black/90 transition">
            Contact
          </a>

          <h3 className="font-semibold text-lg mt-4">Resources</h3>
          <a href="#vision" className="hover:text-black/90 transition">
            Vision & Mission
          </a>
          <a href="#values" className="hover:text-black/90 transition">
            Core Values
          </a>
          <a href="#founder" className="hover:text-black/90 transition">
            Founder
          </a>
        </div>

        {/* Social Highlight */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg">Connect With Us</h3>
          <p className="text-sm text-black/80">
            Follow us on social media and stay updated with our latest insights.
          </p>
          <div className="flex gap-3 mt-1">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 border-t border-black/20 pt-4 text-center text-sm text-black/70">
        © {new Date().getFullYear()} Marmik Consult PLC. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
