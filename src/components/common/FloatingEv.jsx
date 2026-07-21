import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Zap } from "lucide-react";

const FloatingEv = () => {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      {
        // Hide as soon as the footer starts entering the viewport.
        threshold: 0.01,
        rootMargin: "0px 0px 16px 0px",
      }
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, [pathname]);

  // No point advertising the page the user is already on
  const onEvPage = pathname.startsWith("/ev-infra");

  return (
    <AnimatePresence>
      {!hidden && !onEvPage && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 24, stiffness: 260 }}
          className="fixed left-4 sm:left-6 bottom-6 sm:bottom-12 z-[200] flex flex-col items-center group"
        >
          <Link to="/ev-infra" className="relative block" aria-label="Explore EV charging infrastructure">
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#FFD600]/30 animate-ping" />

            {/* Main button */}
            <div
              className="
                relative w-14 h-14
                rounded-full
                bg-[#FFD600]
                border border-[#FFD600]
                flex items-center justify-center
                text-[#00162E]
                shadow-[0_0_25px_rgba(255,214,0,0.45)]
                hover:bg-white hover:scale-110
                transition-all duration-300
              "
            >
              <Zap size={24} fill="currentColor" />
            </div>

            {/* Tooltip */}
            {/* <span
              className="
                absolute left-16 top-1/2 -translate-y-1/2
                px-3 py-1.5
                bg-black/90 backdrop-blur-sm
                text-[#FFD600]
                text-[11px] font-medium tracking-wide
                rounded-md
                border border-[#FFD600]/30
                shadow-lg
                whitespace-nowrap
              "
            >
              EV Charging Stations
            </span> */}
          </Link>

          {/* Decorative brand tag */}
          <div className="mt-3 overflow-hidden h-4">
            <motion.p
              animate={{ y: [20, 0] }}
              className="text-[9px] uppercase tracking-[0.4em] text-black/30 font-black"
            >
              EV Infra
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingEv;
