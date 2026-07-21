import { Outlet, useNavigation, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "../components/common/Loader";
import EvLoader from "../components/common/EvLoader";
import FloatingContact from "../components/common/FloatingContact";
import FloatingEv from "../components/common/FloatingEv";

const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // Start true for initial load

  // Handle Loader & Scroll on Route Change
  useLayoutEffect(() => {
    // 1. Show Loader immediately
    setIsLoading(true);
    
    // 2. Scroll to top (invisible behind loader)
    window.scrollTo(0, 0);

    // 3. Hide Loader after delay (smooth transition)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1s active loader

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Prevent background scrolling while loader is visible
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        {isLoading &&
          (location.pathname.startsWith("/ev-infra") ? (
            <EvLoader key="ev-loader" />
          ) : (
            <Loader key="loader" />
          ))}
      </AnimatePresence>

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FloatingContact />
      <FloatingEv />

      <Footer />
    </>
  );
};

export default Layout;
