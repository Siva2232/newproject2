import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "../common/Container";
import ProjectCard from "../projects/ProjectCard";
import productsData from "../../data/productsData";

// use first three products for the featured carousel – keeps all downstream
// logic unchanged, just swaps the data source
const LIVE_PROJECTS = productsData.slice(0, 3);

const FeaturedProjects = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springX = useSpring(useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]), {
    stiffness: 50,
    damping: 20
  });

  const yLeft1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 100]);
  const yLeft2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 50]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 md:py-48 overflow-hidden bg-[#00162E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E]"
    >
      {/* 1. BACKGROUND KINETICS - Subtler "Studio" watermark */}
      <motion.div 
        style={{ x: springX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-full whitespace-nowrap pointer-events-none opacity-[0.03] select-none z-0 hidden lg:block"
      >
        <h2 className="text-[22vw] font-serif italic text-white leading-none">
          Studio — Solutions — Studio
        </h2>
      </motion.div>

      {/* Subtle Grain Overlay for Premium Texture */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <Container className="relative z-10">
        
        {/* 2. HEADER */}
        {/* 2. HEADER */}
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 md:mb-48 gap-12">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="max-w-3xl" // Slightly wider to accommodate description
  >
    <div className="flex items-center gap-4 mb-6">
      {/* Metallic Gold Accent Line */}
      <div className="w-12 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent" />
      <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold">
        Project Showcase
      </span>
    </div>
    
    <h2 className="text-5xl md:text-8xl font-serif text-white leading-[1.05] mb-8 tracking-tighter">
      Signature <span className="italic font-light opacity-95 text-[#C5A059]">Products</span>
    </h2>

    {/* NEW DESCRIPTION ADDED HERE */}
    <motion.p 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl border-l border-[#C5A059]/30 pl-6"
    >
      Where advanced technology meets bespoke interior architecture. We curate 
      intelligent environments that redefine the standard of modern living, 
      crafted specifically for the discerning eye.
    </motion.p>
  </motion.div>
</div>

        {/* 3. THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32 md:gap-y-0 relative">
          
          <motion.div style={{ y: yLeft1 }} className="md:col-span-7 lg:col-span-6 z-10">
            <Link to={`/products/${Number(LIVE_PROJECTS[0].id)}`} aria-label={`View ${LIVE_PROJECTS[0].title}`} className="block">
              <ProjectCard {...LIVE_PROJECTS[0]} number="01" />
            </Link>
          </motion.div>

          <motion.div style={{ y: yRight }} className="md:col-span-6 lg:col-span-6 md:col-start-7 lg:col-start-7 md:mt-64 lg:mt-80 z-10">
            <div className="md:pl-12 lg:pl-20">
              <Link to={`/products/${Number(LIVE_PROJECTS[1].id)}`} aria-label={`View ${LIVE_PROJECTS[1].title}`} className="block">
                <ProjectCard {...LIVE_PROJECTS[1]} number="02" />
              </Link>
            </div>
          </motion.div>

          <motion.div style={{ y: yLeft2 }} className="md:col-span-7 lg:col-span-6 md:mt-40 lg:mt-0 z-10">
            <Link to={`/products/${Number(LIVE_PROJECTS[2].id)}`} aria-label={`View ${LIVE_PROJECTS[2].title}`} className="block">
              <ProjectCard {...LIVE_PROJECTS[2]} number="03" />
            </Link>
          </motion.div>
        </div>

        {/* 4. FOOTER */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-48 md:mt-72 flex justify-between items-center border-t border-white/5 pt-16"
        >
          <Link to="/services" className="flex items-center gap-12 group cursor-pointer">
             <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-white/10 group-hover:border-[#C5A059] transition-all duration-700 ease-out group-hover:scale-110" />
                <span className="absolute text-white group-hover:text-[#C5A059] transition-colors duration-300">↗</span>
             </div>
             <p className="text-2xl font-serif text-white/40 group-hover:text-white transition-all duration-500">
                See All <span className="italic text-[#C5A059]/60 group-hover:text-[#C5A059]">Products</span>
             </p>
          </Link>
        </motion.div>

      </Container>
    </section>
  );
};

export default FeaturedProjects;