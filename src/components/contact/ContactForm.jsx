import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../common/Button";

const ContactForm = () => {
  const [focused, setFocused] = useState(null);

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "#af944d", transition: { duration: 0.3 } },
    blur: { scale: 1, borderColor: "rgba(255,255,255,0.1)", transition: { duration: 0.3 } }
  };

  const labelVariants = {
    initial: { y: 20, opacity: 0.4, scale: 1 },
    focus: { y: -30, opacity: 1, scale: 0.8, color: "#af944d" }
  };

  return (
    <form className="space-y-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Full Name Field */}
        <div className="relative group">
          <motion.label 
            variants={labelVariants}
            animate={focused === "name" ? "focus" : "initial"}
            className="absolute left-4 pointer-events-none uppercase text-[10px] tracking-[0.2em] font-bold"
          >
            Full Name
          </motion.label>
          <motion.input
            onFocus={() => setFocused("name")}
            onBlur={(e) => !e.target.value && setFocused(null)}
            variants={inputVariants}
            animate={focused === "name" ? "focus" : "blur"}
            type="text"
            className="w-full bg-white/[0.03] p-5 pt-7 border-b border-white/10 outline-none transition-all font-light text-white placeholder-transparent"
            placeholder="Full Name"
          />
          <div className={`absolute bottom-0 left-0 h-[2px] bg-[#af944d] transition-all duration-500 ${focused === "name" ? 'w-full' : 'w-0'}`} />
        </div>

        {/* Email Field */}
        <div className="relative group">
          <motion.label 
            variants={labelVariants}
            animate={focused === "email" ? "focus" : "initial"}
            className="absolute left-4 pointer-events-none uppercase text-[10px] tracking-[0.2em] font-bold"
          >
            Email Address
          </motion.label>
          <motion.input
            onFocus={() => setFocused("email")}
            onBlur={(e) => !e.target.value && setFocused(null)}
            variants={inputVariants}
            animate={focused === "email" ? "focus" : "blur"}
            type="email"
            className="w-full bg-white/[0.03] p-5 pt-7 border-b border-white/10 outline-none transition-all font-light text-white placeholder-transparent"
            placeholder="Email Address"
          />
          <div className={`absolute bottom-0 left-0 h-[2px] bg-[#af944d] transition-all duration-500 ${focused === "email" ? 'w-full' : 'w-0'}`} />
        </div>
      </div>

      {/* Select Project Type (Bonus Feature) */}
      <div className="space-y-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Nature of Inquiry</p>
        <div className="flex flex-wrap gap-3">
          {["Residential", "Commercial", "Automation", "Consulting"].map((tag) => (
            <button
              key={tag}
              type="button"
              className="px-6 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest hover:border-[#af944d] hover:text-[#af944d] transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Message Field */}
      <div className="relative group">
        <motion.label 
          variants={labelVariants}
          animate={focused === "message" ? "focus" : "initial"}
          className="absolute left-4 pointer-events-none uppercase text-[10px] tracking-[0.2em] font-bold"
        >
          Your Vision
        </motion.label>
        <motion.textarea
          onFocus={() => setFocused("message")}
          onBlur={(e) => !e.target.value && setFocused(null)}
          variants={inputVariants}
          animate={focused === "message" ? "focus" : "blur"}
          rows="4"
          className="w-full bg-white/[0.03] p-5 pt-7 border-b border-white/10 outline-none transition-all font-light text-white resize-none placeholder-transparent"
          placeholder="Your Vision"
        ></motion.textarea>
        <div className={`absolute bottom-0 left-0 h-[2px] bg-[#af944d] transition-all duration-500 ${focused === "message" ? 'w-full' : 'w-0'}`} />
      </div>

      {/* Button with Inner Glow */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button className="w-full py-6 bg-[#af944d] text-black font-black uppercase text-[10px] tracking-[0.5em] rounded-none hover:shadow-[0_0_40px_rgba(175,148,77,0.3)] transition-all relative overflow-hidden group">
          <span className="relative z-10">Initialize Transmission</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </Button>
      </motion.div>
      
      <p className="text-[9px] text-center text-white/20 uppercase tracking-[0.3em]">
        Encryption Active • Secure Connection Verified
      </p>
    </form>
  );
};

export default ContactForm;