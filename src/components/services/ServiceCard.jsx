import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, number, tag, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative group h-[380px] sm:h-[450px] w-full bg-[#1A1A1A] overflow-hidden cursor-pointer"
    >
      {/* 1. THE REVEAL IMAGE (Visible on Hover) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-60 grayscale group-hover:grayscale-0"
          style={{ backgroundImage: `url(${image || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80'})` }}
        />
        {/* Subtle Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
      </div>

      {/* 2. CARD CONTENT */}
      <div className="relative z-10 h-full p-6 sm:p-8 md:p-12 flex flex-col justify-between">
        
        {/* Top Section: Number & Tag */}
        <div className="flex justify-between items-start">
          <span className="font-serif text-[#C5A059] text-4xl opacity-40 group-hover:opacity-100 transition-opacity duration-500">
            {number || "01"}
          </span>
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/50 pt-2"
          >
            {tag || "Bespoke"}
          </motion.span>
        </div>

        {/* Bottom Section: Title & Reveal Text */}
        <div className="relative">
          {/* Decorative Line */}
          <motion.div 
            className="w-12 h-[2px] bg-[#C5A059] mb-6 origin-left transition-all duration-500 group-hover:w-full" 
          />
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-4 leading-tight group-hover:text-[#C5A059] transition-colors duration-500">
            {title}
          </h3>

          {/* Always visible on touch screens (no hover), slides up on desktop */}
          <div className="h-auto md:h-0 md:group-hover:h-20 transition-all duration-500 overflow-hidden">
            <p className="text-stone-400 text-sm leading-relaxed mb-4 md:mb-6 max-w-[280px]">
              High-end curated interior design solutions tailored to your architectural vision and lifestyle.
            </p>
          </div>

          {/* Next-Level Arrow Animation */}
          <div className="flex items-center gap-3 text-[#C5A059] mt-2">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Discover</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xl"
            >
              →
            </motion.div>
          </div>
        </div>
      </div>

      {/* 3. BORDER OVERLAY (Glassmorphism effect) */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-[#C5A059]/30 transition-colors duration-500 z-20 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard;