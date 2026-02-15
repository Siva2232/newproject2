import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import projectsData from "../data/projectsData";
import Container from "../components/common/Container";
// Corrected imports (Case-sensitive and no duplicates)
import { 
  ArrowUpRight, 
  Maximize2, 
  MoveDown, 
  Shield, 
  Cpu, 
  Lightbulb 
} from "lucide-react";
const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  if (!project) return (
    <div className="h-screen flex items-center justify-center bg-[#0A0A0A] text-white">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-serif italic text-2xl tracking-widest">
        Project Archive Not Found.
      </motion.h1>
    </div>
  );

  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-[#C5A059] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
          <img src={project?.images?.[0] || "https://images.unsplash.com/photo-1600607687940-477a284e5773?q=80&w=2070"} alt={project.title} className="w-full h-full object-cover brightness-[0.7]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0A0A0A]" />
        </motion.div>
        <Container className="relative z-10 w-full">
          <motion.div style={{ opacity: titleOpacity, y: titleY }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold">Case Study vol. 0{project.id}</span>
            </div>
            <h1 className="text-[12vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter mb-10">
              {project.title.split(' ')[0]} <br />
              <span className="italic font-light text-[#C5A059]/80 ml-[0.5em]">{project.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <div className="flex items-center gap-3 text-white/40">
              <MoveDown size={20} className="animate-bounce" />
              <span className="text-[9px] uppercase tracking-[0.3em]">Explore the Archive</span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. SPECIFICATION BAR */}
      <div className="relative z-40 -mt-24">
        <Container>
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 p-8 md:p-12 gap-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
            {[{ label: "Location", value: project.location || "California, US" }, { label: "Year", value: project.year || "2025" }, { label: "Typology", value: project.category || "Smart Residential" }, { label: "Integration", value: "Full Automation" }].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">{stat.label}</span>
                <span className="font-serif text-lg md:text-xl text-white/90">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </Container>
      </div>

      {/* 3. CORE FEATURES SECTION (NEW) */}
      <section className="py-40 bg-[#0A0A0A]">
        <Container>
          <div className="mb-20">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold mb-4">Core Implementation</h4>
            <h2 className="text-4xl md:text-6xl font-serif">Technological <span className="italic font-light opacity-60">Ecosystem</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu size={24} />, title: "Invisible Control", desc: "Centralized neuro-processing hub that manages climate, lighting, and media without a single visible wire." },
              { icon: <Shield size={24} />, title: "Zero-Trust Security", desc: "Biometric access points and AI-driven perimeter surveillance integrated directly into the aesthetic stone-work." },
              { icon: <Lightbulb size={24} />, title: "Circadian Lighting", desc: "Lighting systems that mirror natural solar patterns to enhance wellbeing and highlight architectural textures." }
            ].map((feature, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-10 border border-white/5 bg-white/[0.02] rounded-3xl group transition-all duration-500 hover:border-[#C5A059]/30">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mb-8 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. FULL-WIDTH SENSORY IMAGE (NEW) */}
     {/* 4. FULL-WIDTH SENSORY IMAGE (FIXED LINK) */}
<section className="h-[70vh] w-full overflow-hidden relative">
  <motion.img 
    initial={{ scale: 1.3 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 2.5, ease: "easeOut" }}
    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" 
    className="w-full h-full object-cover brightness-75" 
    alt="Architectural Masterpiece" 
    onError={(e) => {
      // Fallback if the link ever breaks again
      e.target.src = "https://images.unsplash.com/photo-1600607687940-477a284e5773?q=80&w=2070";
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
</section>

      {/* 5. NARRATIVE & STAGGERED GALLERY */}
      <section className="py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
              <h2 className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-8">The Narrative</h2>
              <p className="text-3xl font-serif leading-tight text-white mb-10 italic">"The invisible architecture of data."</p>
              <p className="text-lg text-white/50 font-light leading-relaxed mb-12">{project.description}</p>
              
              {/* Vertical Process Steps */}
              <div className="space-y-8 border-l border-white/10 pl-8 ml-2">
                {[
                  { step: "01", title: "Conceptual Audit", text: "Mapping the digital footprint of the client's lifestyle." },
                  { step: "02", title: "Structural Weaving", text: "Integrating hardware into the core foundation." },
                  { step: "03", title: "Atmospheric Tuning", text: "Fine-tuning the sensory response of the environment." }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#C5A059]" />
                    <span className="block text-[10px] text-[#C5A059] font-bold mb-1 tracking-widest">{item.step}</span>
                    <h4 className="text-white font-serif text-lg mb-1">{item.title}</h4>
                    <p className="text-white/30 text-xs font-light">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-32">
              {["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974", "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070"].map((img, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-video">
                  <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Detail" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white scale-50 group-hover:scale-100 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. NEXT PROJECT PORTAL */}
      <footer className="py-60 relative overflow-hidden bg-[#080808] border-t border-white/5">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <h2 className="text-[30vw] font-black text-white whitespace-nowrap leading-none select-none -translate-x-1/4">NEXT PROJECT</h2>
         </div>
         <Container className="relative z-10 text-center">
            <Link to={`/projects/${parseInt(id) + 1}`} className="group inline-block">
               <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A059] mb-8 block">Continue Discovery</span>
               <div className="flex items-center justify-center gap-6">
                  <h3 className="text-6xl md:text-9xl font-serif italic text-white/30 group-hover:text-white transition-all duration-700">Next Case</h3>
                  <ArrowUpRight size={80} strokeWidth={1} className="text-[#C5A059] group-hover:rotate-45 transition-transform duration-700 hidden md:block" />
               </div>
            </Link>
         </Container>
      </footer>
    </main>
  );
};

export default ProjectDetails;