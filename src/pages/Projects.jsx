import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Plus, Minus, Star, Award, Shield, Globe } from "lucide-react";
import Container from "../components/common/Container";
import ProjectGrid from "../components/projects/ProjectGrid";
import ProjectFilter from "../components/projects/ProjectFilter";
import projectsData from "../data/projectsData";

const Projects = () => {
  const [active, setActive] = useState("All");
  const [activeFaq, setActiveFaq] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgTextX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const categories = useMemo(() => ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))], []);
  const filteredProjects = useMemo(() => (active === "All" ? projectsData : projectsData.filter((p) => p.category === active)), [active]);

  return (
    <div ref={containerRef} className="bg-[#00162E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E] text-white overflow-hidden">
      
      {/* SECTION 1: FILTERABLE PORTFOLIO */}
      <section className="relative py-32">
        <motion.div style={{ x: bgTextX }} className="absolute top-40 left-0 whitespace-nowrap opacity-[0.03] pointer-events-none">
          <h2 className="text-[25vw] font-black tracking-tighter">STUDIO DESIGN STUDIO DESIGN</h2>
        </motion.div>
        
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            {/* REPLACED SECTIONTITLE WITH SIGNATURE DESIGN */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent" />
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold">Portfolio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] mb-6 tracking-tighter">
                Our <span className="italic font-light opacity-95 text-[#C5A059]">Projects</span>
              </h2>
              <p className="text-lg text-white/50 font-light max-w-md border-l border-[#C5A059]/30 pl-6">
                A curated selection of our finest architectural and tech integrations.
              </p>
            </motion.div>

            <div className="bg-[#C5A059]/10 backdrop-blur-xl p-2 rounded-2xl border border-[#C5A059]/20 self-start lg:self-end">
              <ProjectFilter categories={categories} active={active} setActive={setActive} />
            </div>
          </div>

          <motion.div layout>
            <AnimatePresence mode="popLayout">
              <ProjectGrid projects={filteredProjects} />
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* SECTION 2: PROJECT STATISTICS */}
      <section className="py-20 bg-[#001021] border-y border-[#C5A059]/10">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award className="text-[#C5A059]" />, val: "24+", label: "Design Awards" },
              { icon: <Globe className="text-[#C5A059]" />, val: "12", label: "Countries Served" },
              { icon: <Shield className="text-[#C5A059]" />, val: "100%", label: "Privacy Rating" },
              { icon: <Star className="text-[#C5A059]" />, val: "4.9/5", label: "Client Satisfaction" },
            ].map((stat, i) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} key={i} className="flex flex-col items-center">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-light text-white mb-1">{stat.val}</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3: THE EXECUTION PIPELINE */}
      <section className="py-32 relative">
        <Container>
          <div className="max-w-3xl mb-20">
            <span className="text-[#C5A059] text-xs font-bold tracking-[0.5em] uppercase mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-6xl font-light">From Blueprint to <span className="italic font-serif text-[#C5A059]">Brilliance</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#C5A059]/10 hidden md:block" />
            
            {[
              { title: "Planning & Design", desc: "We begin by understanding your vision, requirements, and space to create a well-planned design that balances functionality, aesthetics, and modern innovation." },
              { title: "Precision Execution", desc: "Our skilled team brings the plan to life using quality materials, advanced techniques, and careful attention to every detail during installation and construction." },
              { title: "Final Perfection & Handover", desc: "Before completion, every project goes through quality checks to ensure flawless finishing, durability, and complete customer satisfaction." }
            ].map((step, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="relative z-10 p-8 bg-[#001A33]/50 backdrop-blur-sm border border-white/5 group">
                <div className="w-12 h-12 rounded-full border border-[#C5A059] flex items-center justify-center mb-8 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                <p className="text-white/40 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: LUXURY FAQS */}
      <section className="py-32 bg-[#001021]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">Frequently <br /> <span className="text-[#C5A059]">Asked</span> Questions</h2>
              <p className="text-white/40 max-w-sm">Everything you need to know about starting your next-level project with Home Tech Solutions.</p>
              {/* <motion.button className="mt-12 flex items-center gap-4 text-[#C5A059] text-xs font-bold tracking-widest uppercase group">
                Download PDF Portfolio <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button> */}
            </div>
            
            <div className="space-y-4">
              {[
                { q: " ⁠Do you provide complete end-to-end project support?", a: "Yes. Hometech Solutions provides complete end-to-end support for your projects—from planning and material selection to installation and final finishing. Our experienced team ensures every stage of the work is handled professionally so clients receive a smooth, hassle-free experience." },
                { q: "⁠⁠Can smart home automation be installed in existing homes?", a: "Absolutely. Smart home automation systems can be integrated into both new constructions and existing homes. Our team evaluates your current setup and installs suitable automation solutions that allow you to control lighting, security, gates, and other systems easily through smart devices." },
                { q: "Do you provide customized solutions based on client requirements?", a: "Yes. At Hometech Solutions, every project is tailored to the client’s needs and preferences. Whether it is interior materials, smart home automation, renovation work, or structural installations, our team carefully understands your requirements and delivers customized solutions that match your space, design vision, and budget." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-white/5 overflow-hidden">
                  <button onClick={() => setActiveFaq(i)} className="w-full py-6 flex items-center justify-between text-left">
                    <span className="text-lg font-light transition-colors duration-300" style={{ color: activeFaq === i ? '#C5A059' : 'white' }}>{faq.q}</span>
                    {activeFaq === i ? <Minus size={20} className="text-[#C5A059]" /> : <Plus size={20} />}
                  </button>
                  <motion.div initial={false} animate={{ height: activeFaq === i ? "auto" : 0 }} className="overflow-hidden">
                    <p className="pb-6 text-white/50 leading-relaxed">{faq.a}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-40 relative">
        <div className="absolute inset-0 bg-[#C5A059]/10 blur-[150px] rounded-full scale-50" />
        <Container className="relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-light mb-12 tracking-tighter">Ready to <span className="italic font-serif text-[#C5A059]">Transform?</span></h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-16 py-6 bg-[#C5A059] text-black font-bold uppercase text-[10px] tracking-[0.4em] rounded-full hover:bg-white transition-colors shadow-xl shadow-[#C5A059]/20"
          >
            Start Your Journey
          </motion.button>
        </Container>
      </section>

    </div>
  );
};

export default Projects;