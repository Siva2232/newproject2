import React from "react";
import { motion } from "framer-motion";

const ProjectFilter = ({ categories, active, setActive, projectCounts = {} }) => {
  return (
    <div className="relative flex justify-center mb-14 md:mb-20 px-4">
      {/* 1. FILTER CONTAINER */}
      <nav className="relative flex flex-wrap justify-center items-center gap-1 md:gap-8 p-2 border border-white/10 rounded-3xl md:rounded-full bg-[#0F0F0F]/50 backdrop-blur-xl">
        
        {categories.map((cat, i) => {
          const isActive = active === cat;
          
          return (
            <button
              key={i}
              onClick={() => setActive(cat)}
              className={`relative px-4 py-2.5 md:px-6 md:py-3 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.3em] font-bold transition-colors duration-500 outline-none
                ${isActive ? "text-black" : "text-stone-500 hover:text-white"}`}
            >
              {/* 2. THE MAGNETIC PILL (Animated Background) */}
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#C5A059] rounded-full z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* 3. BUTTON CONTENT */}
              <span className="relative z-10 flex items-center gap-2">
                {cat}
                
                {/* Subtle Project Counter */}
                {projectCounts[cat] !== undefined && (
                  <span className={`text-[8px] opacity-50 ${isActive ? "text-black" : "text-[#C5A059]"}`}>
                    ({projectCounts[cat]})
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </nav>

      {/* 4. DECORATIVE INDICATOR LINE */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-4 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </div>
    </div>
  );
};

export default ProjectFilter;