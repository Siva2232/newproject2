import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const FloatingContact = ({ 
  phone = "+91 1234567890", 
  whatsappText = "Hello%20Luxe%20Interiors" 
}) => {
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

  const wa = `https://wa.me/${phone.replace(/\D/g, "")}?text=${whatsappText}`;
  const tel = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", damping: 24, stiffness: 260 }}
          className="fixed right-4 sm:right-6 bottom-6 sm:bottom-12 z-[200] flex flex-col items-center gap-0 group"
        >
      {/* The "Pillar" Container */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex flex-col gap-2 shadow-2xl">
        
        {/* WhatsApp Button – now first */}
        <a href={wa} className="relative group/item">
          <div className="
            w-12 h-12 
            rounded-full 
            bg-[#25D366]/10 
            flex items-center justify-center 
            text-[#25D366] 
            hover:bg-[#25D366] 
            hover:text-white 
            hover:scale-110 
            transition-all duration-300
          ">
            <FaWhatsapp size={22} />
          </div>

          {/* Tooltip – always visible */}
          <span className="
            absolute right-16 top-1/2 -translate-y-1/2 
            px-3 py-1.5 
            bg-black/90 backdrop-blur-sm 
            text-[#25D366] 
            text-[11px] font-medium tracking-wide 
            rounded-md 
            border border-[#25D366]/30 
            shadow-lg
            whitespace-nowrap
          ">
            WhatsApp Now
          </span>
        </a>

        {/* Divider */}
        <div className="w-8 h-[1px] bg-white/10 mx-auto" />

        {/* Phone Button – now second */}
        <a href={tel} className="relative group/item">
          <div className="
            w-12 h-12 
            rounded-full 
            bg-white/10 
            flex items-center justify-center 
            text-white 
            hover:bg-[#af944d] 
            hover:text-white 
            hover:scale-110 
            transition-all duration-300
          ">
            <Phone size={20} />
          </div>

          {/* Tooltip – always visible */}
          <span className="
            absolute right-16 top-1/2 -translate-y-1/2 
            px-3 py-1.5 
            bg-black/90 backdrop-blur-sm 
            text-[#af944d] 
            text-[11px] font-medium tracking-wide 
            rounded-md 
            border border-[#af944d]/30 
            shadow-lg
            whitespace-nowrap
          ">
            Get Free Consultation Call Now
          </span>
        </a>
      </div>

      {/* Decorative Brand Tag – kept as is */}
      <div className="mt-4 overflow-hidden h-4">
        <motion.p 
          animate={{ y: [20, 0] }}
          className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-black"
        >
          Contact
        </motion.p>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContact;