import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ image, title, number, category }) => {
  // Touch screens have no hover, so keep the revealed state always visible there
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate={isTouch ? "hover" : "initial"}
      whileHover="hover"
      className="relative w-full group cursor-pointer overflow-hidden bg-[#0A0A0A]"
    >
      {/* 1. THE IMAGE CONTAINER with Masking Reveal */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <motion.div
          variants={{
            initial: { scale: 1.1, filter: "grayscale(100%) brightness(0.6)" },
            hover: { scale: 1, filter: "grayscale(0%) brightness(0.8)" }
          }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <img
            src={image || "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2. ARCHITECTURAL OVERLAY (Corner Frames) */}
        <div className="absolute inset-0 z-20 p-6 pointer-events-none">
          <motion.div 
            variants={{
              initial: { opacity: 0, scale: 0.9 },
              hover: { opacity: 1, scale: 1 }
            }}
            className="h-full w-full border border-white/20 relative"
          >
            {/* Elegant Corner Accent */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C5A059]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C5A059]" />
          </motion.div>
        </div>

        {/* 3. FLOATING METADATA (Top Left) */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8 z-30 overflow-hidden">
          <motion.div
            variants={{
              initial: { y: -20, opacity: 0 },
              hover: { y: 0, opacity: 1 }
            }}
            className="flex items-center gap-3"
          >
            <span className="text-[#C5A059] font-serif text-xl">{number || "01"}</span>
            <div className="w-8 h-[1px] bg-white/30" />
            <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold">
              {category || "Residential"}
            </span>
          </motion.div>
        </div>

        {/* 4. TITLE REVEAL (Bottom Center) */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-12">
          <div className="overflow-hidden mb-2">
            <motion.h3
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 }
              }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="text-white text-2xl sm:text-3xl md:text-4xl font-serif italic tracking-tight px-4 text-center"
            >
              {title}
            </motion.h3>
          </div>
          
          <motion.div
            variants={{
              initial: { scaleX: 0, opacity: 0 },
              hover: { scaleX: 1, opacity: 1 }
            }}
            className="w-12 h-[1px] bg-[#C5A059] origin-center"
          />
        </div>
      </div>

      {/* 5. INTERACTION HINT (Bottom Reveal) */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 10 },
          hover: { opacity: 1, y: 0 }
        }}
        className="absolute bottom-4 w-full text-center z-40"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/40">
          View Case Study
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;