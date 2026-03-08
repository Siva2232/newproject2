import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Award, Clock, ArrowRight, PenTool, Cpu, Layers, Lightbulb } from "lucide-react";
import Container from "../components/common/Container";
import { Link, useLocation } from "react-router-dom";
import ServiceCard from "../components/services/ServiceCard";
import ProjectCard from "../components/projects/ProjectCard";
import servicesData from "../data/servicesData";
import productsData from "../data/productsData";

// static list of smart-living solutions used in a dedicated section
// converted to objects so render code can reference .title and .image safely
export const SMART_LIVING_SOLUTIONS = [
  {
    title: "Gate Automation Systems",
    image: "https://images.unsplash.com/photo-1595526114935-098670d8557b?q=80",
    description: "Automated gates for seamless vehicle and pedestrian access.",
    details: "Our gate automation systems integrate with existing entryways, offering remote control, scheduling, and safety sensors. Perfect for residential and commercial properties.",
    sections: [
      { title: "Overview", content: "The Gate Automation System provides automated opening and closing of gates with customizable access methods including remote, keypad, and app control." },
      { title: "Features", content: "Includes safety sensors, battery backup, smartphone integration, and customizable scheduling." },
      { title: "Benefits", content: "Enhances security, convenience, and property value while eliminating manual gate operation." },
      { title: "Installation & Support", content: "Professional installation with on-site consultation, followed by 24/7 maintenance support and warranty coverage." },
    ],
  },
  {
    title: "Shutter Automation",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80",
    description: "Motorised shutters for privacy and climate control.",
    details: "These systems allow timed or sensor-driven opening/closing of window shutters, improving energy efficiency and security.",
    sections: [
      { title: "Overview", content: "Automated shutters that adjust based on light, temperature, or user commands via app or voice assistants." },
      { title: "Features", content: "Sun sensors, remote access, quiet motors, and customizable preset positions." },
      { title: "Benefits", content: "Reduces energy costs, enhances privacy and protects interiors from sun damage." },
      { title: "Installation & Support", content: "Includes professional measurement, fitting, and a comprehensive maintenance plan." },
    ],
  },
  {
    title: "Curtain Automation",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?q=80",
    description: "Smart curtains that respond to light and voice.",
    details: "Automate your curtains with app, voice, or schedule. Ideal for smart homes and luxury spaces.",
    sections: [
      { title: "Overview", content: "Curtains that move automatically based on sunlight, time of day, or user preference." },
      { title: "Features", content: "Voice control, quiet operation, and compatibility with multiple fabric types." },
      { title: "Benefits", content: "Adds convenience, privacy, and energy savings without compromising decor." },
      { title: "Installation & Support", content: "Professional drapery installation available, plus remote diagnostics and updates." },
    ],
  },
  {
    title: "Boom Pole Installation",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a268e?q=80",
    description: "Heavy-duty poles for gate and barrier control.",
    details: "Designed for high-traffic areas, our boom poles integrate with access systems and feature safety breakaway and LED signaling.",
    sections: [
      { title: "Overview", content: "Robust boom poles designed for commercial and residential barriers, including toll booths and parking lots." },
      { title: "Features", content: "High-strength materials, rapid deployment, and integrated safety features." },
      { title: "Benefits", content: "Reliable barrier control with minimal maintenance and customizable lengths." },
      { title: "Installation & Support", content: "On-site engineering ensures correct placement, with ongoing maintenance contracts available." },
    ],
  },
  {
    title: "Biometrics Access Control Systems",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80",
    description: "Fingerprint and facial recognition entry solutions.",
    details: "Secure entry using biometric verification; logs access events and integrates with broader security platforms.",
    sections: [
      { title: "Overview", content: "State-of-the-art biometric readers that ensure only authorized individuals gain access." },
      { title: "Features", content: "Fingerprint, facial, and iris recognition with encrypted data storage." },
      { title: "Benefits", content: "Eliminates lost keys/cards and enhances security through unique identifiers." },
      { title: "Installation & Support", content: "Includes system calibration, user enrollment, and remote tech support." },
    ],
  },
  {
    title: "Door Camera & Video Doorbell Systems",
    image: "https://images.unsplash.com/photo-1558002038-10329091d2c2?q=80",
    description: "See and speak with visitors remotely.",
    details: "High-definition video doorbells with two-way audio, motion alerts, and cloud recording. Connects to mobile apps.",
    sections: [
      { title: "Overview", content: "Smart door cameras provide real-time video of your entryway with motion detection." },
      { title: "Features", content: "Two-way audio, night vision, mobile alerts, and cloud storage." },
      { title: "Benefits", content: "Enhances safety by letting you screen visitors from anywhere." },
      { title: "Installation & Support", content: "Quick setup with existing doorbell wiring and optional subscription services." },
    ],
  },
  {
    title: "Smart Lighting Solutions",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80",
    description: "Adaptive lighting for mood and efficiency.",
    details: "Control brightness, color, and schedules via app or voice. Integrates with occupancy sensors and energy monitors.",
    sections: [
      { title: "Overview", content: "Lighting that adapts to your lifestyle with customizable scenes." },
      { title: "Features", content: "Color tuning, motion activation, and voice control." },
      { title: "Benefits", content: "Improves ambiance while reducing energy usage." },
      { title: "Installation & Support", content: "Retrofittable fixtures and remote system updates available." },
    ],
  },
  {
    title: "CCTV & Complete Security Systems",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80",
    description: "Comprehensive video surveillance and alerts.",
    details: "From standalone cameras to full security suites with alarms, remote monitoring, and AI analytics.",
    sections: [
      { title: "Overview", content: "Custom CCTV networks with optional alarm integration and smart analytics." },
      { title: "Features", content: "High-resolution cameras, remote access, and AI-based threat detection." },
      { title: "Benefits", content: "24/7 monitoring improves response times and deters crime." },
      { title: "Installation & Support", content: "Professional system design with 24/7 monitoring plans available." },
    ],
  },
  {
    title: "Solar Lighting Installation",
    image: "https://images.unsplash.com/photo-1509391366360-2a9519d87502?q=80",
    description: "Eco-friendly outdoor lighting powered by sunlight.",
    details: "Durable solar fixtures with batteries and motion sensors ideal for pathways, gardens, and security perimeters.",
    sections: [
      { title: "Overview", content: "Solar-powered lights that charge by day and illuminate at night automatically." },
      { title: "Features", content: "Integrated batteries, motion sensors, and weatherproof housings." },
      { title: "Benefits", content: "Reduces electricity costs and is easy to install without trenching." },
      { title: "Installation & Support", content: "Site assessment included and warranty-backed equipment." },
    ],
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  // determine display mode from query string or path
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let view = params.get("view"); // 'products' or 'combined' or null
  // if user hit /products route, force view=products
  if (location.pathname.startsWith("/products")) {
    view = "products";
  }

  let servicesToShow = [];
  let productsToShow = [];
  if (view === "products") {
    servicesToShow = [];
    productsToShow = productsData;
  } else if (view === "combined") {
    servicesToShow = servicesData.slice(0, 2);
    productsToShow = productsData.slice(0, 3);
  } else {
    servicesToShow = servicesData;
    productsToShow = productsData;
  }




  return (
    <div ref={sectionRef} className="bg-[#00162E] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#003B75] via-[#002D5A] to-[#00162E] text-white overflow-hidden">
      
      {/* SECTION 1: MAIN SERVICES GRID – may be empty in certain views */}
      {servicesToShow.length > 0 && (
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
                {view === "products" ? "Premium" : "Premium"} <span className="italic font-light opacity-95 text-[#C5A059]">{view === "products" ? "Products" : "Services"}</span>
                </h2>
                <p className="text-lg text-white/50 font-light max-w-md border-l border-[#C5A059]/30 pl-6">
                  {(view === "products" || view === "combined") ? (
                    <ul className="list-disc list-inside space-y-2">
                      {productsData.map((p) => (
                        <li key={p.id}>{p.title}</li>
                      ))}
                    </ul>
                  ) : (
                    "Where bespoke craftsmanship meets invisible technology."
                  )}
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
                {servicesToShow.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -10 }}
                    className="relative group h-full"
                  >
                    <div className="absolute -inset-[1px] bg-gradient-to-r from-[#C5A059]/40 to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                    <div className="relative h-full bg-[#001A33]/40 backdrop-blur-md rounded-[19px] border border-white/5 overflow-hidden shadow-2xl">
                      <Link to={`/services/${service.id}`} className="block h-full">
                        <ServiceCard
                          title={service.title}
                          number={String(service.id).padStart(2, "0")}
                          tag={service.title.split(" ")[0]}
                          image={service.image}
                        />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </section>
      )}    

      {/* SECTION 2: HOW WE WORK – unchanged */}
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

      {/* NEW SECTION: PREMIUM PRODUCTS – using EXACT same card UI as main services */}
      <section className="py-32 relative bg-[#001021]/80 border-y border-[#C5A059]/10">
        <Container>
          <div className="mb-16 text-center">
            <h3 className="text-[#C5A059] text-xs font-bold tracking-[0.6em] uppercase mb-4">Exclusive Offerings</h3>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Premium <span className="italic font-light text-[#C5A059]">Products</span>
            </h2>
            <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto font-light">
              Signature pieces engineered for those who demand the extraordinary.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {productsToShow.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
                className="relative group h-full"
              >
                {/* Exact same hover glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#C5A059]/40 to-transparent rounded-[20px] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                
                {/* Exact same card wrapper */}
                <div className="relative h-full bg-[#001A33]/40 backdrop-blur-md rounded-[19px] border border-white/5 overflow-hidden shadow-2xl">
                  <Link to={`/products/${product.id}`} className="block h-full">
                    {/* use ProjectCard UI for premium products */}
                    <ProjectCard
                      title={product.title}
                      number={String(product.id).padStart(2, "0")}
                      category={product.title.split(" ")[0]}
                      image={product.image}
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

        <section className="relative py-32 overflow-hidden bg-[#0A1A2A]">
  <Container>
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mb-24"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-[1px] bg-gradient-to-r from-[#C5A059] to-transparent" />
        <span className="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-bold">
          Smart Living
        </span>
      </div>
      <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tighter">
        Automation Ecosystem
      </h2>
    </motion.div>

    {/* Grid System */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {SMART_LIVING_SOLUTIONS.map((service, idx) => (
        <motion.div
          key={idx}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          className="group relative h-[500px] rounded-[20px] overflow-hidden border border-white/5"
        >
          {/* make the entire card clickable */}
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
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-[#C5A059] font-mono text-[10px] tracking-[0.3em] mb-4 block">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-serif text-white mb-4">
                {service.title}
              </h3>
              
              {/* Hover Reveal Content */}
              <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Seamless integration of {service.title.toLowerCase()} tailored to your architectural aesthetic.
                </p>
              </div>
              
              <div className="w-12 h-[2px] bg-[#C5A059] mt-6" />
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </Container>
</section>

      {/* SECTION 4: LUXE CTA – unchanged */}
      <section className="py-32 relative overflow-hidden">
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