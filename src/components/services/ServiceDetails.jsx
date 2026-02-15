import React from "react";
import { motion } from "framer-motion";
import { Check, Calendar, Layers, Package, ArrowRight, ShieldCheck, Zap, Camera } from "lucide-react";
import Container from "../common/Container";
import { Link } from "react-router-dom";

const ServiceDetails = ({ title, description, image, features = [] }) => {
  const processSteps = [
    { title: "Consultation", icon: Calendar, desc: "Aligning vision, architectural scope, and technical requirements." },
    { title: "Design", icon: Layers, desc: "Crafting bespoke schematics and choosing premium material finishes." },
    { icon: Package, title: "Integration", desc: "Surgical-grade installation by our master technical artisans." },
    { icon: ShieldCheck, title: "Handover", desc: "Full white-glove training and 24/7 dedicated support concierge." },
  ];

  const defaultFeatures = features.length ? features : ["Automated Environments", "Discrete Engineering", "Heritage Craftsmanship", "Lifetime Support"];

  // High-fidelity image links for the gallery
  const galleryImages = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000",
    "https://images.unsplash.com/photo-1600607687940-477a284e5773?q=80&w=1000",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000",
    "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000"
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen selection:bg-[#C5A059] selection:text-black">
      
      {/* 1. HERO SECTION (Image 1) */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-end pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={image || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"} 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt={title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
        </div>
        
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Premium Service Offering</span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8">
              {title?.split(' ')[0]} <br />
              <span className="italic font-light opacity-80">{title?.split(' ').slice(1).join(' ')}</span>
            </h1>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="px-10 py-4 rounded-full bg-[#C5A059] text-black font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all duration-500">
                Start a Project
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. OVERVIEW & GALLERY GRID (Images 2, 3, 4) */}
      <section className="py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-8">Visual Excellence</h3>
              <h2 className="text-4xl font-serif mb-10 leading-tight">Crafting spaces that <span className="italic text-stone-500">resonate.</span></h2>
              <p className="text-white/50 text-lg font-light leading-relaxed mb-8">
                {description || "Our approach combines the tactile beauty of traditional materials with the invisible precision of modern automation."}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img src={galleryImages[0]} className="w-full h-full object-cover" alt="Detail 1" />
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden aspect-square">
                  <img src={galleryImages[1]} className="w-full h-full object-cover" alt="Detail 2" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden aspect-square">
                  <img src={galleryImages[2]} className="w-full h-full object-cover" alt="Detail 3" />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="py-32 bg-[#080808]">
        <Container>
          <div className="flex items-center gap-4 mb-20">
             <div className="h-[1px] w-12 bg-[#C5A059]" />
             <h2 className="text-3xl font-serif">Service <span className="italic opacity-50">Capabilities</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {defaultFeatures.map((f, i) => (
              <div key={i} className="p-8 border border-white/5 rounded-2xl bg-white/[0.01]">
                <Check className="text-[#C5A059] mb-4" size={20} />
                <h4 className="font-serif text-lg">{f}</h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SENSORY IMAGE BREAK (Image 5) */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={galleryImages[3]} 
          className="w-full h-full object-cover brightness-50" 
          alt="Atmospheric" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
                <Camera className="text-[#C5A059] mx-auto mb-4 opacity-50" size={32} />
                <h3 className="text-3xl font-serif italic tracking-widest">Mastery in Every Frame</h3>
            </div>
        </div>
      </section>

      {/* 5. THE PROCESS */}
      <section className="py-32">
        <Container>
          <div className="grid md:grid-cols-4 gap-0 border border-white/5 rounded-[40px] overflow-hidden bg-white/[0.01]">
            {processSteps.map((step, i) => (
              <div key={i} className="p-12 border-r border-white/5 last:border-0">
                <span className="text-[#C5A059] font-serif text-4xl opacity-20 block mb-8">0{i + 1}</span>
                <h4 className="text-xl font-serif mb-4">{step.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-40">
        <Container>
          <div className="relative p-16 md:p-24 rounded-[60px] overflow-hidden bg-[#C5A059] text-black text-center">
             <h2 className="text-5xl md:text-7xl font-serif leading-none mb-6">Ready to <br/><span className="italic">Begin?</span></h2>
             <div className="flex justify-center gap-4 mt-10">
                <Link to="/contact" className="px-12 py-5 bg-black text-white rounded-full font-bold uppercase text-[10px] tracking-widest">
                  Get a Proposal
                </Link>
             </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServiceDetails;