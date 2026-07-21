import React from "react";
import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { SMART_LIVING_SOLUTIONS } from "./Services";
import { Link } from "react-router-dom";
const SmartLiving = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#0A1A2A]">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent" />
            <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold">
              Smart Living
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tighter">
            Automation Ecosystem
          </h2>
        </motion.div>

        {/* Grid System */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
        >
          {SMART_LIVING_SOLUTIONS.map((service, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className="group relative h-[400px] md:h-[500px] rounded-[20px] overflow-hidden border border-white/5"
            >
              <Link to={`/smart-living/${idx}`} className="block h-full">
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                />

                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2A] via-[#0A1A2A]/40 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <span className="text-[#C5A059] font-mono text-[10px] tracking-[0.3em] mb-3 md:mb-4 block">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 md:mb-4">
                    {service.title}
                  </h3>

                  {/* Always visible on touch screens, hover reveal on desktop */}
                  <div className="max-h-20 md:max-h-0 overflow-hidden md:group-hover:max-h-20 transition-all duration-500 ease-in-out">
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      Seamless integration of {service.title.toLowerCase()} tailored to your architectural aesthetic.
                    </p>
                  </div>

                  <div className="w-12 h-[2px] bg-[#C5A059] mt-4 md:mt-6" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default SmartLiving;