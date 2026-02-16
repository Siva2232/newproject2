import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const PROJECTS = [
  { id: "01", title: "Modern Loft", before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80", after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80", desc: "Industrial raw to velvet warmth." },
  { id: "02", title: "Urban Office", before: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80", after: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80", desc: "Workspaces that inspire." },
  { id: "03", title: "Glass House", before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80", after: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80", desc: "Minimalist outdoor integration." },
];

const Hero = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  
  // Before/After Slider Logic
  const dragX = useMotionValue(50);
  const smoothDragX = useSpring(dragX, { stiffness: 400, damping: 40 });
  const cursorLeft = useTransform(smoothDragX, (v) => `${v}%`);
  const clipPathValue = useTransform(smoothDragX, (v) => `inset(0 ${100 - v}% 0 0)`);

  // Mouse Parallax Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const bgParallaxX = useTransform(smoothMouseX, [-500, 500], ["-2%", "2%"]);
  const bgParallaxY = useTransform(smoothMouseY, [-500, 500], ["-2%", "2%"]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const handleDrag = (event, info) => {
    const container = document.getElementById('hero-viewport').getBoundingClientRect();
    const relativeX = ((info.point.x - container.left) / container.width) * 100;
    dragX.set(Math.min(Math.max(relativeX, 0), 100));
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-[100dvh] w-full bg-[#0A0A0A] flex flex-col overflow-hidden font-sans"
    >
      {/* 1. Main Viewport */}
      <div id="hero-viewport" className="relative flex-grow overflow-hidden touch-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* After Image with Mouse Parallax */}
            <motion.div 
              className="absolute inset-[-5%] bg-cover bg-center" 
              style={{ backgroundImage: `url(${activeProject.after})`, x: bgParallaxX, y: bgParallaxY, scale: 1.1 }}
            >
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </motion.div>
            
            {/* Before Image with Mouse Parallax (Clipped) */}
            <motion.div 
              className="absolute inset-[-5%] bg-cover bg-center z-10"
              style={{ 
                backgroundImage: `url(${activeProject.before})`, 
                clipPath: clipPathValue,
                x: bgParallaxX, 
                y: bgParallaxY, 
                scale: 1.1 
              }}
            >
               <div className="absolute inset-0 bg-black/40" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-24 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id + "content"}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.div variants={{ initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 } }}>
                <span className="text-[#C5A059] font-medium tracking-[0.5em] text-xs md:text-sm uppercase mb-4 block">
                  Project {activeProject.id}
                </span>
              </motion.div>

              {/* NEXT LEVEL: Masked Heading Reveal */}
              <div className="overflow-hidden py-2">
                <motion.h1 
                  variants={{
                    initial: { y: "100%" },
                    animate: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-6 leading-[0.85] tracking-tighter italic"
                >
                  {activeProject.title.split(' ')[0]} <br/>
                  <span className="not-italic font-light ml-4 md:ml-12">{activeProject.title.split(' ')[1]}</span>
                </motion.h1>
              </div>

              <motion.p 
                variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } }}
                className="max-w-md text-stone-400 text-sm md:text-base font-light leading-relaxed tracking-wide border-l border-[#C5A059]/50 pl-6"
              >
                {activeProject.desc}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Premium Slider Handle */}
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={handleDrag}
          style={{ left: cursorLeft }}
          className="absolute inset-y-0 w-0 z-40 cursor-ew-resize flex items-center justify-center"
        >
          <div className="group relative flex items-center justify-center">
            <div className="absolute h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all group-hover:scale-125" />
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="h-14 w-14 rounded-full border border-[#C5A059] bg-[#0A0A0A] flex flex-col items-center justify-center gap-1 shadow-[0_0_30px_rgba(197,160,89,0.3)] z-10"
            >
              <div className="w-4 h-[1px] bg-white" />
              <div className="w-4 h-[1px] bg-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 2. Responsive Bottom Gallery Bar */}
<div className="h-32 md:h-40 bg-white flex items-center px-6 md:px-12 gap-6 overflow-x-auto no-scrollbar relative z-[60] border-t border-white/5">
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group relative flex-shrink-0 flex flex-col items-start"
          >
            <div className={`relative transition-all duration-700 ease-[0.22, 1, 0.36, 1] overflow-hidden ${
              activeProject.id === project.id ? "w-48 md:w-72 h-20 md:h-24 opacity-100" : "w-16 md:w-24 h-16 md:h-20 opacity-30 grayscale hover:grayscale-0"
            }`}>
              <img src={project.after} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" alt="" />
              {activeProject.id === project.id && (
                <motion.div 
                  layoutId="activeBorder" 
                  className="absolute inset-0 border-2 border-[#C5A059] z-10" 
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
            <span className={`mt-2 text-[9px] uppercase tracking-[0.2em] font-bold ${
              activeProject.id === project.id ? "text-[#C5A059]" : "text-stone-600"
            }`}>
              {project.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;