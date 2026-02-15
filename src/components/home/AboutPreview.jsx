import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../common/Container";
import Button from "../common/Button";
import { ShieldCheck, Zap, Layers, PenTool, ArrowRight } from "lucide-react"; 

const AboutPreview = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const curtainVariant = {
    initial: { scaleX: 1 },
    animate: { scaleX: 0, transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } }
  };

  const imageVariant = {
    initial: { scale: 1.2 },
    animate: { scale: 1, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }
  };

  const whyChooseData = [
    {
      icon: <PenTool size={20} />,
      title: "Bespoke Design",
      desc: "Every blueprint is tailored to your unique lifestyle and aesthetic preferences."
    },
    {
      icon: <Layers size={20} />,
      title: "Seamless Integration",
      desc: "High-end technology that blends invisibly into your home's architecture."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Trusted Security",
      desc: "Enterprise-grade protection ensuring your private sanctuary remains private."
    }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-[#F5F5F3] overflow-hidden">
      <Container>
        {/* SECTION 1: MAIN PREVIEW */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-40">
          <div className="relative lg:col-span-7">
            <motion.div 
              style={{ y: y1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] overflow-hidden shadow-2xl"
            >
              <motion.div variants={curtainVariant} className="absolute inset-0 bg-[#C5A059] z-20 origin-left" />
              <motion.img 
                variants={imageVariant}
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80" 
                alt="Studio interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              style={{ y: y2 }}
              className="absolute -bottom-10 -right-10 w-full h-full border-[1px] border-[#C5A059] z-0 hidden lg:block"
            />
          </div>

          <div className="lg:col-span-5 lg:-ml-20 z-20 mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border-t-[6px] border-[#C5A059]"
            >
              <span className="text-[#C5A059] uppercase text-xs font-bold mb-6 block tracking-[0.4em]">The Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 leading-tight">
                Crafting <span className="italic font-light">Soul</span> into <br /> Modern Spaces
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-10 text-lg">
                For over a decade, our studio has redefined luxury living by 
                merging architectural precision with warmth.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <Button variant="outline" className="px-8 py-4 font-bold tracking-widest text-[10px] uppercase">Our Philosophy</Button>
                <div className="flex items-center gap-4 border-l border-stone-200 pl-6">
                  <span className="text-4xl font-serif text-[#C5A059]">12+</span>
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold leading-tight">Years of <br /> Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: WHY CHOOSE HEADER & GRID */}
        <div className="pt-24 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-[#C5A059] uppercase text-xs font-bold mb-4 tracking-[0.4em]">The Home Tech Edge</h4>
              <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
                Why <span className="italic font-light text-stone-500">Choose</span> Our Studio?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button className="group bg-[#C5A059] text-white hover:bg-stone-900 transition-colors duration-500 px-10 py-5 rounded-full flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-widest font-bold">View Our Standards</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {whyChooseData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className="group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white text-[#C5A059] shadow-md mb-8 group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                  {item.icon}
                </div>
                <h3 className="text-stone-900 font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-stone-500 font-light text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;