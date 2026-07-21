import React, { useRef, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";
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
  const containerRef = useRef(null);
  const x = useRef(0);

  // Auto-scroll speed (pixels per second) — adjust as needed
  const speed = -80; // negative = left direction

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;
    
    // Move left smoothly
    x.current += speed * (delta / 1000);

    // When first half is fully off-screen → reset to start (seamless loop)
    const width = containerRef.current.scrollWidth / 2;
    if (x.current <= -width) {
      x.current += width;
    }

    containerRef.current.style.transform = `translateX(${x.current}px)`;
  });

  // Duplicate reviews array → create seamless infinite loop
  const doubledReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className="relative py-20 md:py-40 bg-[#FFFFFF] overflow-hidden">
      {/* Kinetic watermark */}
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
          className="mb-12 md:mb-24 relative z-10"
        >
          <SectionTitle
            title="Client Stories"
            subtitle="The true measure of our craft lies in the experiences of those who inhabit our spaces."
            light={false}
            align="left"
          />
        </motion.div>

        {/* Auto-moving infinite slider */}
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="
              flex gap-4 sm:gap-8 lg:gap-12 
              will-change-transform
            "
            style={{ transform: "translateX(0px)" }}
          >
            {doubledReviews.map((item, i) => (
              <motion.div
                key={i}
                className="
                  min-w-[260px] max-w-[85vw] sm:min-w-[380px] md:min-w-[480px] lg:min-w-[550px] 
                  flex flex-col justify-between 
                  p-6 sm:p-8 lg:p-12 
                  bg-[#F9F9F7] 
                  border border-stone-100 
                  relative group 
                  transition-all duration-500 
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                "
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
              >
                {/* Decorative quote mark */}
                <span className="absolute top-6 left-8 text-7xl lg:text-8xl font-serif text-[#C5A059] opacity-10 leading-none">
                  “
                </span>

                <div className="relative z-10">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-stone-800 leading-snug mb-8 lg:mb-12 italic tracking-tight">
                    "{item.quote}"
                  </p>

                  <div className="flex items-center gap-5 lg:gap-6">
                    <div className="w-10 h-[1px] bg-[#C5A059]" />
                    <div>
                      <h4 className="text-stone-900 font-bold text-[11px] uppercase tracking-[0.3em] mb-1">
                        {item.author}
                      </h4>
                      <p className="text-stone-500 text-[9px] lg:text-[10px] uppercase tracking-widest font-medium">
                        {item.role} <span className="mx-2 opacity-30">|</span> {item.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical stamp */}
                <span className="absolute bottom-6 right-6 lg:bottom-8 lg:right-10 text-[9px] font-mono text-stone-300 uppercase tracking-widest border-l border-stone-200 pl-3 lg:pl-4">
                  Verified · {i + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional hint (can be removed if auto-movement is enough) */}
        <div className="mt-10 md:mt-16 flex justify-center items-center gap-3 text-stone-400 text-[10px] uppercase tracking-[0.4em] text-center">
          <span>Client Testimonials</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;