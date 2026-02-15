import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Subtle magnetic effect for the background glow
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-40 bg-[#080808] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* 1. INTERACTIVE AMBIENT GLOW */}
      <motion.div
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        className="absolute w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none"
      />

      {/* 2. KINETIC DECORATION */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 px-6">
        {/* 3. THE "ARCHITECTURAL" LABEL */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold mb-8 block"
        >
          Begin the Conversation
        </motion.span>

        {/* 4. MAIN HEADING */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-serif text-white mb-12 leading-[1.1] tracking-tighter"
        >
          Ready to <span className="italic font-light">Transform</span> <br /> 
          Your Living <span className="italic font-light opacity-80">Essence?</span>
        </motion.h2>

        {/* 5. NEXT-LEVEL MAGNETIC BUTTON */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-block group"
        >
          <button className="relative px-12 py-6 bg-transparent border border-white/20 text-white uppercase tracking-[0.4em] text-xs font-bold overflow-hidden transition-all duration-500 group-hover:border-[#C5A059]">
            {/* Liquid Fill Hover Effect */}
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
            
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">
              Inquire Now — ↗
            </span>
          </button>
          
          {/* Subtle Outer Glow */}
          <div className="absolute -inset-4 bg-[#C5A059]/0 group-hover:bg-[#C5A059]/10 blur-xl transition-all duration-500 rounded-full" />
        </motion.div>
      </div>

      {/* 6. COORDINATE FOOTER (Technical Vibe) */}
      <div className="absolute bottom-10 w-full flex justify-between px-10 opacity-20 hidden md:flex">
        <span className="text-[10px] text-white font-mono tracking-widest text-left">
          EST: 2026 <br /> STUDIO.AV
        </span>
        <span className="text-[10px] text-white font-mono tracking-widest text-right">
          AVAILABILITY: <br /> Q3 — 2026
        </span>
      </div>
    </section>
  );
};

export default CallToAction;