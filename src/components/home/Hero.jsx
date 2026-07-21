import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    label: "Services",
    title: "Where Every Building Solution Comes Together",
    before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80",
    after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80",
    gallery: [], // empty as per your request
    desc: "Complete Residential and Commercial design,construction,Renovation & smart security style All under one roof.",
    hasBeforeAfter: true
  },
  {
    id: "02",
    label: "Products",
    title: "Premimum Materials for Modern Interiors",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80"
    ],
    desc: "Discover high-quality interior and architectural materials designed to enhance the beauty, durability, and functionality of your spaces",
    hasBeforeAfter: false
  },
  {
    id: "03",
    label: "Home Automation",
    title: "Smart Livings Starts At Home",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80"
    ],
    desc: "Experience the future of living with intelligent home automation systems that bring comfort, security, and control right to your fingertips.",
    hasBeforeAfter: false
  }
];

const Hero = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const [heroMode, setHeroMode] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Auto-rotate style variation
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroMode((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate gallery images for services & products
  useEffect(() => {
    if (!activeProject.hasBeforeAfter && activeProject.gallery.length > 0) {
      const interval = setInterval(() => {
        setGalleryIndex((prev) => (prev + 1) % activeProject.gallery.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeProject]);

  // Reset gallery index on project change
  useEffect(() => {
    setGalleryIndex(0);
  }, [activeProject]);

  // Before/after slider setup
  const dragX = useMotionValue(50);
  const smoothDragX = useSpring(dragX, { stiffness: 400, damping: 40 });
  const cursorLeft = useTransform(smoothDragX, (v) => `${v}%`);
  const clipPathValue = useTransform(smoothDragX, (v) => `inset(0 ${100 - v}% 0 0)`);

  useEffect(() => {
    if (activeProject.hasBeforeAfter) {
      dragX.set(50);
    }
  }, [activeProject, dragX]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const bgParallaxX = useTransform(smoothMouseX, [-500, 500], ["-3%", "3%"]);
  const bgParallaxY = useTransform(smoothMouseY, [-500, 500], ["-3%", "3%"]);

  const handleMouseMove = (e) => {
    const moveX = e.clientX - window.innerWidth / 2;
    const moveY = e.clientY - window.innerHeight / 2;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const handleDrag = (event, info) => {
    const container = document.getElementById("hero-viewport")?.getBoundingClientRect();
    if (!container) return;
    const relativeX = ((info.point.x - container.left) / container.width) * 100;
    dragX.set(Math.min(Math.max(relativeX, 0), 100));
  };

  const showSlider = activeProject.hasBeforeAfter;
  const mainImage = showSlider
    ? activeProject.after
    : activeProject.gallery[galleryIndex] || "";

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-[100dvh] w-full bg-[#0A0A0A] flex flex-col overflow-hidden font-sans"
    >
      <div id="hero-viewport" className="relative flex-grow overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeProject.id}-${galleryIndex}-${heroMode}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: showSlider ? 1 : 1.4 }}
            className="absolute inset-0"
          >
            {showSlider ? (
              <>
                <motion.div
                  className="absolute inset-[-5%] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${activeProject.after})`,
                    x: bgParallaxX,
                    y: bgParallaxY,
                    scale: 1.1
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                </motion.div>

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
              </>
            ) : (
              <motion.img
                src={mainImage}
                className="absolute inset-[-5%] w-[110%] h-[110%] object-cover"
                style={{ x: bgParallaxX, y: bgParallaxY }}
                animate={{ scale: heroMode === 0 ? [1, 1.08] : [1.05, 1.12] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Text content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-5 sm:px-8 md:px-24 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { staggerChildren: 0.15 } }}
              exit={{ opacity: 0 }}
            >
              {/* This is now the main section name */}
              <span className="text-[#C5A059] font-medium tracking-[0.5em] text-sm md:text-base uppercase mb-3 md:mb-5 block">
                {activeProject.label}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-7xl font-serif text-white mb-4 md:mb-6 leading-[1] md:leading-[0.9] tracking-tighter italic">
                {activeProject.title}
              </h1>

              <p className="max-w-[85%] sm:max-w-md text-stone-400 text-sm sm:text-base md:text-2xl font-light leading-relaxed tracking-wide border-l border-[#C5A059]/50 pl-4 sm:pl-6">
                {activeProject.desc}
              </p>

              {/* Gallery thumbnails (only shown if there are images) */}
              {activeProject.gallery.length > 0 && (
                <motion.div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10">
                  {activeProject.gallery.map((img, idx) => (
                    <motion.img
                      key={idx}
                      src={img}
                      className={`w-16 sm:w-24 md:w-28 h-12 sm:h-16 md:h-20 object-cover rounded-md transition-all duration-300 ${
                        !showSlider && galleryIndex === idx
                          ? "opacity-100 ring-2 ring-[#C5A059]/70 scale-105 shadow-lg"
                          : "opacity-65 hover:opacity-90 hover:scale-105"
                      }`}
                      alt={`Gallery image ${idx + 1}`}
                      whileHover={{ scale: 1.08 }}
                    />
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Drag handle - only for first section */}
        {showSlider && (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={handleDrag}
            style={{ left: cursorLeft }}
            className="absolute inset-y-0 w-0 z-40 cursor-ew-resize flex items-center justify-center"
          >
            <div className="group relative flex items-center justify-center">
              <div className="absolute h-16 w-16 md:h-24 md:w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all group-hover:scale-125" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="h-10 w-10 md:h-14 md:w-14 rounded-full border border-[#C5A059] bg-[#0A0A0A] flex flex-col items-center justify-center gap-1 shadow-[0_0_30px_rgba(197,160,89,0.3)] z-10"
              >
                <div className="w-4 h-[1px] bg-white" />
                <div className="w-4 h-[1px] bg-white" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom selector - shows project.title */}
      <div className="h-28 sm:h-32 md:h-40 bg-white flex items-center px-4 sm:px-6 md:px-12 gap-4 sm:gap-6 overflow-x-auto no-scrollbar relative z-[60] border-t border-white/5">
        {PROJECTS.map((project) => (
          <button
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group relative flex-shrink-0 flex flex-col items-start"
          >
            <div
              className={`relative transition-all duration-700 overflow-hidden ${
                activeProject.id === project.id
                  ? "w-36 sm:w-48 md:w-72 h-16 sm:h-20 md:h-24 opacity-100 shadow-xl"
                  : "w-14 sm:w-16 md:w-24 h-14 sm:h-16 md:h-20 opacity-35 grayscale"
              }`}
            >
              <img
                src={project.hasBeforeAfter ? project.after : project.gallery[0] || project.after}
                className="w-full h-full object-cover"
                alt={project.title}
              />
            </div>
            <span
              className={`mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold ${
                activeProject.id === project.id ? "text-[#C5A059]" : "text-stone-600"
              }`}
            >
              {project.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;