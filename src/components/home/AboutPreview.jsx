import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../common/Container";
import { Quote } from "lucide-react"; 

const AboutPreview = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax offsets for different elements
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yBorder = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yMission = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const yVision = useTransform(scrollYProgress, [0, 1], [40, -80]);

  const curtainVariant = {
    initial: { scaleX: 1 },
    animate: { scaleX: 0, transition: { duration: 1.4, ease: [0.77, 0, 0.175, 1] } }
  };

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-[#F5F5F3] overflow-hidden">
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: THE VISUAL ANCHOR */}
          <div className="relative lg:col-span-6 sticky top-24">
            <motion.div 
              style={{ y: yImage }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative z-10 aspect-[3/4] overflow-hidden shadow-2xl rounded-sm"
            >
              <motion.div variants={curtainVariant} className="absolute inset-0 bg-[#C5A059] z-20 origin-left" />
              <motion.img 
                initial={{ scale: 1.3 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80" 
                alt="Architectural Excellence" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
            </motion.div>

            {/* Floating Decorative Frame */}
            <motion.div 
              style={{ y: yBorder }}
              className="absolute top-12 -left-8 w-full h-full border-[1px] border-stone-300 z-0 hidden lg:block"
            />
            
            {/* Project Counter Ornament */}
            <div className="absolute -bottom-6 -left-6 bg-[#C5A059] p-8 hidden md:block z-30 shadow-xl">
               <p className="text-white font-serif text-4xl mb-1">50+</p>
               <p className="text-white/80 text-[10px] uppercase tracking-widest font-bold">Years Legacy</p>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTENT BLOCKS */}
          <div className="lg:col-span-6 lg:pt-12 space-y-12">
            
            <header className="mb-16">
               <motion.span 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="text-[#C5A059] uppercase text-xs font-bold tracking-[0.5em] mb-4 block"
               >
                 Our Foundation
               </motion.span>
               <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
                 Crafting the <br /> <span className="italic font-light text-stone-500 underline decoration-[#C5A059]/30 underline-offset-8">Future</span>.
               </h2>
            </header>

            {/* Our Mission */}
            <motion.div 
              style={{ y: yMission }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-white p-10 md:p-14 shadow-[40px_40px_80px_-40px_rgba(0,0,0,0.1)] transition-transform duration-500"
            >
              <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-[#C5A059] transition-all duration-700" />
              <Quote className="text-stone-100 absolute top-8 right-8 w-16 h-16 -z-0" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif text-stone-900 mb-6 flex items-center gap-4">
                  <span className="text-[#C5A059] text-sm font-sans font-bold tracking-tighter">01.</span>
                  Our Mission
                </h3>
                <p className="text-stone-500 font-light leading-[1.8] text-lg">
                  At Hometech Solutions, our mission is to deliver complete construction, interior, and smart technology solutions that enhance the functionality, security, and beauty of every space. We provide end-to-end services—from civil works and interior design to automation systems—ensuring premium results through one trusted partner.
                </p>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div 
              style={{ y: yVision }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative bg-stone-900 p-10 md:p-14 shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-0 h-[2px] group-hover:w-full bg-[#C5A059] transition-all duration-700" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-6 flex items-center gap-4">
                  <span className="text-[#C5A059] text-sm font-sans font-bold tracking-tighter">02.</span>
                  Our Vision
                </h3>
                <p className="text-stone-400 font-light leading-[1.8] text-lg">
                  To become one of the most trusted integrated home solutions brands across Bharath. Backed by the 50-year engineering legacy of Kavitha Engineerings, we aim to modernize homes and commercial spaces by creating smart, sustainable, and beautifully designed environments while maintaining the highest standards of quality and innovation.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;