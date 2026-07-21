import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const MapSection = () => {
  // Coordinates for the HQ (Example: Manhattan area)
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157071441!2d-73.9878441!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480293%3A0x5119944466939b6a!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

  return (
    <div className="relative h-[520px] md:h-[600px] w-full bg-[#050505] overflow-hidden group">
      
      {/* 1. TOP & BOTTOM BLENDING GRADIENTS */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

      {/* 2. THE MAP CANVAS */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="HTS Global Headquarters"
          className="w-full h-full grayscale-[1] invert-[0.9] contrast-[1.2] opacity-40 transition-all duration-1000 group-hover:grayscale-[0.5] group-hover:opacity-60"
          src={mapSrc}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* 3. RADAR PULSE EFFECT (Over the center) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#af944d]/20 rounded-full border border-[#af944d]/30"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-4 bg-[#af944d] rounded-full shadow-[0_0_20px_#af944d]"
          />
        </div>
      </div>

      {/* 4. FLOATING COMMAND CARD (Bottom Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-8 md:bottom-12 left-4 right-4 md:left-12 md:right-auto z-30 max-w-xs"
      >
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl md:rounded-[32px] shadow-2xl overflow-hidden relative group/card">
          {/* Animated background glow for card */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#af944d]/10 blur-3xl rounded-full transition-transform duration-700 group-hover/card:scale-150" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="p-2 bg-[#af944d] rounded-lg text-black">
                <Navigation size={18} fill="currentColor" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#af944d]">Location Verified</span>
            </div>

            <h4 className="text-xl font-light text-white mb-2">Global HQ</h4>
            <p className="text-sm text-white/40 leading-relaxed mb-6 md:mb-8">
              Suite 402, Technology Tower,<br />
              Manhattan, NY 10036
            </p>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-[#af944d] hover:text-black transition-all duration-500 rounded-2xl group/btn"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase">Open Navigator</span>
              <ExternalLink size={14} className="group-hover/btn:rotate-45 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 5. COORDINATE OVERLAY (UI Decor) */}
      <div className="absolute top-12 right-12 z-30 hidden md:block text-right pointer-events-none">
        <p className="text-[10px] font-mono text-white/20 tracking-tighter mb-1">LAT: 40.7580° N</p>
        <p className="text-[10px] font-mono text-white/20 tracking-tighter">LNG: 73.9855° W</p>
        <div className="w-24 h-[1px] bg-gradient-to-l from-[#af944d]/40 to-transparent mt-2 ml-auto" />
      </div>

    </div>
  );
};

export default MapSection;