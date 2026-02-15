import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="relative min-h-[600px]">
      {/* 1. MASONRY-STYLE GRID CONTAINER */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              layout // This is the magic: it animates the card to its new position
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
                delay: index * 0.05 // Subtle staggered entrance
              }}
              // Adds an asymmetric "offset" to every second card for a premium look
              className={`${index % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <ProjectCard {...project} />
              
              {/* 2. OPTIONAL: ARCHITECTURAL COORDINATES */}
              <div className="mt-6 flex justify-between items-center px-2">
                <div className="h-[1px] flex-1 bg-white/10 mr-4" />
                <span className="text-[9px] uppercase tracking-widest text-stone-500 font-mono">
                  LAT: {40 + index}.{index} / LON: -74.0
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 3. EMPTY STATE (Luxury Style) */}
      {projects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-40 text-center"
        >
          <p className="font-serif italic text-2xl text-stone-500">
            No projects found in this collection.
          </p>
          <div className="mt-4 w-12 h-[1px] bg-[#C5A059] mx-auto" />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGrid;