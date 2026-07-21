import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, align = "center", light = false }) => {
  // Logic for alignment styles
  const isLeft = align === "left";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-20 ${isLeft ? "text-left" : "text-center"} max-w-4xl ${!isLeft && "mx-auto"}`}
    >
      {/* 1. TOP LABEL (Small & Elegant) */}
      <motion.div variants={itemVariants} className={`flex items-center gap-3 mb-4 ${isLeft ? "justify-start" : "justify-center"}`}>
        <div className={`w-8 h-[1px] ${light ? "bg-white/30" : "bg-stone-300"}`} />
        <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[10px] font-bold">
          Studio Perspective
        </span>
      </motion.div>

      {/* 2. MAIN TITLE (The Shutter Reveal) */}
      <div className="overflow-hidden py-1">
        <motion.h2
          variants={itemVariants}
          className={`text-4xl sm:text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight ${
            light ? "text-white" : "text-stone-900"
          }`}
        >
          {title.split(" ").map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? "italic font-light" : "font-normal"}>
              {word}{" "}
            </span>
          ))}
        </motion.h2>
      </div>

      {/* 3. THE KINETIC DIVIDER */}
      <motion.div 
        variants={lineVariants}
        className={`h-[1px] w-24 my-8 ${isLeft ? "origin-left" : "mx-auto origin-center"} bg-[#C5A059]`}
      />

      {/* 4. SUBTITLE (The Gentle Fade) */}
      <motion.p
        variants={itemVariants}
        className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${
          isLeft ? "" : "mx-auto"
        } ${light ? "text-white/60" : "text-stone-500"}`}
      >
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionTitle;