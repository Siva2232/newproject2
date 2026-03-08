import React, { useRef } from "react";
import { motion, useScroll, useTransform, } from "framer-motion"; // Note: Skew logic below
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../services/ServiceCard";
import { Link } from "react-router-dom";
import servicesData from "../../data/servicesData";

const ServicesPreview = () => {
  const containerRef = useRef(null);

  // 1. Scroll-based velocity for the "Skew" effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background elements move at different speeds (Parallax)
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const sideProgressY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative py-40 bg-[#F9F9F7] overflow-hidden"
    >
      {/* 1. KINETIC BACKGROUND TYPOGRAPHY */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.04] select-none"
      >
        <h2 className="text-[25vw] font-serif font-black text-stone-900 leading-none whitespace-nowrap">
          EXPERTISE — EXPERTISE
        </h2>
      </motion.div>

      {/* 2. LEFT SIDE FLOATING NAV (Premium Indicator) */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-stone-200 hidden xl:block">
        <motion.div 
          style={{ height: sideProgressY }}
          className="w-full bg-[#C5A059] origin-top shadow-[0_0_10px_#C5A059]"
        />
        <div className="absolute -left-2 top-0 text-[9px] uppercase tracking-widest text-[#C5A059] rotate-90 origin-left mt-4 whitespace-nowrap font-bold">
          Our Specializations
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 3. SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block">
              Capabilities
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
              Signature <br /> 
              <span className="italic font-light">Works</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-xs text-stone-500 text-sm leading-relaxed border-l border-stone-200 pl-6"
          >
            Delivering bespoke interiors that bridge the gap between technical precision and artistic vision.
          </motion.p>
        </div>

        {/* 4. THE LIQUID GRID */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* We use real servicesData entries and link to detail pages */}
          {servicesData.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1, 
                delay: i * 0.15, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <Link to={`/services/${service.id}`} className="block">
                <ServiceCard 
                  title={service.title}
                  number={String(service.id).padStart(2, "0")}
                  tag={service.title.split(" ")[0]}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* 5. DYNAMIC FOOTER */}
        <div className="mt-32 pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-12">
            <div>
              <p className="text-[10px] uppercase text-stone-400 mb-2">Efficiency</p>
              <p className="text-xl font-serif">100%</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-stone-400 mb-2">Precision</p>
              <p className="text-xl font-serif">A++</p>
            </div>
          </div>
          
          <Link to="/services" className="relative">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 bg-stone-900 text-white px-10 py-5 rounded-full overflow-hidden relative"
          >
            <span className="relative z-10 uppercase text-[10px] tracking-[0.3em] font-bold">See All Services</span>
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 group-hover:rotate-45 transition-transform duration-500">↗</span>
          </motion.button>
        </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;