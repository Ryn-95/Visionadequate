"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsMounted(false), 1000); // Wait for fade out animation
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#F4F4F0] flex items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="/assets/logo/logo.png" alt="Vision Adéquate" className="h-16 md:h-24 w-auto object-contain invert" />
      </motion.div>
    </motion.div>
  );
}
