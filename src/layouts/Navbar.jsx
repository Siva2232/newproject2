import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; 
import useNavbarScroll from "../hooks/useNavbarScroll";
import servicesData from "../data/servicesData";
import productsData from "../data/productsData";
import StartProjectModal from "../components/common/StartProjectModal";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const scrolled = useNavbarScroll(50);
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Start Project modal (component handles internal form state)
  const [showProjectModal, setShowProjectModal] = useState(false);

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const navLinks = [
    { name: "Projects", path: "/projects", id: "01" },
    { name: "Services", path: "/services", id: "02" },
    { name: "Gallery", path: "/gallery", id: "03" },
    { name: "Contact us", path: "/contact", id: "04" },
    { name: "Our Story", path: "/about", id: "05" },
  ];

  return (
    <nav className="fixed w-full z-[100] transition-all duration-700 pointer-events-none">
      <div className={`flex justify-center transition-all duration-700 ${scrolled ? "pt-4" : "pt-8"}`}>
        
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`
            relative flex items-center justify-between px-6 md:px-10 pointer-events-auto
            transition-all duration-700 ease-in-out
            ${scrolled 
              ? "w-[95%] md:w-[90%] lg:w-[85%] bg-[#00162E]/80 backdrop-blur-2xl border border-[#C5A059]/20 py-2.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
              : "w-full bg-transparent py-4 border-transparent"}
          `}
        >
          {/* 1. LOGO */}
          <Link to="/" className="group flex items-center gap-3 z-[110]">
            <motion.div 
              animate={{ scale: scrolled ? 0.85 : 1 }}
              className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-500"
            >
              <img src={logo} alt="Home Tech Solutions" className="w-full h-full object-contain brightness-110" />
            </motion.div>
            <div className="flex flex-col">
              <h1 className="font-serif text-white text-base md:text-lg leading-none tracking-tighter uppercase">
                Home Tech <span className="italic font-light opacity-60 text-[#C5A059]">Solutions</span>
              </h1>
            </div>
          </Link>

          {/* 2. DESKTOP NAVIGATION */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.name} className="relative px-5 py-2" onMouseEnter={() => setIsHovered(link.name)} onMouseLeave={() => setIsHovered(null)}>
                <Link to={link.path} className={`relative z-10 text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-500 ${location.pathname === link.path || isHovered === link.name ? "text-white" : "text-white/40"}`}>
                  {link.name}
                </Link>
                <AnimatePresence>
                  {(isHovered === link.name || location.pathname === link.path) && (
                    <motion.div layoutId="nav-pill" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full z-0" />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* 3. MENU ACTION BUTTONS */}
          <div className="flex items-center gap-4">
             <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="relative z-[120] flex items-center gap-3 px-3 py-2 rounded-full lg:hidden group transition-all"
            >
              <span className={`text-[9px] font-bold uppercase tracking-widest transition-opacity duration-300 ${isOpen ? "text-white opacity-100" : "text-white/40 opacity-0"}`}>
                Close
              </span>
              <div className="w-8 h-8 flex flex-col items-center justify-center gap-1.5">
                <motion.span 
                  animate={isOpen ? { rotate: 45, y: 7.5, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                  className="w-6 h-[1.5px] block" 
                />
                <motion.span 
                  animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                  className="w-4 h-[1.5px] bg-[#C5A059] block self-end" 
                />
                <motion.span 
                  animate={isOpen ? { rotate: -45, y: -7.5, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                  className="w-6 h-[1.5px] block" 
                />
              </div>
            </button>
            <button
              type="button"
              onClick={() => setShowProjectModal(true)}
              className="hidden md:block px-6 py-2.5 bg-[#C5A059] text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 shadow-lg"
            >
              Enquire Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* 4. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-[#00162E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E] z-[100] lg:hidden pointer-events-auto"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            
            {/* Functional Close Button inside Overlay */}
            <div className="absolute top-8 left-10 right-10 flex justify-between items-center z-[110]">
               <span className="text-[10px] tracking-[0.5em] text-[#C5A059] font-bold uppercase opacity-50">Menu</span>
               
               <motion.button
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 onClick={(e) => {
                   e.stopPropagation();
                   setIsOpen(false);
                 }}
                 className="p-3 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/10 text-white shadow-xl flex items-center justify-center transition-colors hover:bg-[#C5A059]/20"
               >
                 <X size={24} strokeWidth={1.5} className="text-[#C5A059]" />
               </motion.button>
            </div>

            {/* Nav Links */}
            <div className="h-full flex flex-col justify-center px-10 gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  <Link 
                    to={link.path} 
                    className="group relative inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-[10px] text-[#C5A059] font-mono mb-2 block">{link.id}</span>
                    <h2 className={`text-5xl font-serif tracking-tighter transition-all ${location.pathname === link.path ? "text-[#C5A059] italic pl-4" : "text-white/40 group-hover:text-white"}`}>
                      {link.name}
                    </h2>
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.8 }}
                className="mt-10 pt-10 border-t border-white/10"
              >
                <div className="flex flex-col gap-6">
                   <div>
                     <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase mb-4">Get in touch</p>
                     <p className="text-[#C5A059] text-lg font-light">hello@hometech.com</p>
                   </div>
                   <div className="flex gap-6 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#C5A059] transition-colors">LinkedIn</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* START PROJECT MODAL (component) */}
      <StartProjectModal open={showProjectModal} onClose={() => setShowProjectModal(false)} services={servicesData} products={productsData} />
    </nav>
  );
};

export default Navbar;