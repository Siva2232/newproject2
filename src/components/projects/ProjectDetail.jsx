import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";

const ProjectDetail = ({ project }) => {
  const { scrollYProgress } = useScroll();
  
  // Parallax for the hero image
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  // Mock data if no project prop is provided
  const data = project || {
    title: "Aura Residence",
    category: "Coastal Minimalist",
    year: "2025",
    location: "Malibu, California",
    description: "A sanctuary designed to bridge the gap between rugged coastal cliffs and refined modern living. We utilized raw concrete, bleached oak, and floor-to-ceiling glass to capture the shifting Pacific light.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80"
    ]
  };

  return (
    <div className="bg-[#F9F9F7] min-h-screen pb-32 overflow-hidden">
      
      {/* 1. IMMERSIVE HERO */}
      <section className="relative h-[90dvh] w-full overflow-hidden bg-stone-900">
        <motion.div style={{ scale, opacity }} className="absolute inset-0">
          <img 
            src={data.images[0]} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <Container className="relative h-full flex flex-col justify-end pb-20 z-10">
          <motion.div style={{ y: textY }}>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#C5A059] uppercase tracking-[0.5em] text-xs font-bold mb-4 block"
            >
              {data.category} — {data.location}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-6xl md:text-9xl font-serif text-white leading-none tracking-tighter"
            >
              {data.title.split(' ')[0]} <br />
              <span className="italic font-light ml-8 md:ml-24">{data.title.split(' ')[1]}</span>
            </motion.h1>
          </motion.div>
        </Container>
      </section>

      {/* 2. PROJECT METADATA BAR */}
      <div className="border-b border-stone-200 bg-white sticky top-0 z-30">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 py-8 gap-8">
            {[
              { label: "Location", value: data.location },
              { label: "Year", value: data.year },
              { label: "Client", value: "Private" },
              { label: "Area", value: "4,500 sq.ft" }
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{stat.label}</p>
                <p className="font-serif text-stone-900">{stat.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* 3. NARRATIVE SECTION */}
      <section className="py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl font-serif text-stone-900 mb-8 leading-tight">
                The <span className="italic">Vision</span> Behind <br /> the Sanctuary
              </h2>
              <div className="w-20 h-[1px] bg-[#C5A059] mb-8" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xl text-stone-600 font-light leading-relaxed mb-8">
                {data.description}
              </p>
              <p className="text-stone-500 font-light leading-relaxed">
                Every material was selected to age gracefully with the salt air. The interior palette remains muted to allow the changing colors of the horizon to be the primary art piece within the home.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. ASYMMETRIC MASONRY GALLERY */}
      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Main Feature Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 aspect-[16/9] overflow-hidden"
            >
              <img src={data.images[1]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Detail" />
            </motion.div>

            {/* Side Inset Image */}
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 aspect-[3/4] overflow-hidden md:mt-32"
            >
              <img src={data.images[2]} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Detail" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 5. NEXT PROJECT NAVIGATION */}
      <footer className="py-20 border-t border-stone-200">
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6">Next Project</span>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-5xl md:text-7xl font-serif text-stone-900 hover:text-[#C5A059] transition-colors cursor-pointer"
            >
              Obsidian Loft ↗
            </motion.h3>
          </div>
        </Container>
      </footer>

    </div>
  );
};

export default ProjectDetail;