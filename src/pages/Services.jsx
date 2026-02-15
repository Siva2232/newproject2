import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Award, Clock, ArrowRight, PenTool, Cpu, Layers } from "lucide-react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";
import servicesData from "../data/servicesData";

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    /* MAIN BACKGROUND: Sunk with Studio Radial Gradient */
    <div ref={sectionRef} className="bg-[#00162E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E] text-white overflow-hidden">
      
      {/* SECTION 1: MAIN SERVICES GRID */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.h2 
            style={{ y: textY }}
            className="absolute top-20 left-0 text-[20vw] font-black text-white/[0.02] leading-none whitespace-nowrap select-none"
          >
            SOLUTIONS
          </motion.h2>
        </div>

        <Container>
          <div className="relative z-10">
            {/* SIGNATURE HEADER (Replaced SectionTitle) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent" />
                <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold">Our Expertise</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] mb-6 tracking-tighter">
                Premium <span className="italic font-light opacity-95 text-[#C5A059]">Services</span>
              </h2>
              <p className="text-lg text-white/50 font-light max-w-md border-l border-[#C5A059]/30 pl-6">
                Where bespoke craftsmanship meets invisible technology.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-24"
            >
              {servicesData.map((service) => (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -10 }}
                  className="relative group h-full"
                >
                  {/* Updated hover glow to match brand gold */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[#C5A059]/40 to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                  <div className="relative h-full bg-[#001A33]/40 backdrop-blur-md rounded-[19px] border border-white/5 overflow-hidden shadow-2xl">
                      <Link to={`/services/${service.id}`} className="block h-full">
                        <ServiceCard service={service} />
                      </Link>
                    </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: THE INNOVATION PROCESS */}
      <section className="py-24 bg-[#001021] border-y border-[#C5A059]/10">
        <Container>
          <div className="mb-16">
            <h3 className="text-[#C5A059] text-xs font-bold tracking-[0.6em] uppercase mb-4">How we work</h3>
            <h2 className="text-4xl font-light">The Innovation <span className="italic font-serif text-[#C5A059]">Blueprint</span></h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <PenTool size={24}/>, title: "Consultation", desc: "Understanding your lifestyle and spatial requirements." },
              { icon: <Layers size={24}/>, title: "Engineering", desc: "Technical schematics and aesthetic material selection." },
              { icon: <Cpu size={24}/>, title: "Integration", desc: "Seamless installation of invisible tech systems." },
              { icon: <Shield size={24}/>, title: "Support", desc: "Lifetime white-glove maintenance and updates." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-[#001A33]/60 border border-white/5 rounded-2xl relative group"
              >
                <div className="text-[#C5A059] mb-6 group-hover:scale-110 transition-transform duration-500">{step.icon}</div>
                <h4 className="text-xl font-medium mb-3">{step.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                <span className="absolute top-8 right-8 text-[#C5A059]/5 font-black text-4xl">{i+1}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3: PERFORMANCE METRICS */}
      <section className="py-20 bg-transparent">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Completed Projects", val: "500+" },
              { label: "Global Clients", val: "120" },
              { label: "Design Awards", val: "24" },
              { label: "Expert Engineers", val: "15" }
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                key={i} 
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-light text-white mb-2">{stat.val}</h2>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059]/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: LUXE CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Updated Divider line to brand gold */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
        
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="p-16 rounded-[40px] bg-gradient-to-b from-[#003B75]/20 to-transparent border border-[#C5A059]/10 backdrop-blur-sm"
            >
              <h2 className="text-4xl md:text-6xl font-light mb-8 italic text-white">
                Ready to elevate your <br /> 
                <span className="text-[#C5A059] not-italic font-sans font-bold uppercase tracking-tighter">Living Experience?</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
                Join our exclusive list of prestigious clients and transform your space into a masterpiece of tech and design.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-[#C5A059] text-black font-bold uppercase text-xs tracking-[0.3em] rounded-full flex items-center gap-4 mx-auto hover:bg-white transition-all shadow-[0_10px_30px_rgba(197,160,89,0.2)]"
              >
                Get a Proposal <ArrowRight size={16}/>
              </motion.button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;