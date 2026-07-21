import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, BatteryCharging } from "lucide-react";
import logo from "../../assets/logo.jpg";

const RING_RADIUS = 46;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const PARTICLES = [
  { x: "-42%", delay: 0, duration: 1.4, size: 5 },
  { x: "-20%", delay: 0.35, duration: 1.1, size: 4 },
  { x: "8%", delay: 0.15, duration: 1.5, size: 6 },
  { x: "30%", delay: 0.55, duration: 1.2, size: 4 },
  { x: "46%", delay: 0.25, duration: 1.35, size: 5 },
];

const EvLoader = () => {
  const [charge, setCharge] = useState(0);

  // Count 0 → 100 in sync with the layout's ~1s loader window
  useEffect(() => {
    const started = performance.now();
    let frame;
    const tick = (now) => {
      const pct = Math.min(100, Math.round(((now - started) / 900) * 100));
      setCharge(pct);
      if (pct < 100) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const dashOffset = RING_CIRCUMFERENCE * (1 - charge / 100);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 bg-[#00101F] flex items-center justify-center z-[9999] overflow-hidden"
    >
      {/* Deep radial backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#002446_0%,#00162E_45%,#00101F_100%)]" />

      {/* Ambient yellow glow */}
      <motion.div
        animate={{ opacity: [0.12, 0.35, 0.12], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[620px] h-[620px] bg-[#FFD600]/10 rounded-full blur-[150px]"
      />

      {/* Faint circuit grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,214,0,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,214,0,0.4)_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* Horizontal power beam sweeping behind the ring */}
      <motion.div
        animate={{ x: ["-60vw", "60vw"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -translate-y-1/2 w-[40vw] h-[2px] bg-gradient-to-r from-transparent via-[#FFD600]/60 to-transparent blur-[1px]"
      />

      {/* Rising energy particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          initial={{ y: "42vh", opacity: 0 }}
          animate={{ y: "-46vh", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeIn",
          }}
          style={{ left: `calc(50% + ${p.x})`, width: p.size, height: p.size }}
          className="absolute top-1/2 rounded-full bg-[#FFD600] shadow-[0_0_12px_rgba(255,214,0,0.9)]"
        />
      ))}

      <div className="relative flex flex-col items-center px-6">
        {/* ==== THE CHARGING PORT ==== */}
        <div className="relative w-52 h-52 md:w-64 md:h-64 flex items-center justify-center mb-8">
          {/* Expanding pulse rings */}
          {[0, 0.55].map((delay) => (
            <motion.span
              key={delay}
              initial={{ scale: 0.85, opacity: 0.55 }}
              animate={{ scale: 1.45, opacity: 0 }}
              transition={{ duration: 1.7, repeat: Infinity, delay, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-[#FFD600]/40"
            />
          ))}

          {/* Outer rotating dashed orbit */}
          <motion.svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="#FFD600"
              strokeWidth="0.35"
              strokeDasharray="1.5, 6"
              className="opacity-40"
            />
          </motion.svg>

          {/* Charge progress ring */}
          <svg viewBox="0 0 100 100" className="absolute inset-[6%] w-[88%] h-[88%] -rotate-90">
            <circle
              cx="50"
              cy="50"
              r={RING_RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2.5"
            />
            <circle
              cx="50"
              cy="50"
              r={RING_RADIUS}
              fill="none"
              stroke="url(#evGoldYellow)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={dashOffset}
              style={{ filter: "drop-shadow(0 0 6px rgba(255,214,0,0.8))" }}
            />
          </svg>

          {/* Logo core */}
          <motion.div
            animate={{ scale: [0.96, 1.04, 0.96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center z-10"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 bg-[#FFD600]/20 rounded-full blur-2xl" />
            {/* Ring around logo */}
            <div className="absolute inset-0 rounded-full border border-[#FFD600]/30" />

            <img
              src={logo}
              alt="Home Tech Solutions"
              className="w-[82%] h-[82%] object-contain rounded-full drop-shadow-[0_0_24px_rgba(255,214,0,0.55)]"
            />
          </motion.div>

          {/* Bolt badge docked on the ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-1 md:bottom-0 left-1/2 -translate-x-1/2 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#FFD600] border-4 border-[#00162E] flex items-center justify-center z-20 shadow-[0_0_30px_rgba(255,214,0,0.6)]"
          >
            <Zap size={20} className="text-[#00162E]" fill="currentColor" />
          </motion.div>
        </div>

        {/* ==== CHARGE READOUT ==== */}
        <div className="flex items-end gap-2 mb-5">
          <p className="text-5xl md:text-6xl font-serif text-[#FFD600] tracking-tighter tabular-nums leading-none">
            {charge}
          </p>
          <span className="text-lg md:text-xl font-serif text-[#FFD600]/60 mb-1">%</span>
        </div>

        {/* Slim battery bar */}
        <div className="flex items-center gap-1 mb-7">
          <div className="relative w-48 sm:w-60 h-2.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#FFD600]/60 via-[#FFD600] to-[#fff3ad]"
              style={{ width: `${charge}%` }}
            />
            <motion.div
              animate={{ x: ["-100%", "400%"] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFD600]/50" />
        </div>

        {/* Brand line */}
        <div className="flex items-center gap-3">
          <BatteryCharging size={14} className="text-[#FFD600]" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.55em] text-white/50 font-bold text-center">
            HTSS EV Infra · Powering Up
          </span>
        </div>
      </div>

      {/* Shared gradient defs */}
      <svg style={{ height: 0, width: 0, position: "absolute" }}>
        <defs>
          <linearGradient id="evGoldYellow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD600" />
            <stop offset="50%" stopColor="#fff3ad" />
            <stop offset="100%" stopColor="#FFD600" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default EvLoader;
