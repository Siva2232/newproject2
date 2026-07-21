import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className="w-full overflow-x-clip"
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
          },
          // Clear clip-path/filter once done: leaving them inline makes this
          // wrapper the containing block for position:fixed children, which
          // breaks fixed navbars/overlays (most visibly on mobile).
          transitionEnd: {
            clipPath: "none",
            filter: "none"
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

export default PageTransition;
