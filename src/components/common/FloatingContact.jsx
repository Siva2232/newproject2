import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const FloatingContact = ({ phone = "+91 1234567890", whatsappText = "Hello%20Luxe%20Interiors" }) => {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  const wa = `https://wa.me/${phone.replace(/\D/g, "")}?text=${whatsappText}`;
  const tel = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <motion.div 
      initial={{ x: 100 }}
      animate={{ x: hidden ? 120 : 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed right-6 bottom-12 z-[200] flex flex-col items-center gap-0 group"
    >
      {/* The "Pillar" Container */}
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-1.5 flex flex-col gap-2 shadow-2xl">
        
        {/* Call Button */}
        <a href={tel} className="relative group/item">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-[#af944d] hover:text-white transition-all duration-300">
            <Phone size={20} />
          </div>
          {/* Tooltip that is always ready */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-black text-[#af944d] text-[10px] font-bold tracking-widest uppercase rounded opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap border border-[#af944d]/30">
            Call Now
          </span>
        </a>

        {/* Divider */}
        <div className="w-8 h-[1px] bg-white/10 mx-auto" />

        {/* WhatsApp Button */}
        <a href={wa} className="relative group/item">
          <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300">
            <FaWhatsapp size={22} />
          </div>
          <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-black text-[#25D366] text-[10px] font-bold tracking-widest uppercase rounded opacity-0 group-hover/item:opacity-100 transition-opacity whitespace-nowrap border border-[#25D366]/30">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Decorative Brand Tag */}
      <div className="mt-4 overflow-hidden h-4">
        <motion.p 
          animate={{ y: [20, 0] }}
          className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-black"
        >
          Contact
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FloatingContact;