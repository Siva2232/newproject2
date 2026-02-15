import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import Container from "../common/Container";

const REVIEWS = [
  {
    quote: "The transformation exceeded every expectation. Their eye for detail is unmatched in the industry.",
    author: "Raj Sharma",
    role: "Estate Owner",
    location: "Hyderabad"
  },
  {
    quote: "A perfect blend of technical precision and artistic soul. Our office is now a landmark of productivity.",
    author: "Ananya Iyer",
    role: "CEO, TechFlow",
    location: "Bangalore"
  },
  {
    quote: "Minimalism at its finest. They didn't just design a house; they curated a lifestyle for our family.",
    author: "Vikram Mehta",
    role: "Architectural Collector",
    location: "Mumbai"
  },

  // --- Added 10 More ---

  {
    quote: "From blueprint to final execution, every phase was handled with extraordinary discipline and elegance.",
    author: "Karthik Reddy",
    role: "Real Estate Developer",
    location: "Chennai"
  },
  {
    quote: "They understood our vision instantly and elevated it beyond imagination. Pure architectural poetry.",
    author: "Priya Nair",
    role: "Luxury Homeowner",
    location: "Kochi"
  },
  {
    quote: "The spatial planning completely transformed how our team collaborates. Efficiency meets aesthetics.",
    author: "Rohit Verma",
    role: "Managing Director",
    location: "Pune"
  },
  {
    quote: "Every corner reflects intentionality. The textures, light, and proportions feel timeless.",
    author: "Sneha Kapoor",
    role: "Interior Curator",
    location: "Delhi"
  },
  {
    quote: "Their commitment to sustainability without compromising luxury truly sets them apart.",
    author: "Arjun Malhotra",
    role: "Sustainable Investor",
    location: "Ahmedabad"
  },
  {
    quote: "Walking into our redesigned villa still gives us goosebumps. It feels serene yet powerful.",
    author: "Divya Srinivasan",
    role: "Entrepreneur",
    location: "Coimbatore"
  },
  {
    quote: "The balance between contemporary structure and cultural heritage was executed flawlessly.",
    author: "Manish Gupta",
    role: "Cultural Patron",
    location: "Jaipur"
  },
  {
    quote: "Professional, visionary, and incredibly responsive. The process was as refined as the result.",
    author: "Neha Choudhary",
    role: "Business Consultant",
    location: "Gurgaon"
  },
  {
    quote: "Our hospitality space now feels immersive and emotionally engaging. Guests constantly compliment the ambiance.",
    author: "Aditya Rao",
    role: "Boutique Hotel Owner",
    location: "Goa"
  },
  {
    quote: "They don't just design structures; they craft experiences that resonate deeply with the people inside them.",
    author: "Meera Deshpande",
    role: "Art Collector",
    location: "Nagpur"
  }
];


const Testimonials = () => {
  return (
    <section className="relative py-40 bg-[#FFFFFF] overflow-hidden">
      
      {/* 1. KINETIC WATERMARK (Light Mode) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center">
        <h2 className="text-[30vw] font-serif italic text-stone-900 whitespace-nowrap">
          VOICES — VOICES — VOICES
        </h2>
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative z-10"
        >
          <SectionTitle
            title="Client Stories"
            subtitle="The true measure of our craft lies in the experiences of those who inhabit our spaces."
            light={false} // Switch to dark text
            align="left"
          />
        </motion.div>

        {/* 2. THE DRAGGABLE SLIDER (Elevated Style) */}
        <motion.div 
          className="flex cursor-grab active:cursor-grabbing gap-8 lg:gap-12 overflow-visible"
          drag="x"
          dragConstraints={{ right: 0, left: -4000 }}
        >
          {REVIEWS.map((item, i) => (
            <motion.div
              key={i}
              className="min-w-[320px] md:min-w-[550px] flex flex-col justify-between p-10 lg:p-14 bg-[#F9F9F7] border border-stone-100 relative group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Decorative Quote Mark (Subtle on white) */}
              <span className="absolute top-8 left-10 text-8xl font-serif text-[#C5A059] opacity-10 leading-none">
                “
              </span>

              <div className="relative z-10">
                <p className="text-xl md:text-3xl font-serif text-stone-800 leading-tight mb-12 italic tracking-tight">
                  "{item.quote}"
                </p>
                
                <div className="flex items-center gap-6">
                  {/* Visual Line - Thinner for light mode */}
                  <div className="w-10 h-[1px] bg-[#C5A059]" />
                  
                  <div>
                    <h4 className="text-stone-900 font-bold text-[11px] uppercase tracking-[0.3em] mb-1">
                      {item.author}
                    </h4>
                    <p className="text-stone-400 text-[9px] uppercase tracking-widest font-medium">
                      {item.role} <span className="mx-2 opacity-30">|</span> {item.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Stamp */}
              <span className="absolute bottom-10 right-10 text-[9px] font-mono text-stone-300 uppercase tracking-widest border-l border-stone-200 pl-4">
                Verified Resident / 0{i + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. NAVIGATION HINT (Clean Contrast) */}
        <div className="mt-24 flex justify-between items-center border-t border-stone-100 pt-10 relative z-10">
           <div className="flex gap-3">
              {[0, 1, 2].map((dot) => (
                <div key={dot} className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${dot === 0 ? 'bg-[#C5A059]' : 'bg-stone-200'}`} />
              ))}
           </div>
           <div className="flex items-center gap-4 group">
             <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 group-hover:text-stone-900 transition-colors cursor-default">
                Swipe to explore
             </span>
             <motion.div 
               animate={{ x: [0, 10, 0] }} 
               transition={{ repeat: Infinity, duration: 2 }}
               className="text-[#C5A059]"
             >
               →
             </motion.div>
           </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;