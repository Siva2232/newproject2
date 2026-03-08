import React from "react";
import { motion } from "framer-motion";
import { Check, Calendar, Layers, Package, ShieldCheck, Camera } from "lucide-react";
import Container from "../common/Container";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const { title, shortDescription, fullDescription, image, features = [], details } = service;

  const processSteps = [
    { title: "Consultation", icon: Calendar, desc: "Aligning vision, architectural scope, and technical requirements." },
    { title: "Design", icon: Layers, desc: "Crafting bespoke schematics and choosing premium material finishes." },
    { title: "Integration", icon: Package, desc: "Surgical-grade installation by our master technical artisans." },
    { title: "Handover", icon: ShieldCheck, desc: "Full white-glove training and 24/7 dedicated support concierge." },
  ];

  const defaultFeatures = features.length ? features : [
    "Automated Environments",
    "Discrete Engineering",
    "Heritage Craftsmanship",
    "Lifetime Support"
  ];

  const [expanded, setExpanded] = React.useState(false);


  const galleryImages = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1600607687940-477a284e5773?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200"
  ];

  const heroFallback = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000";

  return (
    <div
      className="
        relative min-h-screen text-white selection:bg-[#C5A059] selection:text-black
        bg-[#00162E]
        bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-[#003B75] via-[#002D5A] to-[#00162E]
      "
    >
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-end pb-24">
        <div className="absolute inset-0 z-0">
          <img
            src={image || heroFallback}
            className="w-full h-full object-cover brightness-[0.5] md:brightness-[0.45]"
            alt={title || "Luxury service showcase"}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            crossOrigin="anonymous"
            onError={(e) => {
              console.warn("Hero image failed to load");
              e.target.src = "https://placehold.co/1920x1080/00162E/C5A059/png?text=Image+Not+Available";
              e.target.onerror = null;
            }}
          />
          {/* Gradient overlay with lower opacity for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-transparent pointer-events-none z-0" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-[#C5A059] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">
              {title || "Service"}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-8 text-white drop-shadow-lg">
              {title}
            </h1>
            <div className="flex flex-wrap gap-6">
              <Link
                to="/contact"
                className="
                  px-10 py-4 rounded-full
                  bg-[#C5A059] text-black
                  font-bold text-[10px] uppercase tracking-widest
                  hover:bg-white hover:text-black
                  transition-all duration-500
                  shadow-lg z-10
                "
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* 2. OVERVIEW & GALLERY GRID */}
      <section className="py-32 relative">
        <Container>
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h3 className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-8">
                About {title}
              </h3>
              <h2 className="text-4xl font-serif mb-10 leading-tight">
                {shortDescription.split(" ")[0]} <span className="italic text-stone-400">Details</span>
              </h2>
              <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                {fullDescription || shortDescription ||
                  "Our approach combines the tactile beauty of traditional materials with the invisible precision of modern automation."}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
              >
                <img
                  src={galleryImages[0]}
                  className="w-full h-full object-cover"
                  alt="Gallery detail 1"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/600x750/111/aaa?text=Image+1";
                  }}
                />
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={galleryImages[1]}
                    className="w-full h-full object-cover"
                    alt="Gallery detail 2"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x600/111/aaa?text=Image+2";
                    }}
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-2xl overflow-hidden aspect-square">
                  <img
                    src={galleryImages[2]}
                    className="w-full h-full object-cover"
                    alt="Gallery detail 3"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x600/111/aaa?text=Image+3";
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="py-32 relative">
        <Container>
          <div className="flex items-center gap-4 mb-20">
            <div className="h-[1px] w-12 bg-[#C5A059]" />
            <h2 className="text-3xl font-serif">
              {title} <span className="italic opacity-70">Capabilities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {defaultFeatures.map((f, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm"
              >
                <Check className="text-[#C5A059] mb-4" size={20} />
                <h4 className="font-serif text-lg">{f}</h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. OPTIONAL DETAILED DESCRIPTION */}
      {details && (
        <section className="py-24 bg-[#001021]">
          <Container>
            <h3 className="text-[#C5A059] text-xs font-bold tracking-[0.4em] uppercase mb-4">
              More about {title}
            </h3>
            <p className="text-white/70 leading-relaxed mb-4">
              {expanded ? details : details.substring(0, 200) + (details.length > 200 ? '...' : '')}
            </p>
            {details.length > 200 && (
              <button
                onClick={() => setExpanded((e) => !e)}
                className="text-[#C5A059] underline text-sm"
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}
          </Container>
        </section>
      )}

      {/* 5. SENSORY IMAGE BREAK */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2 }}
          src={galleryImages[3]}
          className="w-full h-full object-cover brightness-50"
          alt="Atmospheric showcase"
          loading="lazy"
          onError={(e) => {
            e.target.src = "https://placehold.co/1200x675/111/aaa?text=Break+Image";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-black/60">
          <div className="text-center">
            <Camera className="text-[#C5A059] mx-auto mb-4 opacity-60" size={32} />
            <h3 className="text-3xl font-serif italic tracking-widest">Mastery in Every Frame</h3>
          </div>
        </div>
      </section>

      {/* 5. THE PROCESS */}
      <section className="py-32 relative">
        <Container>
          <div className="grid md:grid-cols-4 gap-0 border border-white/10 rounded-[40px] overflow-hidden bg-white/[0.02] backdrop-blur-sm">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="p-10 md:p-12 border-r border-white/10 last:border-0"
              >
                <span className="text-[#C5A059] font-serif text-4xl opacity-25 block mb-6">
                  0{i + 1}
                </span>
                <h4 className="text-xl font-serif mb-4">{step.title}</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="py-40 relative">
        <Container>
          <div className="relative p-16 md:p-24 rounded-[60px] overflow-hidden bg-gradient-to-br from-[#C5A059] to-[#af944d] text-black text-center shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-serif leading-none mb-6">
              Ready to <br />
              <span className="italic">Begin?</span>
            </h2>
            <div className="flex justify-center gap-4 mt-10">
              <Link
                to="/contact"
                className="
                  px-12 py-5 bg-black text-white rounded-full
                  font-bold uppercase text-[10px] tracking-widest
                  hover:bg-white hover:text-black transition-all duration-500
                "
              >
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