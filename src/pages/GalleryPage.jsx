import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, MoveHorizontal, Split } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    title: "Grand Penthouse", 
    client: "The Sterling Group", 
    category: "Automation", 
    size: "large", 
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
    beforeImg: "https://images.unsplash.com/photo-1512918766671-ed6a07be061c?q=80&w=2070", 
    isComparison: true 
  },
  { 
    id: 2, 
    title: "Modern Cinema", 
    client: "Private Residence", 
    category: "Theater", 
    size: "small", 
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070",
    beforeImg: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074",
    isComparison: true
  },
  { 
    id: 3, 
    title: "Intelligent Lighting", 
    client: "Lumina Villas", 
    category: "Lighting", 
    size: "small", 
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070" ,
    beforeImg: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2070", // Darker, non-automated exterior/hall

  },
  { 
    id: 4, 
    title: "Corporate Hub", 
    client: "NexGen Tech", 
    category: "Automation", 
    size: "medium", 
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2072",
    beforeImg: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070",
    isComparison: true
  },
  { 
    id: 5, 
    title: "Acoustic Lounge", 
    client: "Echo Estates", 
    category: "Theater", 
    size: "large", 
    img: "https://images.unsplash.com/photo-1545022388-43a762e088b0?q=80&w=1974",
    beforeImg: "https://images.unsplash.com/photo-1449156001437-3a16d1daae39?q=80&w=2070", // Raw wooden interior/structure
    isComparison: true
  },
  { 
    id: 6, 
    title: "Safe Haven", 
    client: "Guardian Heights", 
    category: "Security", 
    size: "medium", 
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070",
    beforeImg: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2070", // Darker, non-automated exterior/hall
    isComparison: true
  },
];

const categories = ["All", "Automation", "Theater", "Lighting", "Security"];

const ComparisonSlider = ({ item }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  // The Fix: Use a global listener so if the mouse leaves the box while down, it stays active
  // and when you release anywhere, it stops.
  const handleMove = (e) => {
    if (!isDragging && e.type !== 'touchmove') return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = ((clientX - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const handleGlobalUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("touchend", handleGlobalUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchend", handleGlobalUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none touch-none cursor-ew-resize group/slider"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseDown={(e) => {
        e.preventDefault(); // Prevents default browser image drag
        setIsDragging(true);
      }}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image */}
      <img 
        src={item.img} 
        draggable="false"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        alt="After" 
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-[#C5A059] z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={item.beforeImg} 
          draggable="false"
          className="absolute inset-0 h-full object-cover grayscale-[0.3] brightness-75 pointer-events-none" 
          alt="Before" 
          style={{ width: containerRef.current?.offsetWidth || '100vw', maxWidth: 'none' }} 
        />
        <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-[#00162E]/90 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] tracking-[0.2em] uppercase border border-white/10 text-white/70">
          Initial State
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center z-20" 
        style={{ left: `${sliderPos}%` }}
      >
        <div className="relative flex items-center justify-center">
            <div className={`absolute w-12 h-12 rounded-full border border-[#C5A059]/50 ${isDragging ? 'scale-150 opacity-0' : 'animate-ping'}`} />
            <div className={`w-10 h-10 -ml-5 rounded-full bg-[#C5A059] flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.6)] text-black transition-transform duration-300 ${isDragging ? 'scale-125' : ''}`}>
              <MoveHorizontal size={18} />
            </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 bg-[#C5A059] text-black px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase z-20">
        <Split size={12} />
        Live Transformation
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <div className="min-h-screen bg-[#00162E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E] text-white pt-28 md:pt-32 pb-20 px-5 sm:px-12 lg:px-24 overflow-hidden">
      
      <div className="fixed inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BRANDED HEADER */}
        <div className="mb-14 md:mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent" />
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold">Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white leading-tight mb-6 md:mb-8 tracking-tighter">
              Our <span className="italic font-light opacity-95 text-[#C5A059]">Legacy</span>
            </h1>
            <p className="text-base md:text-lg text-white/50 font-light max-w-xl border-l border-[#C5A059]/30 pl-4 md:pl-6 leading-relaxed">
              Explore the transformations where intelligent engineering creates seamless architectural elegance.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-2 md:gap-4 mt-10 md:mt-16 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 md:px-8 md:py-3 rounded-full text-[10px] tracking-[0.2em] md:tracking-[0.4em] font-bold transition-all border ${
                  filter === cat 
                  ? "bg-[#C5A059] text-black border-transparent shadow-[0_10px_25px_rgba(197,160,89,0.3)]" 
                  : "border-white/10 text-white/40 hover:border-[#C5A059]/50 hover:text-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`relative rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-[#001A33]/40 backdrop-blur-md border border-white/5 h-[380px] sm:h-[450px] md:h-[500px] group
                  ${item.size === 'large' ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                {item.isComparison ? (
                  <ComparisonSlider item={item} />
                ) : (
                  <div className="relative w-full h-full">
                    <img 
                        src={item.img} 
                        className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                        alt={item.title} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00162E] via-transparent to-transparent" />
                  </div>
                )}

                {/* INFO OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 pointer-events-none z-30">
                  <p className="text-[#C5A059] text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold mb-2 md:mb-3">{item.client}</p>
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-3 md:mb-4 tracking-tight">{item.title}</h3>
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-10 bg-[#C5A059]/40" />
                    <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase">{item.category}</span>
                  </div>
                </div>

                <div className="hidden md:block absolute top-10 right-10 p-4 rounded-full bg-[#00162E]/80 backdrop-blur-md border border-[#C5A059]/30 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-30">
                   <Maximize2 size={18} className="text-[#C5A059]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;