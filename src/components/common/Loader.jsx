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
      className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Background Ambient Glow - Deep Gold reflection */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-[#af944d]/10 rounded-full blur-[140px]"
      />

      <div className="relative flex flex-col items-center">
        {/* The Orbiting Rings System */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          
          {/* Outer Dashed Golden Orbit */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.25"
              strokeDasharray="2, 6"
              className="opacity-40"
            />
          </motion.svg>

          {/* Inner Solid Spinning Arc */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 border-[1.5px] border-t-[#fff3ad] border-r-transparent border-b-[#af944d] border-l-transparent rounded-full opacity-80"
          />

          {/* Central Logo Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [0.95, 1.05, 0.95],
              opacity: 1 
            }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 0.8 }
            }}
            className="relative w-24 h-24 flex items-center justify-center rounded-full z-10"
          >
            {/* Soft inner glow behind the logo */}
            <div className="absolute inset-0 bg-[#af944d]/20 rounded-full blur-xl" />
            
            <img 
              src={logo} 
              alt="Luxe Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            />
          </motion.div>
        </div>

        {/* Minimalist Text & Progress Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <span className="text-[11px] uppercase tracking-[0.6em] text-[#fff3ad]/60 font-medium">
          Home Tech Solutions studio
          </span>
          
          <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ x: [-130, 130] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3ad] to-transparent"
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