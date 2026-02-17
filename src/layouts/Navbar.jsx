import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
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
    { name: "Home", path: "/", id: "01" },
    { name: "Projects", path: "/projects", id: "02" },
    { name: "Services", path: "/services", id: "03" },
    { name: "Gallery", path: "/gallery", id: "04" },
    { name: "Our Story", path: "/about", id: "05" },
    { name: "Contact us", path: "/contact", id: "06" },
  ];

  return (
    <nav className="fixed w-full z-[100] transition-all duration-700 pointer-events-none">
      {/* --- DESKTOP VIEW (UNTOUCHED) --- */}
      <div className={`flex justify-center transition-all duration-700 ${scrolled ? "pt-4" : "pt-8"}`}>
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            relative flex items-center justify-between px-6 md:px-10 pointer-events-auto
            transition-all duration-700 ease-in-out
            ${isOpen ? "opacity-0 pointer-events-none" : ""}
            ${scrolled 
              ? "w-[95%] md:w-[90%] lg:w-[85%] bg-[#00162E]/80 backdrop-blur-2xl border border-[#C5A059]/20 py-2.5 rounded-full shadow-2xl" 
              : "w-full bg-transparent py-4 border-transparent"}
          `}
        >
          <Link to="/" className="group flex items-center gap-3 z-[110]">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <img src={logo} alt="Home Tech" className="w-full h-full object-contain brightness-110" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif text-white text-sm md:text-lg leading-none uppercase tracking-tighter">
                Home Tech <span className="italic font-light opacity-60 text-[#C5A059]">Solutions</span>
              </h1>
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] text-[#C5A059] font-bold mt-1">Studio</span>
            </div>
          </Link>

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

          <div className="flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="lg:hidden flex flex-col gap-1.5 p-2">
              <div className="w-6 h-[1.5px] bg-white" />
              <div className="w-4 h-[1.5px] bg-[#C5A059] self-end" />
              <div className="w-6 h-[1.5px] bg-white" />
            </button>
            <button onClick={() => setShowProjectModal(true)} className="hidden md:block px-6 py-2.5 bg-[#C5A059] text-black text-[10px] font-bold uppercase tracking-widest rounded-full">
              Enquire Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* --- MOBILE OVERLAY (RE-FIXED) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#00162E] z-[200] lg:hidden pointer-events-auto"
          >
            {/* h-full: uses full height 
              flex-col: stacks content
              justify-between: pushes Top Bar up and Footer down
            */}
            <div className="h-full flex flex-col px-8 py-8 justify-between overflow-y-auto">
              
              {/* 1. TOP BAR */}
              <div className="flex justify-between items-center shrink-0">
                <span className="text-[9px] tracking-[0.5em] text-[#C5A059] font-bold uppercase opacity-50">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-full border border-[#C5A059]/20">
                  <X size={20} className="text-white" />
                </button>
              </div>

              {/* 2. CENTER LINKS - Adjusted for better mobile fit */}
<div className="flex flex-col space-y-3 py-6 mt-[-29px] md:mt-0">                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link to={link.path} onClick={() => setIsOpen(false)} className="group block">
                      <span className="text-[8px] text-[#C5A059] font-mono uppercase tracking-widest">{link.id}</span>
                      <h2 className={`text-4xl font-serif tracking-tighter ${location.pathname === link.path ? "text-[#C5A059] italic" : "text-white"}`}>
                        {link.name}
                      </h2>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* 3. FOOTER - Now locked to bottom with space-between layout */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="pt-6 border-t border-white/10 shrink-0"
              >
                <p className="text-[8px] tracking-widest text-white/30 uppercase mb-1">Get in touch</p>
                <p className="text-[#C5A059] text-base font-light mb-4">hello@hometech.com</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex gap-5 text-white/40">
                    <Instagram size={20} />
                    <Linkedin size={20} />
                    <Twitter size={20} />
                  </div>
                  <button
                    onClick={() => { setIsOpen(false); setShowProjectModal(true); }}
                    className="px-6 py-3 bg-[#C5A059] text-black text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg active:scale-95 transition-transform"
                  >
                    Enquire Now
                  </button>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <StartProjectModal open={showProjectModal} onClose={() => setShowProjectModal(false)} services={servicesData} products={productsData} />
    </nav>
  );
};

export default Navbar;