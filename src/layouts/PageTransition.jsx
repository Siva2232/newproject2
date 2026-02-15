import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { 
          opacity: 0, 
          clipPath: "inset(10% 0% 10% 0%)", // Architectural "reveal" effect
          filter: "blur(10px)" 
        },
        animate: { 
          opacity: 1, 
          clipPath: "inset(0% 0% 0% 0%)", 
          filter: "blur(0px)",
          transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smoothness
            staggerChildren: 0.1 
          }
        },
        exit: { 
          opacity: 0, 
          y: -20,
          transition: { duration: 0.4 } 
        }
      }}
    >
      {children}
    </motion.div>
  );
};