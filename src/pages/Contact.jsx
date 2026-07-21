import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";
import MapSection from "../components/contact/MapSection";
import Container from "../components/common/Container";

const Contact = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    /* MAIN BACKGROUND: Sunk with Studio Radial Gradient */
    <div ref={containerRef} className="bg-[#00162E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E] text-white overflow-hidden relative min-h-screen">
      
      {/* 1. IMMERSIVE BRANDED BACKGROUND */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center"
      >
        <h1 className="text-[30vw] font-black tracking-tighter select-none">HTS</h1>
      </motion.div>

      {/* 2. SIGNATURE HEADER */}
      <section className="relative pt-28 md:pt-40 pb-14 md:pb-20 overflow-hidden">
        <Container>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent" />
              <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold">Inquiries</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white leading-tight mb-8 tracking-tighter">
              Let’s build your <br />
              <span className="italic font-light opacity-95 text-[#C5A059]">future space.</span>
            </h2>
          </motion.div>
        </Container>
      </section>

      {/* 3. DUAL-PANE INTERFACE */}
      <section className="relative pb-20 md:pb-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-8">
                {[
                  { icon: <Mail size={20} />, label: "Email us", val: "hometechalapy@gmail.com" },
                  { icon: <Phone size={20} />, label: "Call us", val: "+1 (555) 000-TECH" },
                  { icon: <Clock size={20} />, label: "Office Hours", val: "Mon — Sat: 9am - 6pm" }
                ].map((item, i) => (
                  <div key={i} className="group flex gap-4 md:gap-6 items-start">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(197,160,89,0.4)]">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1 font-bold">{item.label}</p>
                      <p className="text-base sm:text-lg md:text-xl font-light tracking-tight break-all sm:break-normal">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Trust Badge */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#C5A059]/10 to-transparent border border-[#C5A059]/20 backdrop-blur-md">
                <h4 className="text-[#C5A059] font-serif italic text-xl mb-3 font-light">Private Consultation</h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  We value discretion. All architectural and tech consultations are handled with strict NDA protocols for your security and peace of mind.
                </p>
              </div>
            </motion.div>

            {/* Right Column: The Form Console */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-[#001A33]/40 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl md:rounded-[40px] border border-white/5 shadow-2xl relative overflow-hidden"
            >
              {/* Branded gold light streak */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-light mb-8 flex items-center gap-3">
                  <MessageSquare className="text-[#C5A059]" size={24} /> 
                  Send a Brief
                </h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 4. IMMERSIVE MAP SECTION */}
      <section className="relative w-full mt-12 md:mt-20 transition-all duration-1000 grayscale-[0.8] hover:grayscale-0">
        {/* Sinking the map into the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00162E] via-transparent to-[#00162E] z-10 pointer-events-none" />
        <MapSection />
        
        {/* Address chip — bottom right so it doesn't overlap the map's own HQ card; hidden on mobile */}
        <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
          <Container className="relative h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-16 right-6 p-6 bg-[#00162E]/90 border border-[#C5A059]/20 rounded-2xl pointer-events-auto backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#C5A059] rounded-full text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase">Global HQ</p>
                  <p className="text-sm font-light">123 Tech Avenue, Luxury District</p>
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
      </section>

    </div>
  );
};

export default Contact;