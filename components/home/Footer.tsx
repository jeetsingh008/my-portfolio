"use client";
import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { motion } from "framer-motion"; // ✅ Correct import

const Footer = () => {
  const themeState = useAppSelector((state) => state.darkTheme.mode);

  return (
    <div
      className={`relative h-14 overflow-hidden w-full ${
        themeState === "dark" ? "bg-gray-dark2" : "bg-white"
      } py-2 shadow-2xl transition-colors duration-300 ease-in-out`}
    >
      <motion.span
        animate={{ x: ["-100%", "100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-orbitron text-3xl lg:text-4xl 2xl:text-5xl font-bold whitespace-nowrap"
      >
        Jeet<span className="text-orange animate-pulse">.</span>
      </motion.span>
    </div>
  );
};

export default Footer;
