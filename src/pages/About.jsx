import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Container from "../components/common/Container";
import { Shield, Zap, Award, Headphones } from "lucide-react"; 

const About = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

 const aboutSections = [
  {
    num: "01",
    label: "HERITAGE",
    title: "A 50-Year Legacy of Excellence",
    desc: "Home Tech Solution is built upon a remarkable 50-year legacy of structural and architectural expertise. As the proud sister concern of Kavitha Engineerings, founded by the visionary Mr. Chakrapani, our foundation is rooted in decades of trust, quality, and engineering excellence. Today, the legacy continues under the leadership of Mr. Ragesh Chakrapani, preserving a tradition that has shaped homes and spaces for generations.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974"
  },
  {
    num: "02",
    label: "LEADERSHIP",
    title: "The Third Generation Vision",
    desc: "Home Tech Solution represents the dynamic third generation of this esteemed family legacy. The company is passionately led by Rakendu J Rakesh, daughter of Mr. Ragesh Chakrapani. As a skilled Interior Design Specialist, she brings a fresh and contemporary design perspective while preserving the family’s long-standing tradition of craftsmanship and innovation.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070"
  },
  {
    num: "03",
    label: "VISION",
    title: "Transforming Homes into Experiences",
    desc: "Under Rakendu’s leadership, Home Tech Solution blends decades of engineering knowledge with modern interior design trends. Our mission is to transform ordinary houses into vibrant, functional, and inspiring living spaces. From refreshing a single room to redesigning entire homes, we ensure a seamless journey from concept to completion, delivering personalized spaces that reflect each client’s lifestyle and personality.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2072"
  },
  {
    num: "04",
    label: "PHILOSOPHY",
    title: "Engineering Emotion in Every Space",
    desc: "At Home Tech Solution, we believe that a home is more than just a structure—it’s an emotional experience. Our philosophy centers on 'Engineering Emotion,' where we meticulously craft spaces that evoke feelings of comfort, joy, and inspiration. By seamlessly integrating technology with thoughtful design, we create homes that not only look stunning but also enhance the way you live and feel every day.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070"
  }
];

  // Height logic: (Number of sections) * 100vh
  const sectionHeight = `${aboutSections.length * 100}vh`;

  const x = useTransform(
    scrollYProgress,
    [0, 6], 
    ["0%", isMobile ? "0%" : `-${(aboutSections.length - 1) * 100}%`]
  );

  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <div className="bg-[#00162E] text-white">
      {/* 1. HORIZONTAL SCROLL ABOUT SECTION */}
      <section
        ref={sectionRef}
        className="relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E]"
        style={{ height: isMobile ? "auto" : sectionHeight }}
      >
        <div className={`${isMobile ? "relative" : "sticky top-0 h-screen overflow-hidden"} flex items-center`}>
          {!isMobile && (
            <motion.div style={{ rotate: bgRotate }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-[15vw] font-black text-white/[0.03] leading-none select-none uppercase">HomeTech</h1>
            </motion.div>
          )}

          <motion.div style={{ x }} className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
            {aboutSections.map((item, index) => (
              <div key={index} className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-6 lg:px-24 py-20 lg:py-0">
                <Container>
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                    <motion.div initial={{ clipPath: "inset(0% 100% 0% 0%)" }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }} transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }} viewport={{ once: true }} className="relative aspect-video lg:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/20 to-transparent opacity-40" />
                    </motion.div>

                    <div className="relative pt-8 lg:pt-0">
                      <motion.span className="text-[#C5A059] text-6xl sm:text-7xl lg:text-9xl font-black absolute -top-10 lg:-top-16 -left-4 lg:-left-10 opacity-10">{item.num}</motion.span>
                      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                        <h4 className="text-[#C5A059] text-[10px] sm:text-xs font-bold tracking-[0.5em] lg:tracking-[0.8em] mb-4">{item.label}</h4>
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-light text-white mb-6 lg:mb-8 leading-tight tracking-tight">
                          {item.title.split(" ")[0]} <br />
                          <span className="text-[#fff3ad] italic font-serif">{item.title.split(" ").slice(1).join(" ")}</span>
                        </h2>
                        <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md mb-8 lg:mb-12 font-light">
                          {item.desc}
                        </p>
                        <div className="flex items-center gap-6">
                          <motion.button 
                            whileHover={{ scale: 1.1, backgroundColor: "#C5A059", color: "#00162E" }} 
                            whileTap={{ scale: 0.9 }} 
                            className="h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center rounded-full border border-[#C5A059]/30 text-[#C5A059] transition-all duration-300"
                          >
                            →
                          </motion.button>
                          <span className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase">Discover More</span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </Container>
              </div>
            ))}
          </motion.div>

          {/* Progress Bar Container */}
          <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 px-6 flex flex-col items-center justify-center gap-4 lg:gap-8 pointer-events-none">
            <div className="h-[2px] w-full max-w-[200px] lg:max-w-xs bg-white/10 relative overflow-hidden rounded-full">
              <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-0 bg-[#C5A059] origin-left shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
            </div>
            <span className="text-[10px] text-[#C5A059] tracking-[0.5em] font-bold uppercase">01 — 04 Studio Mastery</span>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE HOME TECH SOLUTIONS */}
      <section className="py-32 relative bg-[#00162E] border-t border-white/5">
        <Container>
          <div className="text-center mb-24">
            <h4 className="text-[#C5A059] text-xs font-bold tracking-[0.6em] uppercase mb-6">The Advantage</h4>
            <h2 className="text-4xl md:text-7xl font-light text-white tracking-tight">Why Choose <span className="italic font-serif text-[#fff3ad]">Home Tech</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={32} />, title: "Certified Security", desc: "Enterprise-grade encryption for your home network and personal data." },
              { icon: <Zap size={32} />, title: "Seamless Motion", desc: "Zero-latency automation that anticipates your daily routines perfectly." },
              { icon: <Award size={32} />, title: "Award Winning", desc: "Recognized excellence in high-end architectural tech integration." },
              { icon: <Headphones size={32} />, title: "24/7 White Glove", desc: "Priority support and remote monitoring for ultimate peace of mind." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500 group"
              >
                <div className="text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(197,160,89,0.3)]">{feature.icon}</div>
                <h3 className="text-xl font-serif text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. PREFERRED PARTNER / CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#003B75]/40 to-transparent">
        <Container>
          <div className="rounded-[3rem] bg-gradient-to-br from-white/10 via-white/[0.02] to-transparent border border-white/10 p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center backdrop-blur-sm">
             <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
             
             <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10">
                <h2 className="text-4xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tighter">
                  Ready to evolve <br />
                  <span className="italic font-serif text-[#C5A059]">your living space?</span>
                </h2>
                <p className="text-white/50 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Join the elite circle of homeowners who trust Home Tech Solutions for bespoke architectural intelligence.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(197,160,89,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-14 py-5 bg-[#C5A059] text-[#00162E] rounded-full font-bold text-xs tracking-[0.3em] uppercase hover:bg-[#fff3ad] transition-all duration-300"
                >
                  Start Your Consultation
                </motion.button>
             </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;