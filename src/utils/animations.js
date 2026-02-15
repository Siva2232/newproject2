// ================================
// 🔹 BASIC FADE ANIMATIONS
// ================================

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// ================================
// 🔹 STAGGER CONTAINER
// ================================

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// ================================
// 🔹 PAGE TRANSITION
// ================================

export const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.6 },
};

// ================================
// 🔹 SCALE HOVER EFFECT
// ================================

export const scaleHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.97 },
};

// ================================
// 🔹 HERO PARALLAX EFFECT
// ================================

export const heroParallax = {
  hidden: { scale: 1.2 },
  visible: {
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};
