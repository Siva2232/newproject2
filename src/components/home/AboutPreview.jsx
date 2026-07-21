import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../common/Container";
import { Quote, MoveRight, ShieldCheck, Zap, PenTool, Users, Award } from "lucide-react"; 

const AboutPreview = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Disable parallax on mobile — stacked columns overlap otherwise
  const yImage = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -100]);
  const yContentRight = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -50]);
  const rotateDecorative = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const curtainVariant = {
    initial: { scaleX: 1 },
    animate: { scaleX: 0, transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1] } }
  };

  const REASONS = [
    { icon: <ShieldCheck size={28} />, title: "50-Year Legacy", desc: "Built on the engineering excellence of Kavitha Engineerings." },
    { icon: <Zap size={28} />, title: "Smart Integration", desc: "Seamlessly blending invisible tech with physical spaces." },
    { icon: <PenTool size={28} />, title: "End-to-End", desc: "From civil works to automation, all under one trusted roof." },
    { icon: <Users size={28} />, title: "Trust & Precision", desc: "A customer-first approach rooted in Bharath's values." },
    { icon: <Award size={28} />, title: "Award Winning", desc: "Recognized excellence in smart home innovation and craftsmanship." },
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-32 bg-[#F5F5F3] overflow-hidden">
      <Container>
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-24 flex flex-col items-start max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-[#C5A059] uppercase text-[10px] font-bold tracking-[0.5em]">The Hometech Philosophy</span>
          </motion.div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-stone-900 leading-none">
            Engineering <br /> <span className="italic font-light text-stone-400">Emotion.</span>
          </h2>
        </div>


        {/* Existing Mission + Vision Grid - kept as is */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
          {/* LEFT SIDE: OUR MISSION */}
          <div className="lg:col-span-6 relative">
            <motion.div 
              style={{ y: yImage }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative z-10 aspect-[4/5] overflow-hidden"
            >
              <motion.div variants={curtainVariant} className="absolute inset-0 bg-[#C5A059] z-20 origin-left" />
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover grayscale-[0.3]"
              />
              <div className="absolute inset-0 bg-black/40 p-6 sm:p-8 md:p-12 flex flex-col justify-end text-white">
                <span className="text-[#C5A059] font-mono text-sm sm:text-base md:text-lg uppercase tracking-[0.3em] mb-3 md:mb-4">01. Our Mission</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 md:mb-6 italic">The Art of Integration</h3>
                <p className="text-white/80 font-light leading-relaxed text-sm sm:text-base md:text-lg max-w-md">
                  Delivering complete construction and smart technology solutions that enhance the security and beauty of every space.
                </p>
              </div>
            </motion.div>
            
            <div className="absolute -bottom-10 -right-10 bg-[#C5A059] p-10 z-20 hidden lg:block shadow-2xl">
              <p className="text-white font-serif text-5xl mb-1">50+</p>
              <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold leading-tight">Years of Engineering<br/>Legacy</p>
            </div>
          </div>
        
          {/* RIGHT SIDE: VISION */}
          <motion.div 
            style={{ y: yContentRight }}
            className="lg:col-span-6 lg:pl-20 flex flex-col justify-center mt-4 lg:mt-0"
          >
            <div className="relative p-6 sm:p-10 md:p-16 bg-stone-900 text-white shadow-2xl overflow-hidden">
              <motion.div style={{ rotate: rotateDecorative }} className="absolute -top-10 -right-10 opacity-5">
                <Quote size={200} />
              </motion.div>

              <div className="relative z-10">
                <span className="text-[#C5A059] uppercase text-sm sm:text-base md:text-lg font-bold tracking-[0.5em] mb-6 md:mb-8 block">02. Vision</span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">Defining the <br/><span className="italic text-[#C5A059]">Future</span> of Living.</h3>
                
                <p className="text-stone-400 font-light leading-loose text-base md:text-lg mb-8 md:mb-10">
                  To become the most trusted integrated home solutions brand across Bharath, creating smart, sustainable, and beautifully designed environments.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="h-[1px] w-full bg-stone-800" />
                  <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 group-hover:text-[#C5A059] transition-colors">Our Innovation Standards</span>
                    <MoveRight className="text-[#C5A059] transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WHY CHOOSE US SECTION (moved to end) */}
        <div className="mt-16 md:mt-24 lg:mt-32">
          {/* Heading + Centered Logo */}
          <div className="text-center mb-10 md:mb-16 relative ">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#C5A059]/10 mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#C5A059] flex items-center justify-center text-white shadow-lg">
                {/* You can replace this with your actual logo / SVG */}
                <span className="text-2xl md:text-3xl font-bold">H</span>
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">
              Why Choose <span className="text-[#C5A059]">Hometech</span>
            </h3>
            <p className="mt-4 text-stone-500 font-light text-base md:text-lg max-w-2xl mx-auto px-2">
              Where quality, innovation, and customer satisfaction come together to build better living spaces
            </p>
          </div>

          {/* 5 Cards in a row on lg screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 border-y border-stone-200 divide-y sm:divide-y-0 lg:divide-x divide-stone-200">
            {REASONS.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
                className="group relative flex flex-col gap-4 md:gap-6 py-8 md:py-12 px-5 md:px-8 transition-all duration-500 hover:bg-white hover:shadow-xl"
              >
                {/* Decorative Number */}
                <span className="absolute top-6 right-6 text-5xl md:text-6xl font-serif text-stone-100 group-hover:text-stone-200 transition-colors select-none pointer-events-none">
                  0{i + 1}
                </span>

                {/* Icon */}
                <div className="relative text-[#C5A059] transform transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-110">
                  <div className="absolute -inset-3 bg-[#C5A059]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <div className="relative z-10">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 mt-2">
                  <h4 className="font-serif text-xl md:text-2xl text-stone-900 tracking-tight leading-tight group-hover:text-[#C5A059] transition-colors duration-500">
                    {item.title}
                  </h4>
                  
                  <div className="w-10 h-[1px] bg-stone-300 group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-500" />
                  
                  <p className="text-sm md:text-[15px] text-stone-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;