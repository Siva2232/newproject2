import React from 'react';
import { motion } from 'framer-motion';
// Replace this path with your actual image path
import logo from '../../assets/logo.jpg'; 

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="
        fixed inset-0 
        bg-[#00162E] 
        bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
        from-[#003B75] 
        via-[#002D5A] 
        to-[#00162E]
        flex items-center justify-center z-[9999] overflow-hidden
      "
    >
      {/* Background Ambient Glow - Deep Gold reflection */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[700px] h-[700px] bg-[#af944d]/8 rounded-full blur-[160px] opacity-60"
      />

      <div className="relative flex flex-col items-center">
        {/* The Orbiting Rings System */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
          
          {/* Outer Dashed Golden Orbit */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.3"
              strokeDasharray="2, 7"
              className="opacity-50"
            />
          </motion.svg>

          {/* Inner Solid Spinning Arc */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 md:w-40 md:h-40 border-[2px] border-t-[#fff3ad] border-r-transparent border-b-[#af944d] border-l-transparent rounded-full opacity-75"
          />

          {/* Central Logo Container */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ 
              scale: [0.92, 1.08, 0.92],
              opacity: 1 
            }}
            transition={{ 
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 1 }
            }}
            className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full z-10"
          >
            {/* Soft inner glow behind the logo */}
            <div className="absolute inset-0 bg-[#af944d]/25 rounded-full blur-2xl" />
            
            <img 
              src={logo} 
              alt="Company Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(175,148,77,0.5)]"
            />
          </motion.div>
        </div>

        {/* Minimalist Text & Progress Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 md:mt-16 flex flex-col items-center gap-4"
        >
          <span className="text-[11px] md:text-[12px] uppercase tracking-[0.7em] text-[#fff3ad]/70 font-medium">
            Home Tech Solutions Studio
          </span>
          
          <div className="w-40 md:w-48 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ x: [-160, 160] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3ad]/80 to-transparent"
            />
          </div>
        </motion.div>
      </div>

      {/* Shared Gradient for SVG elements */}
      <svg style={{ height: 0, width: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#af944d" />
            <stop offset="50%" stopColor="#fff3ad" />
            <stop offset="100%" stopColor="#af944d" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Loader;