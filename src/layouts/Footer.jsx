import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { scrollYProgress } = useScroll();
  
  // Refined animation: Logo fades in and scales slightly as we hit the bottom
  const logoScale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1.2]);
  const logoOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 0.05]);
  const smoothScale = useSpring(logoScale, { stiffness: 100, damping: 30 });

  const footerLinks = {
    services: ["Smart Home Automation", "Home Theater", "Lighting Design", "Security Systems"],
    studio: ["Our Story", "Tech Philosophy", "Careers", "Journal"],
    legal: ["Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="relative bg-white pt-32 pb-12 overflow-hidden border-t border-gray-100">
      
      {/* 1. CENTERED WATERMARK LOGO */}
      <motion.div 
        style={{ 
          scale: smoothScale,
          opacity: logoOpacity,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <img 
          src={logo} 
          alt="" 
          className="w-[50vw] md:w-[30vw] h-auto grayscale" 
        />
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* 2. BRAND SECTION */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="group flex items-center gap-4">
           <div className="relative transition-transform duration-500 group-hover:scale-110">
  <img 
    src={logo} 
    alt="Home Tech Solutions Logo" 
    className="h-10 w-auto object-contain"
  />
</div>

              
              <div className="flex flex-col">
                <h3 className="text-black text-2xl font-serif tracking-tighter leading-none">
                  HOME TECH <span className="italic font-light opacity-60">SOLUTIONS</span>
                </h3>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-bold mt-1">
                  Studio
                </span>
              </div>
            </Link>

            <p className="text-gray-500 text-lg font-light max-w-sm leading-relaxed">
              Elevating residential environments through intelligent integration and 
              bespoke technical craftsmanship.
            </p>

            <div className="flex gap-6">
              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-[#C5A059] transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram size={16} />
              </motion.a>

              <motion.a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-[#C5A059] transition-colors"
                aria-label="Twitter"
                title="Twitter"
              >
                <Twitter size={16} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-[#C5A059] transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-[#C5A059] transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Facebook size={16} />
              </motion.a>
            </div>
          </div>

          {/* 3. NAVIGATION GRID */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Expertise</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-500 hover:text-black text-sm font-light transition-all duration-500 hover:pl-2">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Studio</h4>
              <ul className="space-y-4">
                {footerLinks.studio.map((link) => (
                  <li key={link}>
                    <Link to="#" className="text-gray-500 hover:text-black text-sm font-light transition-all duration-500 hover:pl-2">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Contact</h4>
              <p className="text-black text-lg font-serif italic mb-2 hover:text-[#C5A059] transition-colors cursor-pointer">
                hello@hometech.studio
              </p>
              <p className="text-gray-400 text-sm font-light tracking-wide">+91 1234567890</p>
            </div>
          </div>
        </div>

        {/* 4. BOTTOM BAR */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 order-2 md:order-1">
            {footerLinks.legal.map((link) => (
              <Link key={link} to="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#C5A059] transition-colors">
                {link}
              </Link>
            ))}
          </div>
          
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 order-1 md:order-2">
            © {currentYear} — HOME TECH SOLUTIONS STUDIO.
          </p>

          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, borderColor: "#C5A059" }}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#C5A059] hover:border-[#C5A059] transition-all duration-500 order-3 group"
          >
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;